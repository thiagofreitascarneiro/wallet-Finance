import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      zipcode: "",
      street: "",
      number: "",
      district: "",
      city: "",
      state: "",
    }
  },
  getters: {
  },
  mutations: {
    VERIFY_LOGIN(state, payload) {
      state.login = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
