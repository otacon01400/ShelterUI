import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FileManager from './views/FileManager.vue';
import Zones from './views/Zones.vue';
import Yards from './views/Yards.vue';
import Dogs from './views/Dogs.vue';
import TeamManager from './views/TeamManager.vue';
import Rules from './views/Rules.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'Inicio',
			component: Home
		},
		{
			path: '/fileManager',
			name: 'Gestor de Fichas',
			component: FileManager
		},
		{
			path: '/zones',
			name: 'Zonas',
			component: Zones
		},
		{
			path: '/zones/:zoneName/:zone',
			name: 'Patios',
			component: Yards
		},
		{
			path: '/zones/:zoneName/:zone/:yardName/:yard',
			name: 'Perros',
			component: Dogs
		},
		{
			path: '/teamManager',
			name: 'Gestor del Equipo',
			component: TeamManager
		},
		{
			path: '/rules',
			name: 'Protocolos',
			component: Rules
		}
	]
});