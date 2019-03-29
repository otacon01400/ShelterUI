import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FileManager from './views/FileManager.vue'
import TeamManager from './views/TeamManager.vue';
import Rules from './views/Rules.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Inicio',
      component: Home
    },
    {
      path: '/FileManager',
      name: 'Gestor de Fichas',
      component: FileManager
    },
    {
      path: '/TeamManager',
      name: 'Gestor del Equipo',
      component: TeamManager
    },
    {
      path: '/Rules',
      name: 'Protocolos',
      component: Rules
    },
  ]
})