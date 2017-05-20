<script>
export default {
  name: 'tarefas-editar',
  template: require('./form.html'),
  data: function () {
    return {
      tarefa: this.$store.state.tarefa.tarefaView
    }
  },
  methods: {
    save () {
      this.$store.dispatch('tarefasEditar', {id: this.tarefa.id, data: this.tarefa}).then(() => {
        this.$router.push({ name: 'tarefas-index' })
      })
    }
  },
  computed: {
    // tarefa: function () {
    //   return this.$store.state.tarefa.tarefaView
    // },
    projetos () {
      return this.$store.state.projeto.lista
    }
  },
  created () {
    this.$store.dispatch('tarefasVer', this.$route.params.id)
    this.$store.dispatch('projetosListar')
  }
}
</script>
