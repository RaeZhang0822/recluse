<script>
  export let desc;
  export let src;
</script>

<div class="music-box">
  <div>{desc}</div>
  <audio controls volumn={0.1}>
    <source {src} type="audio/mp3" />
    Your browser does not support the
    <code>audio</code>
     element.
  </audio>
</div>

<style>
  .music-box {
    margin: 20px;
  }
</style>
