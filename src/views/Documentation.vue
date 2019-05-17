<template>
  <v-container grid-list-md fill-height text-xs-center fluid>
    <v-layout row wrap align-center>
    <v-flex xs12>
      <p class="display-1">Documentation</p>
    </v-flex>
    <v-divider 
      class="mx-1"
      vertical
    ></v-divider>
    <v-flex xs2>
      <DocNav/>
    </v-flex>
       <v-divider 
      class="mx-1"
      vertical
    ></v-divider>
    <v-flex xs9>
      <router-view></router-view>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DocNav from "../components/DocNav"
export default {
  name: 'documentation',
  components: {
    DocNav
  },
}
</script>

<style scoped>

</style>