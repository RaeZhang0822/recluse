<script>
    const fetchAllSounds = ()=>{

    }
    const onChooseMusic = ()=>{

    }
</script>

<div>
    <audio controls>
        <source src="snore_sound.mp3" type="audio/mp3">
        Your browser does not support the <code>audio</code> element.
    </audio>

    <div>
        请选择背景音乐
        <div>
            <div>双吉他演奏：《头骨 - Shape of My Heart（from Leon）》</div>
            <audio controls volumn={0.1}>
                <source src="头骨 - Shape of My Heart（from Leon）.mp3" type="audio/mp3">
                Your browser does not support the <code>audio</code> element.
            </audio>

        </div>
        <div>热情摇滚：《无人的海边》</div>
        <div>网抑云歌单曲目：《Sun City Girls - Vine Street Piano (Orchestral)》
            <!-- 《α·Pav - Princess》
            <audio controls>
            <source src="α·Pav - Princess.mp3" type="audio/mp3">
            Your browser does not support the <code>audio</code> element.
            </audio> -->

            <audio controls volumn={0.1}>
                <source src="Sun City Girls - Vine Street Piano (Orchestral).mp3" type="audio/mp3">
                Your browser does not support the <code>audio</code> element.
            </audio>
        </div>
        <div>中低频表现歌单：《Chantal Chamberland - J'ai deux amours》
        <audio controls volumn={0.1}>
                <source src="Chantal Chamberland - J'ai deux amours.mp3" type="audio/mp3">
                Your browser does not support the <code>audio</code> element.
            </audio>
        </div>

        <div>综合最佳：《Chantal Chamberland - J'ai deux amours》
            <audio controls volumn={0.1}>
                <source src="Chantal Chamberland - J'ai deux amours.mp3" type="audio/mp3">
                Your browser does not support the <code>audio</code> element.
            </audio>
        </div>
    </div>
   
</div>

<style>
    .wrapper{
        
    }
</style>