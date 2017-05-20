<template>
  <div>
    <h3>{{ tarefa.nome }}</h3>
    <p>{{ tarefa.id }}</p>
  </div> 
</template>

<script>
export default {
  name: 'tarefas-ver',
  computed: {
    tarefa: function () {
      return this.$store.state.tarefa.tarefaView
    }
  },
  created () {
    this.$store.dispatch('tarefasVer', this.$route.params.id)
  }
}
</script>
