import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'


var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')
