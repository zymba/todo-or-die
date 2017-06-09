<template>
  <div id="app">

  </div>
</template>

<script>
export default {
  name: 'logout',
  mounted () {
    this.logout()
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({name: 'login'})
    }
  }
}
</script>
