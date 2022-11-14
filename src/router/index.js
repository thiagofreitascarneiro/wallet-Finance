import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeDefault from '../views/HomeDefault.vue'
import RegisterUser from '../views/RegisterUser.vue'
import UserDefault from '../views/user/UserDefault.vue'


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
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/user',
      component: UserDefault,
      children: [
        {
          path: '',
          component: () => import('../views/user/UserHome.vue')
        },
        {
          path: '/dashboard',
          component: () => import('../views/user/UserDashboard.vue')
        },
        {
          path: '/transactions',
          component: () => import('../views/user/UserTransitions.vue')
        },
        {
          path: '/user-about',
          component: () => import('../views/user/UserAbout.vue')
        },
        {
          path: '/settings',
          component: () => import('../views/user/UserSettings.vue')
        },
      ]
    }
  ],
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
