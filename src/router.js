import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import(/* webpackChunkName: "documentation" */ './views/Documentation.vue'),
      children: [
        {
          path: '/',
          name: 'getting-started',
          component: () => import(/* webpackChunkName: "getting-started" */ './views/docs/GetStarted.vue'),
        },
        {
          path: 'component-use',
          name: 'component-use',
          component: () => import(/* webpackChunkName: "component-use" */ './views/docs/ComponentUse.vue'),
        },
        {
          path: 'global-var',
          name: 'global-var',
          component: () => import(/* webpackChunkName: "global-var" */ './views/docs/GlobalVar.vue'),
        },
        {
          path: 'geometries',
          name: 'geometries',
          component: () => import(/* webpackChunkName: "geometries" */ './views/docs/Geometries.vue'),
        }
      ]
    },
    {
      path: '/information',
      name: 'information',
      component: () => import(/* webpackChunkName: "information" */ './views/Information.vue')
    }
  ]
})
