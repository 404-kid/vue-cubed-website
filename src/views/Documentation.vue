<template>
  <v-container grid-list-md fill-height text-xs-center fluid >
    <v-layout row wrap align-center>
    <v-flex xs2 fill-height>
      <DocNav/>
    </v-flex>
       <v-divider 
      class="mx-1"
      vertical
    ></v-divider>
    <v-flex xs9 fill-height>
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

<style>
.notice{
  padding: 1rem !important;
  text-align: left;
}
.width-100{
  width: 100%;
  text-align: left;
}
</style>