<script>
export default {
  name: 'tarefas-criar',
  template: require('./form.html'),
  data: function () {
    return {
      tarefa: {
        concluida: 0
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('tarefasCriar', this.tarefa).then(() => {
        this.$router.push({ name: 'tarefas-index' })
      })
    }
  },
  computed: {
    projetos () {
      return this.$store.state.projeto.lista
    }
  },
  created () {
    this.$store.dispatch('projetosListar')
  }
}
</script>
