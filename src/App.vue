<template>
  <v-app>
    <Nav/>
    <div class="navArea"/>
    <router-view height="100%" width="100%"></router-view>
  </v-app>
</template>

<script>
import Nav from "./components/Nav"


export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, .87) !important;
}
p{
  color: #273849;
}
.navArea{
  width: 1rem;
  height: 3rem;
}
</style>