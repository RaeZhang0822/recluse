<script>
  import MusicBox from '../../components/MusicBox.svelte';
</script>

<div>
  <MusicBox desc="呼噜原声" src="snore_sound.mp3" defaultVol={1} />
  <div class="bgm-container">
    <div class="title">下面那首音乐和呼噜声最配？</div>
    <MusicBox
      desc="双吉他演奏：《头骨 - Shape of My Heart（from Leon）》"
      src="头骨 - Shape of My Heart（from Leon）.mp3"
    />
    <div>热情摇滚：《无人的海边》</div>
    <MusicBox
      desc="网抑云歌单曲目：《Sun City Girls - Vine Street Piano (Orchestral)》"
      src="Sun City Girls - Vine Street Piano (Orchestral).mp3"
    />
    <MusicBox
      desc="中低频表现歌单：《Chantal Chamberland - J'ai deux amours》"
      src="Chantal Chamberland - J'ai deux amours.mp3"
    />
  </div>
</div>

<style>
  .bgm-container {
    margin: 20px;
  }

  .title {
    margin: 10px;
  }
</style>
