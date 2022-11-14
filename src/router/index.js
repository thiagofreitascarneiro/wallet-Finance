import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeDefault from '../views/HomeDefault.vue'
import RegisterUser from '../views/RegisterUser.vue'
// import UserHome from '../views/user/UserHome.vue'
import UserDashboard from '../views/user/UserDashboard.vue'
import UserTransitions from '../views/user/UserTransitions.vue'
import UserSettings from '../views/user/UserSettings.vue'
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
          path: 'userdashboard',
          component: UserDashboard
        },
        {
          path: 'usertransition',
          name: 'usertransition',
          component: UserTransitions
        },
        {
          path: '/userabout',
          component: () => import('../views/user/UserAbout.vue')
        },
        {
          path: 'usersettings',
          name: 'usersettings',
          component: UserSettings
        },
      ]
    }
  ],
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
