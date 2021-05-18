<script>

  // export let onNoteDetected = function(note) {
  //   if (self.notes.isAutoMode) {
  //     if (self.lastNote === note.name) {
  //       self.update(note)
  //     } else {
  //       self.lastNote = note.name
  //     }
  //   }
  // }
export let onNoteDetected = null;

import Notes from '../../components/tuner/Notes.svelte'
import Meter from '../../components/tuner/Meter.svelte'
import Aubio from '../../components/tuner/aubio.js'
let pitchDetector = null; // 计算音高的方法，等Aubio加载之后才能定义

const audioContext = new window.AudioContext();
const analyser =   audioContext.createAnalyser();
const bufferSize = 4096;
const scriptProcessor =   audioContext.createScriptProcessor(
      bufferSize,
    1,
    1
  );
const getNote = function(frequency) {
  const note = 12 * (Math.log(frequency /   middleA) / Math.log(2))
  return Math.round(note) +   semitone
};

const startRecord=()=>{
  navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function(stream) {
         audioContext.createMediaStreamSource(stream).connect( analyser)
         analyser.connect( scriptProcessor)
         scriptProcessor.connect( audioContext.destination)
         scriptProcessor.addEventListener('audioprocess', function(event) {
          const frequency =  pitchDetector.do(
            event.inputBuffer.getChannelData(0)
          )
          if (frequency &&  onNoteDetected) {
            const note =  getNote(frequency)
            console.log('note',note);
            //  onNoteDetected({
            //   name:  noteStrings[note % 12],
            //   value: note,
            //   cents:  getCents(frequency, note),
            //   octave: parseInt(note / 12) - 1,
            //   frequency: frequency
            // })
          }
        })
      })
      .catch(function(error) {
        alert(error.name + ': ' + error.message)
      })
}

  Aubio().then(function(aubio) {
    console.log(1)
    try{
      pitchDetector = new aubio.Pitch(
      'default',
      bufferSize,
      1,
      audioContext.sampleRate
    )
    console.log('pitchDetector',pitchDetector)
    startRecord()
    }catch(e){
      console.log('e',e)

    }
    
  })

</script>


<div style="height: 100%; width: 100%;">
   <canvas class="frequency-bars"></canvas>
    <Meter deg={45}/>
    <Notes/>
    <div class="frequency"><span>Hz</span></div>
    <div class="a4">A<sub>4</sub> = <span>440</span> Hz</div>
</div>
