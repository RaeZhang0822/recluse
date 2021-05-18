<script>
  import { afterUpdate, createEventDispatcher} from 'svelte';

    export let isActive;
    export let note;
    export let octave;

    const dispatch = createEventDispatcher();

    let curNodeDom = null;

    afterUpdate(()=>{
        if(isActive){
            dispatch('onActive',curNodeDom)
        }
    })
    
</script>


<div class="note" class:active={isActive} bind:this={curNodeDom}>
    {note}
    <span class="note-sharp"></span>
    <span class="note-octave">{octave.toString()}</span>
</div>

<style>
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

    .note {
    -webkit-tap-highlight-color: transparent;
    }

    .note span {
    position: absolute;
    right: 0.25em;
    font-size: 40%;
    font-weight: normal;
    }

    .note-sharp {
    top: 0.3em;
    }

    .note-octave {
    bottom: 0.3em;
    }

</style>