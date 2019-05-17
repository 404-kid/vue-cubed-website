<template>
  <v-container>
    <p class="headline">In order to make development smoother Vue Cubed offers an expanding number of geometries to use in your web apps. These must be placed in the same component as the &lt;VueScene/&gt; component and offer a varitey of customization options through props.</p>
    <Examples/>
  </v-container>
</template>

<script>
import Examples from '../../components/Examples'
  export default {
    name: "geometries",
    components: {
      Examples
    }
  }
</script>

<style scoped>
.width-100{
  width: 100%;
  text-align: left;
}
p{
  margin-top: 2rem !important;
  text-align: left;
}
.example{
  width:30rem;
  height: 30rem;
}
</style>