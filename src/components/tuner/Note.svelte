<script>
    export let isActive;
    export let note;
    export let index;
    export let octave;
    const middleA = 440;
    const semitone = 69;
    const getStandardFrequency = function(note) {
    return middleA * Math.pow(2, (note - semitone) / 12)
    }
    const value = 12*(octave+1)+index;
    const frequency = getStandardFrequency(value);  
</script>


<div class="note" class:active={isActive}>
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