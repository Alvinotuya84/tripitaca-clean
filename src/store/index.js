import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      name:"",
      token:sessionStorage.getItem("TOKEN"),
      avatar:null
    }
  },
  mutations: {
  },
  actions: {
        login({commit}, user) {
      return API.post('/login', user)
        .then(({data}) => {
          commit('setUser', data.user);
          commit('setToken', data.token)
          return data;
        })
  },
  setUser: (state, user) => {
    state.user.data = user;
  },
  setToken: (state, token) => {
    state.user.token = token;
    sessionStorage.setItem('TOKEN', token);
  },},
  modules: {
  }
})
