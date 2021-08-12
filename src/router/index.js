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
    path: '/Login',
    name: 'Login',
    component: () => import("../views/Login.vue"),
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
