import Vue from 'vue'

export default {
  state: {
    auth: {
      check: window.sessionStorage['token'] != null,
      user: JSON.parse(window.sessionStorage['user'] || null)
    }
  },
  mutations: {
    login (state, token) {
      window.sessionStorage['token'] = token
      // window.sessionStorage['token_obj'] = JSON.stringify(response.body)
      state.auth.check = true
    },
    setUser (state, user) {
      window.sessionStorage['user'] = JSON.stringify(user)
      state.auth.user = user
    },
    logout (state) {
      state.auth.check = false
      state.auth.user = null
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('user')
    }
  },
  actions: {
    login (context, data) {
      return Vue.http.post('api/login', data).then(response => {
        context.commit('login', response.data.token)
        context.dispatch('getUser')
      })
    },
    getUser (context) {
      Vue.http.get('api/usuarios/ver').then(response => {
        context.commit('setUser', response.data.usuario)
      })
    },
    logout (context) {
      context.commit('logout')
    }
  }
}
