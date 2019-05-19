<template>
  <v-toolbar dense fixed>
    <router-link to="/"><v-btn flat><v-toolbar-title>Vue Cubed</v-toolbar-title></v-btn></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat><router-link to="/documentation/">Docs</router-link></v-btn>
      <!-- <v-btn flat><router-link to="/infomation">Info</router-link></v-btn> -->
      <v-btn flat><a href="https://github.com/404-kid/vue-cubed">Code</a></v-btn>
    </v-toolbar-items>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-toolbar-side-icon v-on="on" class="hidden-sm-and-up"/>
      </template>
      <v-list>
      <v-container bg>
        <v-layout column>
          <v-btn flat><router-link to="/documentation">Docs</router-link></v-btn>
          <!-- <v-btn flat><router-link to="/information">Info</router-link></v-btn> -->
          <v-btn flat><a href="https://github.com/404-kid/vue-cubed">Code</a></v-btn>
        </v-layout>
      </v-container>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Nav'
}
</script>