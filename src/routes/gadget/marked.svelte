<script>
import marked from 'marked'
marked.setOptions({
    renderer:new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
})


function handleContentChange(){
    console.log(1)
}

let input='';
let output=''
</script>

<style>
 .container {
     width:100%;
     display:flex;
     flex-direction:row;
 }
 .box {
     width: 50%;
     height: 1000px;
 }

 .textarea{
    width: 100%;
    overflow: scroll;
    resize: vertical;
    height: 400px;
    font-family: monospace;
    white-space: pre;
    word-wrap: normal;
    background-color: white;
    color: black;
 }
</style>
<h1>Marked Page</h1>

<div class="container">
    <div class="box">
        <textarea class="textarea" bind:value={input}></textarea>
    </div>
    <div class="box">
        {@html marked(input)}
    </div>
</div>

