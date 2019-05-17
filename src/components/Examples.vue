<template>
  <v-container bg>
    <v-layout row wrap align-center>
      <v-flex xs6 >
          <v-container bg>
            <v-layout row wrap align-center>
              <v-flex xs6 >
                <v-btn v-on:click="cube=!cube" flat large>Cube</v-btn>
                <v-btn v-on:click="sphere=!sphere" flat large>Sphere</v-btn>
                <v-btn v-on:click="cylinder=!cylinder" flat large>Cylinder</v-btn>
              </v-flex> 
              <v-flex xs6 >
                <v-btn v-on:click="torus=!torus" flat large>Torus</v-btn>
                <v-btn v-on:click="cone=!cone" flat large>Cone</v-btn>
                <v-btn v-on:click="animation=!animation" flat large>Animation</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
      </v-flex> 
      <v-flex xs6>
        <VueScene class="scene"/>
        <Cube v-if="cube === true" color="rgba(200,0,0)" :rotation="{x:0, y:-10, z:0}"/>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Examples',
  data() {
    return {
      cube: false,
      sphere: false,
      cylinder: false,
      torus: false,
      cone: false,
      animation: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$camera.position.set(0,5,15)
      this.$camera.rotation.set(-.3,0,0)
      let light = new this.$THREE.PointLight( 0xff0000, .5, 100 );
      light.position.set( 10, 5, 5 );
      this.$renderer.setClearColor("rgba(255,255,255,1)")
      this.$scene.add( light );
    },
    animate(){

      this.box.val.rotation.y += 0.01
      requestAnimationFrame( this.animate )
      this.$render()
    }
  }
}
</script>

<style scoped>
.scene{
  height: 25rem;
  width: 25rem;
}
</style>
