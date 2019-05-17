<template>
<v-container>
  <p class="headline">To install Vue Cubed, first you must have a Vue project created, if you do not know how todo that <a href="https://cli.vuejs.org/" class="primary--text">this</a> will help you.</p>
  <p class="headline">While in the project folder, use the following command to install the plugin to the project.</p>
  <kbd class="headline width-100">npm i vue-cubed --save</kbd>
  <p class="headline">Once the package has installed itself, import it and tell Vue to use it. Do this by navagating to <code>(project name)/src/main.js</code> and ensuring you have the following code.</p>
  <kbd class="headline width-100">
    import Vue from 'vue'
    import VueCubed from 'vue-cubed'

    Vue.use(VueCubed)
  </kbd>
  <p class="headline">When properly done your project should show the message <code>THREE.WebGLRenderer</code> in the development console</p>
</v-container>
</template>

<script>
  export default {
    name: "getting-started"
  }
</script>

<style scoped>
a{
  text-decoration: underline;
}
.width-100{
  width: 100%;
  text-align: left;
}
p{
  margin-top: 2rem !important;
  text-align: left;
}
</style>