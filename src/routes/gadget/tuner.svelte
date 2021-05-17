<script>
  import Notes from './tuner/Notes.svelte'
AudioContext = window.AudioContext || window.webkitAudioContext

const bufferSize = 8192
const audioContext = new AudioContext()
const analyser = audioContext.createAnalyser()
const scriptProcessor = audioContext.createScriptProcessor(bufferSize, 1, 1)

// const pitchDetector = new (Module().AubioPitch)(
//     'default', bufferSize, 1, audioContext.sampleRate)

navigator.mediaDevices.getUserMedia({audio: true}).then(streamSource => {
  // connect 的顺序一定要 streamSource => analyser => scriptProcessor
  audioContext.createMediaStreamSource(streamSource).connect(analyser)
  analyser.connect(scriptProcessor)
  scriptProcessor.connect(audioContext.destination)

  scriptProcessor.addEventListener('audioprocess', event => {
    // const frequency = pitchDetector.do(event.inputBuffer.getChannelData(0))
    // if (frequency) {
    //   console.log(frequency)
    // }
  })
})
</script>


<div style="height: 100%; width: 100%;">
   <canvas class="frequency-bars"></canvas>
    <div class="meter">
      <div class="meter-dot"></div>
      <div class="meter-pointer"></div>
    </div>
    <div class="notes">
      <Notes/>
      <div class="frequency"><span>Hz</span></div>
    </div>
    <div class="a4">A<sub>4</sub> = <span>440</span> Hz</div>
</div>
