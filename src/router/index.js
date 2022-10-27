import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeDefault from '../views/HomeDefault.vue'
import ServicesView from '../views/ServicesView.vue'
import DevelopersView from '../views/DevelopersView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home/:page?',
      name: 'HomeDefault.page',
      component: HomeDefault
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/developers',
      name: 'developers',
      component: DevelopersView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
