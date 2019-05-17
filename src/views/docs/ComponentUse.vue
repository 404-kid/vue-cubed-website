<template>
<v-container>
  <p class="headline">Creating a scene is very simple all that it requires is use of the <kbd class="headline">&lt;VueScene/&gt;</kbd> component.</p>
  <p class="headline">In a .vue component file simply put <kbd class="headline">&lt;VueScene/&gt;</kbd> in the template section like so.</p>
  <kbd class="headline width-100"> 
    &lt;template&gt;
      &lt;VueScene/&gt;
    &lt;/template&gt;
  </kbd>
  <p class="headline">It should me noted that the <kbd class="headline">&lt;VueScene/&gt;</kbd> component creates a render in a window of the size thats passed in via css for instance <kbd class="headline">&lt;VueScene style="height:100px;width:100px"/&gt;</kbd> creates a render window of 100px by 100px.</p>
  <code class="headline notice">NOTICE: Do not attempt to have two &lt;VueScene/&gt; components loaded at the same time. They would share varibles and overwrite eachother.</code>
</v-container>
</template>

<script>
  export default {
    name: "component-use"
  }
</script>

<style scoped>
a{
  text-decoration: underline;
}
p{
  margin-top: 2rem !important;
  text-align: left;
}
</style>