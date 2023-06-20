import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/marca',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaListaView.vue')
  },
  {
    path: '/marcaCadastrar',
    name: 'marca-cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaCadastrar.vue')
  },
  {
    path: '/modelo',
    name: 'modelo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloListaView.vue')
  },
  {
    path: '/modeloCadastrar',
    name: 'modelo-cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloCadastrar.vue')
  },
  {
    path: '/movimentacao',
    name: 'movimentacao-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoListaView.vue')
  },
  {
    path: '/veiculo',
    name: 'veiculo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/condutor',
    name: 'condutor-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorListaView.vue')
  },
  {
    path: '/configuracao',
    name: 'configuracao-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoListaView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
