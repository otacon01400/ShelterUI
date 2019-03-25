<template>
    <span>
        <v-navigation-drawer absolute app v-model="drawer" class="grey darken-3" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar absolute app color="grey darken-4" dark>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>INICIO</v-toolbar-title>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat></v-btn>
            <v-spacer></v-spacer>
            <v-btn icon flat>
                 <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                { title: 'Gestor de Fichas' },
                { title: 'Gestor de Asistencia' },
                { title: 'Protocolos'}
            ]
        };
    }
};
</script>

<style scoped>
</style>
