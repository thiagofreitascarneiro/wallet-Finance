import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeDefault from '../views/HomeDefault.vue'


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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ],
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
