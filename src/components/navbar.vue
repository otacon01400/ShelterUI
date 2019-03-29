<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class disable-resize-watcher>
      <v-list class="mt-5">
        <v-list-tile v-for="(link, index) in links" :key="index" router :to="link.route">
          <v-list-tile-action>
            <v-icon right>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{link.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app flat>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase caption grey--text">{{this.$route.name}}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="grey">more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "Inicio", icon: "home", route: "/" },
        { title: "Gestor de Fichas", icon: "list", route: "/FileManager" },
        {
          title: "Gestor de Asistencia",
          icon: "how_to_reg",
          route: "/TeamManager"
        },
        { title: "Protocolos", icon: "chrome_reader_mode", route: "/Rules" }
      ]
    };
  }
};
</script>




