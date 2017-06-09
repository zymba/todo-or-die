<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="column is-10">
          <p v-if="error.error">{{ error.message }}</p>
          <form method="post" @submit.prevent="login">
            <input type="text" name="email" placeholder="E-mail" v-model="usuario.email">
            <input type="password" name="password" placeholder="Senha" v-model="usuario.password">

            <input type="submit" value="Login" class="btn">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      usuario: {
        email: '',
        password: ''
      },
      error: {
        error: false,
        message: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.usuario)
        .then((response) => {
          this.$router.push({ name: 'tarefas-index' })
        })
        .catch((e) => {
          this.error.error = true
          if (e.status === 401) {
            this.error.message = e.data.error
          } else {
            this.error.message = 'Login inválido'
          }
        })
    }
  }
}
</script>

<style>

</style>
