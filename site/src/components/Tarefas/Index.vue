<template>
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
        <td>{{ tarefa.nome }}</td>
				<td>{{ tarefa.projeto.nome }}</td>
				<td>editar | excluir</td>
			</tr>
		</tbody>
    
	</table>      
</template>

<script>
export default {
  name: 'tarefas-index',
  computed: {
    tarefas: function () {
      return this.$store.state.tarefa.tarefaList
    }
  },
  created () {
    this.$store.dispatch('listarTarefas')
  }
}
</script>
