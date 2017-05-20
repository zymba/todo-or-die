<template>
  <div>
    <router-link :to="{ name: 'tarefas-criar' }" class="button is-primary is-outlined">Criar tarefa</router-link>

    <table class="table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Projeto</th>
          <th>Ação</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="tarefa in tarefas.data">
          <td><router-link :to="{ name: 'tarefas-ver', params: { id: tarefa.id } }">{{ tarefa.nome }}</router-link></td>
          <td>{{ tarefa.projeto.nome }}</td>
          <td>
            <router-link :to="{ name: 'tarefas-editar', params: { id: tarefa.id }}">editar</router-link> | 
            
            <a href="" @click.prevent="excluir(tarefa.id)">excluir</a>
          </td>
        </tr>
      </tbody> 
    </table>      
  </div>  
</template>

<script>
export default {
  name: 'tarefas-index',
  methods: {
    excluir: function (id) {
      this.$store.dispatch('tarefasExcluir', id).then(() => {
        this.$router.push({ name: 'tarefas-index' })
      })
    }
  },
  computed: {
    tarefas: function () {
      return this.$store.state.tarefa.tarefaList
    }
  },
  created () {
    this.$store.dispatch('tarefasListar')
  }
}
</script>
