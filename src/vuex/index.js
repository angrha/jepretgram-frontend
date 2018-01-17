import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const http = axios.create({
  baseUrl: 'http://localhost:3000'
})

const store = new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    setLogin (state, payload) {
      state.login = payload
    }
  },
  actions: {
    signin ({ commit }, payload) {
      http.post(this.baseUrl + '/api/users/signin', payload)
        .then(response => {
          localStorage.setItem('authLogin', response.data.token)
          commit('setLogin', true)
          // router.push({name: 'dashboard'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkLogin ({ commit }) {
      if (localStorage.getItem('authLogin')) {
        commit('setLogin', true)
      } else {
        commit('setLogin', false)
      }
    },
    signup ({commit}, payload) {
      http.post(this.baseUrl + '/api/users/signup', payload)
        .then(response => {
          console.log(response)
          router.push({name: 'home'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    signout ({ commit }) {
      localStorage.clear()
      commit('setLogin', false)
      router.push({ name: 'home' })
    }
  }
})

export default store
