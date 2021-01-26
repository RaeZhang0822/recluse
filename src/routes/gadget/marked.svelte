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

// document.getElementById('content').innerHtml = marked('# Marked in browser\n\nRendered by **marked**');

</script>

<h1>About this site</h1>

<p>This is the 'marked' page. There's not much here.</p>
<div id = "content"></div>