import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/oll',
    name: 'Oll',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Oll.vue')
  },
  {
    path: '/pll',
    name: 'Pll',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pll.vue')
  },
  {
    path: '/myalgorithms',
    name: 'Myalgorithms',
    component: () => import(/* webpackChunkName: "about" */ '../views/Myalgorithms.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router