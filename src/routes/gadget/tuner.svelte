<script>
  // 参考 https://www.jianshu.com/p/4fd8779943c3

  import Notes from '../../components/tuner/Notes.svelte';
  import Meter from '../../components/tuner/Meter.svelte';
  import Aubio from '../../components/tuner/aubio.js';
  let pitchDetector = null; // 计算音高的方法，等Aubio加载之后才能定义

  const middleA = 440;
  const semitone = 69;
  const bufferSize = 4096;
  const noteStrings = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

  let curValue = 0;
  let curDeg = 0;
  let curFrq = 0;
  const audioContext = new window.AudioContext();
  const analyser = audioContext.createAnalyser();
  const scriptProcessor = audioContext.createScriptProcessor(bufferSize, 1, 1);

  const getNote = function (frequency) {
    const note = 12 * (Math.log(frequency / middleA) / Math.log(2));
    return Math.round(note) + semitone;
  };

  const getStandardFrequency = function (note) {
    return middleA * Math.pow(2, (note - semitone) / 12);
  };

  const getCents = function (frequency, note) {
    return Math.floor((1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2));
  };

  const onNoteDetected = function (note) {
    const { value, cents, frequency } = note;
    curValue = value;
    curDeg = (cents / 50) * 45;
    curFrq = frequency;
  };

  const startRecord = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        audioContext.createMediaStreamSource(stream).connect(analyser);
        analyser.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);
        scriptProcessor.addEventListener('audioprocess', function (event) {
          const frequency = pitchDetector.do(event.inputBuffer.getChannelData(0));
          if (frequency && onNoteDetected) {
            const note = getNote(frequency);
            onNoteDetected({
              name: noteStrings[note % 12],
              value: note,
              cents: getCents(frequency, note),
              octave: parseInt(note / 12) - 1,
              frequency: frequency,
            });
          }
        });
      })
      .catch(function (error) {
        alert(error.name + ': ' + error.message);
      });
  };

  Aubio().then(function (aubio) {
    pitchDetector = new aubio.Pitch('default', bufferSize, 1, audioContext.sampleRate);
    startRecord();
  });
</script>

<div style="height: 100%; width: 100%;">
  <canvas class="frequency-bars" />
  <Meter deg={curDeg} />
  <Notes value={curValue} frequency={curFrq} />
  <div class="a4">
    A
    <sub>4</sub>
    =
    <span>440</span>
    Hz
  </div>
</div>

<style>
  .a4 {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  .a4 span {
    color: #e74c3c;
  }
</style>
