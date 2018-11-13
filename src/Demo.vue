<template>
  <div id="app">
      <div class="container" v-resize-text>
          <h1><b><span style="color:#3eaf7c">vue-resize-text</span></b></h1>
          <h6> A vue directive which automatically resize font size based on element width.</h6>
          <h6><u>Resize the browser viewport to see the effect in action.</u></h6>
      </div>
      <div v-resize-text="{ratio: 1}">Hello World</div>
      <pre>&lt;div v-resize-text="{ratio: 1}"&gt;Hello World&lt;/div&gt;</pre>
      <div v-resize-text="{ratio: 1.2}">Hello World</div>
      <div v-resize-text="{ratio: 1.5}">Hello World</div>
  </div>
</template>

<script>
import ResizeText from '../dist/js/app.js'
export default {
  name: 'app',
  directives: {
    ResizeText
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
    font-size: 1em;
    margin: 20px 0;
}
h6 {
    font-size: .25em;
    margin: 10px;
}
pre {
    font-size: 10px;
}
</style>
