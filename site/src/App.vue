<template>
  <div id="app">
    <nav class="nav hero is-default has-shadow" id="top">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item" href="/">
            Todo Or Die
          </a>
          <a href="#/tarefas" class="nav-item"><strong>Tarefas</strong></a>
          <a class="nav-item"><strong>Projetos</strong></a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab">
            <i class="fa fa-user"></i>
            <span class="icon icon-chevron">
              <i class="fa fa-chevron-down"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
    
    <div class="section">
      <div class="container">
        <div class="column is-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  styles: [
    require('font-awesome/css/font-awesome.min.css'),
    require('bulma/css/bulma.css')
  ]
}
</script>

<style>

</style>
