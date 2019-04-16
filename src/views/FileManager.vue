<template>
  <div class="home">
    <v-container class="my-5" fill-height>
      <v-layout column class="pt-5">
        <v-flex v-for="card in cards" :key="card.name">
          <v-card :class="`${card.class}`">
            <v-layout row wrap justify-space-around align-center>
              <template v-if="card.name != 'Search'">
                <v-flex xs8 sm5 class="grey--text">
                  <h3 class="ml-3 font-weight-regular text-no-wrap">{{card.text}}</h3>
                </v-flex>
                <v-flex xs4 sm2>
                  <v-btn
                    fab
                    depressed
                    outline
                    large
                    :color="`${card.color}`"
                    route
                    :to="card.route"
                  >
                    <v-icon>{{card.icon}}</v-icon>
                  </v-btn>
                </v-flex>
              </template>
              <template v-else>
                <v-flex xs8 sm5 class="grey--text">
                  <h3 class="ml-3 font-weight-regular text-no-wrap">{{card.text}}</h3>
                </v-flex>
                <v-flex xs4 sm2>
                  <popup/>
                </v-flex>
              </template>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import popup from "../components/popup";
export default {
  components: { popup },
  data() {
    return {
      cards: [
        {
          name: "List",
          text: "Visor de Fichas",
          icon: "list",
          color: "#00bcd4",
          class: "borderList",
          route: "/zones"
        },
        {
          name: "Search",
          text: "Busqueda: Perro o Patio",
          icon: "search",
          color: "#FF9800",
          class: "borderSearch",
          route: "/zones"
        },
        {
          name: "Scan",
          text: "Escaneo de QR",
          icon: "camera_alt",
          color: "#e53935",
          class: "borderScan",
          route: ""
        },
        {
          name: "Add",
          text: "Crear Nueva Ficha",
          icon: "add",
          color: "#00e676",
          class: "borderAdd",
          route: ""
        }
      ]
    };
  },
  computed: {
    updatedInput() {
      return this.$store.getters.updatedInput;
    }
  }
};
</script>
<style>
.v-card.borderList {
  border-right: 4px solid #00bcd4;
}
.v-card.borderSearch {
  border-right: 4px solid orange;
}
.v-card.borderScan {
  border-right: 4px solid #e53935;
}
.v-card.borderAdd {
  border-right: 4px solid #00e676;
}
</style>
