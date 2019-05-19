<template>
  <v-container bg>
    <v-layout row wrap align-center>
      <v-flex xs6 >
          <v-container bg>
            <v-layout row wrap align-center>
              <v-flex xs6 >
                <v-flex xs12 >
                  <v-btn v-on:click="cube=true" flat large>Cube</v-btn>
                </v-flex>
                <v-flex xs12 >
                  <v-btn v-on:click="sphere=true" flat large>Sphere</v-btn>
                </v-flex>
                <v-flex xs12 >
                  <v-btn v-on:click="cylinder=true" flat large>Cylinder</v-btn>
                </v-flex>
              </v-flex> 
              <v-flex xs6 >
                <v-flex xs12 >
                  <v-btn v-on:click="torus=true" flat large>Torus</v-btn>
                </v-flex>
                <v-flex xs12 >
                  <v-btn v-on:click="cone=true" flat large>Cone</v-btn>
                </v-flex>
                <v-flex xs12 >
                  <v-btn v-on:click="animate()" flat large>Animation</v-btn>
                </v-flex>
              </v-flex>
              <v-flex xs12 >
                <v-btn v-on:click="clearScene" flat large>Clear</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
      </v-flex> 
      <v-flex xs6>
        <VueScene class="scene"/>
        <Cube v-if="cube === true" color="rgb(200,0,0)" :rotation="{x:0, y:-10, z:0}"/>
        <Sphere v-if="sphere === true" color="rgb(200,200,0)" :radius="4" :segments="{w:20, h:20}"/>
        <Cylinder  v-if="cylinder === true" color="rgb(0,200,200)" :radius="{top:3,bot:3}" :height="6"/>
        <Cone v-if="cone === true" color="rgb(0,0,200)" :radius="3" :segments="60"/>
        <Torus v-if="torus === true" color="rgb(0,200,0)" :rotation="{x:0, y:-.7, z:0}"/>
        <Cube v-if="animation === true" color="rgb(200,200,200)" :cube="box" :size="{w:10, h:3, d:3}"/>
      </v-flex> 
      <v-flex xs12>
        <div v-if="cube === true">
          <kbd class="headline width-100">
    &lt;Cube/&gt;
          </kbd>
          <p class="headline">Props:</p>
          <p class="headline">
            <kbd class="headline">color="rgb(&lt;rgb values 0-255&gt;)"</kbd>
            <br>
            The Color accepts a rgb value. The default is <kbd class="headline">color="rgb(250,250,250)"</kbd> The example is <kbd class="headline">color="rgb(200,0,0)"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:rotation="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Rotation prop accepts a x, y, z object. The default is <kbd class="headline">:rotation="{x:0, y:0, z:0}"</kbd> The example is <kbd class="headline">:rotation="{x:0, y:-10, z:0}"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:size="{w:&lt;num&gt;, h:&lt;num&gt;, d:&lt;num&gt;}"</kbd>
            <br>
            The Size prop accepts a w, h, d object. The default is <kbd class="headline">:size="{w:5, h:5, d:5}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:position="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Position prop accepts a x, y, z object. The default is <kbd class="headline">:position="{x:0, y:0, z:0}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:cube="&lt;name&gt;"</kbd>
            <br>
            This is the name property. It is for databinding and mostly used for animation. More info there.
          </p>
        </div>
        <div v-if="sphere === true">
          <kbd class="headline width-100">
    &lt;Sphere/&gt;
          </kbd>
          <p class="headline">Props:</p>
          <p class="headline">
            <kbd class="headline">color="rgb(&lt;rgb values 0-255&gt;)"</kbd>
            <br>
            The Color accepts a rgb value. The default is <kbd class="headline">color="rgb(250,250,250)"</kbd> The example is <kbd class="headline">color="rgb(200,200,0)"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:rotation="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Rotation prop accepts a x, y, z object. The default is <kbd class="headline">:rotation="{x:0, y:0, z:0}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:radius="&lt;num&gt;"</kbd>
            <br>
            The Radius prop accepts a number, think of it as the size of the sphere. The default is <kbd class="headline">:radius="5"</kbd> The example is <kbd class="headline">:radius="4"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:position="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Position prop accepts a x, y, z object. The default is <kbd class="headline">:position="{x:0, y:0, z:0}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:segments="{w:&lt;num&gt;, h:&lt;num&gt;}"</kbd>
            <br>
            The Segments prop accepts a w, h object, its the number sides the sphere, more sides means more definition but more time to load. The default is <kbd class="headline">:segments="{w:16, h:16}"</kbd> The example is <kbd class="headline">:segments="{w:20, h:20}"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:sphere="&lt;name&gt;"</kbd>
            <br>
            This is the name property. It is for databinding and mostly used for animation. More info there.
          </p>
        </div>
        <div v-if="cylinder === true">
          <kbd class="headline width-100">
    &lt;Cylinder/&gt;
          </kbd>
          <p class="headline">Props:</p>
          <p class="headline">
            <kbd class="headline">color="rgb(&lt;rgb values 0-255&gt;)"</kbd>
            <br>
            The Color accepts a rgb value. The default is <kbd class="headline">color="rgb(250,250,250)"</kbd> The example is <kbd class="headline">color="rgb(0,200,200)"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:rotation="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Rotation prop accepts a x, y, z object. The default is <kbd class="headline">:rotation="{x:0, y:0, z:0}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:height="&lt;num&gt;"</kbd>
            <br>
            The Height prop accepts a number. The default is <kbd class="headline">:height="10"</kbd> The example is <kbd class="headline">:height="5"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:position="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Position prop accepts a x, y, z object. The default is <kbd class="headline">:position="{x:0, y:0, z:0}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:radius="{top:&lt;num&gt;, bot:&lt;num&gt;"</kbd>
            <br>
            The Radius prop accepts a top, bot object, think of it as the size of the circles on the sides. The default is <kbd class="headline">:radius="{top:2, bot:2"</kbd> The example is <kbd class="headline">:radius="{top:3, bot:3"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:segments="&lt;num&gt;"</kbd>
            <br>
            The Segments prop accepts a number, its the number sides the cylinder, more sides means more definition but more time to load. The default is <kbd class="headline">:segments="20"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:cylinder="&lt;name&gt;"</kbd>
            <br>
            This is the name property. It is for databinding and mostly used for animation. More info there.
          </p>
        </div>
        <div v-if="torus === true">
          <kbd class="headline width-100">
    &lt;Torus/&gt;
          </kbd>
          <p class="headline">Props:</p>
          <p class="headline">
            <kbd class="headline">color="rgb(&lt;rgb values 0-255&gt;)"</kbd>
            <br>
            The Color accepts a rgb value. The default is <kbd class="headline">color="rgb(250,250,250)"</kbd> The example is <kbd class="headline">color="rgb(0,200,0)"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:rotation="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Rotation prop accepts a x, y, z object. The default is <kbd class="headline">:rotation="{x:0, y:0, z:0}"</kbd> The example is <kbd class="headline">:rotation="{x:0, y:-.7, z:0}"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:radius="&lt;num&gt;"</kbd>
            <br>
            The Radius prop accepts a number. The default is <kbd class="headline">:radius="3"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:position="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Position prop accepts a x, y, z object. The default is <kbd class="headline">:position="{x:0, y:0, z:0}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:tub="&lt;num&gt;"</kbd>
            <br>
            The Tube prop accepts a number. The default is <kbd class="headline">:tube="1"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:segments="{rad:&lt;num&gt;, tub:&lt;num&gt;}"</kbd>
            <br>
            The Segments prop accepts a rad, tub object, its the number sides the radius and tube have, more sides means more definition but more time to load. The default is <kbd class="headline">:segments="{rad:18, tub:20}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:torus="&lt;name&gt;"</kbd>
            <br>
            This is the name property. It is for databinding and mostly used for animation. More info there.
          </p>
        </div>
        <div v-if="cone === true">
          <kbd class="headline width-100">
    &lt;Cone/&gt;
          </kbd>
          <p class="headline">Props:</p>
          <p class="headline">
            <kbd class="headline">color="rgb(&lt;rgb values 0-255&gt;)"</kbd>
            <br>
            The Color accepts a rgb value. The default is <kbd class="headline">color="rgb(250,250,250)"</kbd> The example is <kbd class="headline">color="rgb(0,0,200)"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:rotation="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Rotation prop accepts a x, y, z object. The default is <kbd class="headline">:rotation="{x:0, y:0, z:0}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:height="&lt;num&gt;"</kbd>
            <br>
            The Height prop accepts a number. The default is <kbd class="headline">:height="5"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:position="{x:&lt;num&gt;, y:&lt;num&gt;, z:&lt;num&gt;}"</kbd>
            <br>
            The Position prop accepts a x, y, z object. The default is <kbd class="headline">:position="{x:0, y:0, z:0}"</kbd> The example is the same.
          </p>
          <p class="headline">
            <kbd class="headline">:segments="&lt;num&gt;"</kbd>
            <br>
            The Segments prop accepts a number, its the number sides the cone has, more sides means more definition but more time to load. The default is <kbd class="headline">:segments="30"</kbd> The example is the same <kbd class="headline">:segments="60"</kbd>
          </p>
          <p class="headline">
            <kbd class="headline">:cone="&lt;name&gt;"</kbd>
            <br>
            This is the name property. It is for databinding and mostly used for animation. More info there.
          </p>
        </div>
        <div v-if="animation === true">
          <p class="headline">Animation:</p>
          <p class="headline">Animation relies on the name prop. To use it create a data attribute as an empty object like so
            <kbd class="headline width-100">  
            data() {
              return {
                box: {}
              }
            },
            </kbd>
            Bind the data to the component
            <kbd class="headline width-100">  
            &lt;Cube :cube="box" /&gt;
            </kbd>
            Next you need a method to manipulate the attributes of the object 
            <kbd class="headline width-100">  
            animate() {
              this.box.val.rotation.y += 0.02
              requestAnimationFrame( this.animate )
              this.$render()
            }
            </kbd>
            Finally create a call to this method to begin the animation at the desired time.
            <kbd class="headline width-100">  
            mounted() {
              this.animate()
            }
            </kbd>
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { log } from 'util';
export default {
  name: 'Examples',
  data() {
    return {
      cube: false,
      sphere: false,
      cylinder: false,
      torus: false,
      cone: false,
      animation: true,
      ligth: {},
      box: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.animation = false
      this.$scene.remove.apply(this.$scene, this.$scene.children)
      this.$camera.position.set(0,5,15)
      this.$camera.rotation.set(-.3,0,0)
      this.light = new this.$THREE.PointLight( 0xffffff, .4, 100 )
      this.light.position.set( 10, 7, 5 )
      this.$renderer.setClearColor("rgba(255,255,255,1)")
      this.$scene.add( this.light )
    },
    clearScene() {
      this.$scene.remove.apply(this.$scene, this.$scene.children)
      this.$scene.add( this.light )
      this.cube = false
      this.sphere = false
      this.cylinder = false
      this.torus = false
      this.cone = false
      this.animation = false
    },
    animate() {
      if (this.animation === false){
      this.animation = true
      this.step()
      }
    },
    step() {
      if (this.animation === true) {
        requestAnimationFrame( this.step )
        this.$render()
        this.box.val.rotation.y += 0.02
      }
    }
  }
}
</script>

<style scoped>
.scene{
  height: 25rem;
  width: 25rem;
}
p{
  margin-top: 2rem !important;
  text-align: left;
}
</style>
