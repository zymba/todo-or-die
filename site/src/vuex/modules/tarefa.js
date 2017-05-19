import Vue from 'vue'

export default {
  state: {
    tarefaList: [],
    tarefaView: {}
  },
  mutations: {
    updateTarefaList (state, data) {
      state.tarefaList = data
    }
  },
  actions: {
    listarTarefas (context) {
      Vue.http.get('api/tarefas').then(response => {
        context.commit('updateTarefaList', response.data)
      })
    }
  }
}
