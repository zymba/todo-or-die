// import Vue from 'vue'
// import Router from 'vue-router'
import Hello from '@/components/Hello'
import TarefasIndex from '@/components/Tarefas/Index'

// Vue.use(Router)

const routes = [
  { path: '/', name: 'Hello', component: Hello },
  { path: '/tarefas', name: 'tarefas-index', component: TarefasIndex }
]

export default routes
