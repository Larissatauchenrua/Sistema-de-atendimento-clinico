import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Agendamento from '../views/Agendamento.vue'
import Painel from '../views/Painel.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/agendamento',
    name: 'agendamento',
    component: Agendamento
  },
  {
    path: '/painel',
    name: 'painel',
    component: Painel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
