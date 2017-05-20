import Vue from 'vue'

export default {
  state: {
    lista: []
  },
  mutations: {
    updateLista (state, data) {
      state.lista = data
    }
  },
  actions: {
    projetosListar (context) {
      Vue.http.get('api/projetos').then(response => {
        context.commit('updateLista', response.data)
      })
    }
  }
}
