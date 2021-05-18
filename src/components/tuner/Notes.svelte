<script>
  import Note from './Note.svelte'
  export let value; //当前检测到的频率value
  export let frequency;
  const octaveList = [2,3,4,5];
  const noteStrings = [
      'C',
      'C♯',
      'D',
      'D♯',
      'E',
      'F',
      'F♯',
      'G',
      'G♯',
      'A',
      'A♯',
      'B'
    ]

</script>

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

.note {
  font-size: 90px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-right: 30px;
  padding-left: 10px;
}

.note.active {
  color: #e74c3c;
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

.notes-list::-webkit-scrollbar {
  display: none;
}



@media (max-width: 768px) {
  .notes {
    width: 100%;
  }
}

</style>

<div class="notes">
  <div class="notes-list">
    {#each octaveList as octave}
      {#each noteStrings as note, index}
        <Note note={note} index={index} octave={octave} isActive={value === 12*(octave+1)+index}/>
      {/each}
    {/each}
  </div>
  <div class="frequency"><span>{frequency.toFixed(2)}Hz</span></div>
</div>