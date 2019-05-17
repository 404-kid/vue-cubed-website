<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="spacer"/>
      </v-flex>
      <v-flex xs4>
        <img class="px-0" src="../assets/logo.png"/>
      </v-flex>
      <v-flex xs8>
        <p class="display-3 font-weight-medium text-xs-center">The best way to bring your sites into the future.</p>
      </v-flex>
      <v-flex xs12>
        <div class="spacer"/>
      </v-flex>
      <v-flex xs4>
        <router-link to="/documentation">
          <v-btn round large color="primary">
            <p class="display-1 font-weight-medium text-xs-center white--text">Get started</p>
          </v-btn>
        </router-link>
      </v-flex>
      <v-flex xs4>
        <a href="https://github.com/404-kid/vue-cubed">
          <v-btn round large flat outline color="primary">
            <p class="display-1 font-weight-medium text-xs-center primary--text">GitHub</p>
          </v-btn>
        </a>
      </v-flex>
      <v-flex xs4>
        <a href="https://www.npmjs.com/package/vue-cubed">
          <v-btn round large flat outline color="red darken-4">
            <p class="display-1 font-weight-medium text-xs-center red--text text--darken-4">npm</p>
          </v-btn>
        </a>
      </v-flex>
      <v-flex xs12>
        <div class="spacer"/>
      </v-flex>
      <v-flex xs12>
        <div class="spacer"/>
      </v-flex>
      <v-flex xs12>
        <p class="headline font-weight-medium text-xs-center">This is a Vue.js plug-in. It is intended to streamline 3D Vue.js projects by creating and manipulating one renderer to prevent memory leaks. It also has a full module system for Three.js which it uses to render scenes. As well as a tool kit of 3D components to make development simpler.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "LargeLanding"
  }
</script>

<style scoped>
.spacer{
  height: 4rem;
  width: 3rem;
}
</style>