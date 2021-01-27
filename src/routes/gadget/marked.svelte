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


function handleShowType(value){
  console.log('click')
    type = value;
}

let input='';
const TYPES={
    PREVIEW:0,
    HTML:1,
    AST:2
}
let type = TYPES.PREVIEW;
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
    width: 95%;
    overflow: scroll;
    resize: vertical;
    height: 400px;
    font-family: monospace;
    white-space: pre;
    word-wrap: normal;
    background-color: white;
    color: black;
 }

 .menu{
   margin-bottom: 5px;
 }
 .output{
   min-height:400px;
   padding: 10px;
   border: 1px solid blue;
   border-radius: 4px;
 }
</style>
<h1>Marked Page</h1>

<div class="container">
    <div class="box">
       <div class="menu"> 
        <button on:click={()=>input=""}>CLEAR</button>
      </div>
        <textarea class="textarea" bind:value={input}></textarea>
    </div>
    <div class="box">
      <div class="menu"> 
        <button on:click={()=>handleShowType(TYPES.PREVIEW)}>PREVIEW</button>
        <button on:click={()=>handleShowType(TYPES.HTML)}>HTML</button>
        <button on:click={()=>handleShowType(TYPES.AST)}>AST</button>
      </div>
      <div class="output">
        {#if type === TYPES.PREVIEW}
         {@html marked(input)}
        {:else if type === TYPES.HTML}
         {marked(input)}
        {:else if type === TYPES.AST}
         {input}
        {/if}
      </div>
       
       
    </div>
</div>

