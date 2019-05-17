import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueCubed from 'vue-cubed'
import "./stylus/main.styl"

Vue.use(VueCubed)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
