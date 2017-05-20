import Vue from 'vue'

export default {
  state: {
    tarefaList: [],
    tarefaView: {}
  },
  mutations: {
    updateTarefaList (state, data) {
      state.tarefaList = data
    },
    updateTarefaView (state, data) {
      state.tarefaView = data
    }
  },
  actions: {
    tarefasListar (context) {
      Vue.http.get('api/tarefas').then(response => {
        context.commit('updateTarefaList', response.data)
      })
    },
    tarefasVer (context, id) {
      Vue.http.get('api/tarefas/' + id).then(response => {
        context.commit('updateTarefaView', response.data)
      })
    },
    tarefasCriar (context, data) {
      Vue.http.post('api/tarefas', data)
    },
    tarefasEditar (context, params) {
      Vue.http.put('api/tarefas/' + params.id, params.data)
    },
    tarefasExcluir (context, id) {
      Vue.http.delete('api/tarefas/' + id)
    }
  }
}
