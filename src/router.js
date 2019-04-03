import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FileManager from './views/FileManager.vue';
import Zones from './views/Zones.vue';
import Yards from './views/Yards.vue';
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
      path: '/Zones',
      name: 'Zonas',
      component: Zones
    },
    {
      path: '/Yards',
      name: 'Patios',
      component: Yards
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