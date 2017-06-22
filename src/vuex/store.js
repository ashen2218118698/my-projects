import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin:false,
  user: Object
}

const mutations = {
  islogin(state) {
    state.isLogin = true
  },
  loginout(state) {
    state.isLogin = false;
    state.user = null
  },
  loginedUser(state, obj) {
    state.user = obj;
  }
}

export default new Vuex.Store({
  state,mutations
})
