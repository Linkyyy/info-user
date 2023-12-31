import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    //before ing after    
    status: 'before'
  },
  getters: {
    getIsLogin: state => state.isLogin
  },
  mutations: {
    setIsLogin: (state, isLogin) => state.isLogin = isLogin
  },
  actions: {
  },
  modules: {
  }
})
