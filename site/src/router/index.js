// import Vue from 'vue'
// import Router from 'vue-router'
import Hello from '@/components/Hello'
import TarefasIndex from '@/components/Tarefas/Index'
import TarefasVer from '@/components/Tarefas/Ver'
import TarefasCriar from '@/components/Tarefas/Criar'
import TarefasEditar from '@/components/Tarefas/Editar'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

// Vue.use(Router)

const routes = [
  { path: '/', name: 'Hello', component: Hello, meta: { auth: false } },
  { path: '/tarefas', name: 'tarefas-index', component: TarefasIndex, meta: { auth: true } },
  { path: '/tarefas/criar', name: 'tarefas-criar', component: TarefasCriar, meta: { auth: true } },
  { path: '/tarefas/:id', name: 'tarefas-ver', component: TarefasVer, meta: { auth: true } },
  { path: '/tarefas/:id/editar', name: 'tarefas-editar', component: TarefasEditar, meta: { auth: true } },

  { path: '/login', name: 'login', component: Login, meta: { auth: false } },
  { path: '/logout', name: 'logout', component: Logout, meta: { auth: true } }
]

export default routes
