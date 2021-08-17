import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import("../views/Landing.vue"),
  },
  {
    path: '/Log-in',
    name: 'Log-in',
    component: () => import("../views/Log-in.vue"),
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: '/AllServices',
    name: 'AllServices',
    component: () => import("../views/AllServices.vue"),
  },
  {
    path: '/CollabProfile/:id',
    name: 'CollabProfile',
    component: () => import("../views/CollabProfile.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
