import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tabela',
      name: 'tabelas',
      component: () => import('../views/TabelaView.vue')
    },
    {
      path: '/tabela2',
      name: 'tabelas2',
      component: () => import('../views/TabelaViewBackup.vue')
    },
    {
      path: '/artilharia',
      name: 'artilharia',
      component: () => import('../views/ArtilhariaView.vue')
    },
    {
      path: '/chaveamento',
      name: 'chaveamento',
      component: () => import('../views/ChaveamentoView.vue')
    },
    {
      path: '/jogos',
      name: 'jogos',
      component: () => import('../views/JogosView.vue')
    },
    {
      path: '/jogadores',
      name: 'jogadores',
      component: () => import('../views/JogadoresCamp.vue')
    },
  ]
})

export default router
