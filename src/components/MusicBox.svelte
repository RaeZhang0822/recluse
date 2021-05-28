<script>
  import { onMount } from 'svelte';
  export let desc;
  export let src;
  export let defaultVol;

  let audioEl;

  onMount(() => {
    audioEl.volume = defaultVol ? defaultVol : 0.1;
  });
</script>

<div class="music-box">
  <div>{desc}</div>
  <audio controls bind:this={audioEl}>
    <source {src} type="audio/mp3" />
    Your browser does not support the
    <code>audio</code>
    element.
    <track kind="captions" />
  </audio>
</div>

<style>
  .music-box {
    margin: 20px;
  }
</style>
