import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
