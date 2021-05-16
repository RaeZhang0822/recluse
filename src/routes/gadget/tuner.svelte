<script>
  // 参考 https://www.jianshu.com/p/4fd8779943c3
  AudioContext = window.AudioContext || window.webkitAudioContext;

  const audioContext = new AudioContext();
  const analyser = audioContext.createAnalyser();
  const scriptProcessor = audioContext.createScriptProcessor(8192, 1, 1);

  navigator.mediaDevices.getUserMedia({ audio: true }).then((streamSource) => {
    // connect 的顺序一定要 streamSource => analyser => scriptProcessor
    audioContext.createMediaStreamSource(streamSource).connect(analyser);
    analyser.connect(scriptProcessor);
    scriptProcessor.connect(audioContext.destination);

    scriptProcessor.addEventListener("audioprocess", (event) => {
      const data = event.inputBuffer.getChannelData(0);
      // 为了避免卡住浏览器，只打印一些简单的数据
      console.log(`${data.length}, ${data[0]}`);
    });
  });
</script>

<div style="height: 100%; width: 100%;">
  <div>这是一个调音器</div>
</div>
