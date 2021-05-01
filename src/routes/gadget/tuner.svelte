<script>
import { connect } from "http2";

  export let audio;
</script>

<!-- <script>
  // 创建Audio Context
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioCtx = new AudioContext();
  // 创建Analyser Node
  const analyser = audioCtx.createAnalyser();
  AnalyserNode.fftSize = 512;
  // 设置Source Node
  const source = AudioContext.createMediaElementSource(audio);
  // 将音频源关联到分析器；
  SourceBuffer.connect(analyser);

  // 获取频率数据
  const bufferLength = AnalyserNode.frequencyBinCount;
  const dataArray = new Unit8Array(bufferLength);

  analyser.getByteFrequencyData(dataArray);

  
</script> -->


<div style="height: 100%; width: 100%;">
  <div>
    <audio bind:this={audio} controls src=""/>     
  </div>
</div>