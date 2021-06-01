<script>
  import Note from './Note.svelte';
  export let value; //当前检测到的音名的MIDI编号
  export let frequency; //当前频率
  export let nodeList; // node列表的dom节点
  const octaveList = [2, 3, 4, 5];
  const noteStrings = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

  const handleActive = (e) => {
    const dom = e.detail;
    nodeList.scrollLeft = dom.offsetLeft - (nodeList.clientWidth - dom.clientWidth) / 2;
  };
</script>

<div class="notes">
  <div class="notes-list" bind:this={nodeList}>
    {#each octaveList as octave}
      {#each noteStrings as note, index}
        <Note
          {note}
          {octave}
          isActive={value === 12 * (octave + 1) + index}
          listDom={nodeList}
          on:onActive={handleActive}
        />
      {/each}
    {/each}
  </div>
  <div class="frequency">
    {frequency.toFixed(2)}
    <span>Hz</span>
  </div>
</div>

<style>
  .notes {
    margin: auto;
    width: 400px;
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
  }
  .notes-list {
    overflow: auto;
    overflow: -moz-scrollbars-none;
    white-space: nowrap;
    -ms-overflow-style: none;
    -webkit-mask-image: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0),
      #fff,
      rgba(255, 255, 255, 0)
    );
  }

  .frequency {
    font-size: 32px;
  }

  .frequency span {
    font-size: 50%;
    margin-left: 0.25em;
  }

  .notes-list::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    .notes {
      width: 100%;
    }
  }
</style>
