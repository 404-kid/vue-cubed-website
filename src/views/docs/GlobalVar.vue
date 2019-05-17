<template>
  <v-container>
    <p class="headline">By far the most important feature of Vue Cubed is its global varibles. They allow the powerful tools that Vue has to be used in tandom with webGL to expand the possiblities of 3D Web Development</p>
    <p class="headline"><kbd class="headline">$THREE</kbd> makes reference to three.js use this to create anything you can with three.js but replace <kbd class="headline">THREE</kbd> with <kbd class="headline">this.$THREE</kbd></p>
    <kbd class="headline width-100">
      let area = new this.$THREE.CubeGeometry(5,5,5)
      let boxMat = new this.$THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
      let box = new this.$THREE.Mesh(area, boxMat)
    </kbd>
    <code class="headline notice">NOTICE: The this. in <kbd class="headline">this.$THREE</kbd> referese to the component and is nesessary to use. If using a function nested in a method its recomended to use <kbd class="headline">const self = this</kbd> in the method then <kbd class="headline">self.$THREE</kbd> in the nested function.</code>
    <p class="headline"><kbd class="headline">$scene</kbd> is the global scene. It is populated and emptied based off of components in use. It has the properties of a THREE.scene.</p>
    <kbd class="headline width-100">
      this.$scene.add(box)
    </kbd>
    <p class="headline"><kbd class="headline">$renderer</kbd> is the global renderer. It can be manipulated like so</p> 
    <kbd class="headline width-100">
      this.$renderer.setClearColor(color)
    </kbd>
    <p class="headline"><kbd class="headline">$camera</kbd> is the global camera. Without manipulating it in an init method it is placed at 0,0,0 facing towards 0,0,0.</p>
    <kbd class="headline width-100">
      this.$camera.position.set(1,1,25)
    </kbd>
  </v-container>
</template>

<script>
  export default {
    name: "global-var"
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
</style>