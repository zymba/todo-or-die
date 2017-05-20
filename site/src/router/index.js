// import Vue from 'vue'
// import Router from 'vue-router'
import Hello from '@/components/Hello'
import TarefasIndex from '@/components/Tarefas/Index'
import TarefasVer from '@/components/Tarefas/Ver'
import TarefasCriar from '@/components/Tarefas/Criar'
import TarefasEditar from '@/components/Tarefas/Editar'

// Vue.use(Router)

const routes = [
  { path: '/', name: 'Hello', component: Hello },
  { path: '/tarefas', name: 'tarefas-index', component: TarefasIndex },
  { path: '/tarefas/criar', name: 'tarefas-criar', component: TarefasCriar },
  { path: '/tarefas/:id', name: 'tarefas-ver', component: TarefasVer },
  { path: '/tarefas/:id/editar', name: 'tarefas-editar', component: TarefasEditar }
]

export default routes
