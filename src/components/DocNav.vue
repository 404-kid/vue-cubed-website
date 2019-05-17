<template>
  <v-container bg>
    <v-layout column>
      <v-btn flat large><router-link to="/documentation">Install and Initiate</router-link></v-btn>
      <v-btn flat large><router-link to="/documentation/component-use">Creating a scene</router-link></v-btn>
      <v-btn flat large><router-link to="/documentation/global-var">Global Varibles</router-link></v-btn>
      <v-btn flat large><router-link to="/documentation/geometries">Geometries</router-link></v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'DocNav'
}
</script>