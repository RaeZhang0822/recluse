<script>
  import MusicBox from '../../components/MusicBox.svelte';
</script>

<div>
  2020年9月21日凌晨3点，南京开往北京的硬卧火车车厢中，睡在我对面铺位的大叔正在打呼噜:
  <MusicBox desc="呼噜原声采样" src="snore_sound.mp3" defaultVol={1} />
  <div class="bgm-container">
    <div class="title">
      我既没有降噪耳机，也没有耳塞，请帮助我选择一首合适的背景音乐，伴着呼噜声让我入睡。
    </div>

    <MusicBox
      desc="1.双吉他演奏：《头骨 - Shape of My Heart（from Leon）》"
      src="头骨 - Shape of My Heart（from Leon）.mp3"
    />

    <MusicBox desc="2.热情摇滚：《霓虹花园 - 无人的海边》" src="无人的海边.m4a" defaultVol={0.05}/>

    <MusicBox
      desc="3.网抑云呼噜歌单曲目：《Sun City Girls - Vine Street Piano (Orchestral)》"
      src="Sun City Girls - Vine Street Piano (Orchestral).mp3"
    />

    <MusicBox
      desc="4.网抑云中低频表现歌单：《Chantal Chamberland - J'ai deux amours》"
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
