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
                  <v-scroll-x-transition hide-on-leave>
                    <h3 class="ml-3 font-weight-regular text-no-wrap" v-show="!expand">{{card.text}}</h3>
                  </v-scroll-x-transition>

                  <v-scroll-x-transition hide-on-leave class="pt-2">
                    <div v-show="expand" style="white-space: nowrap">
                      <v-form>
                        <v-text-field
                          single-line
                          autofocus
                          clearable
                          prepend-icon="search"
                          :color="`${card.color}`"
                          class="pt-4 ma-0"
                          v-model="searchInput"
                          label="Dummy"
                          required
                        ></v-text-field>
                      </v-form>
                    </div>
                  </v-scroll-x-transition>
                  <!-- <v-slide-y-transition hide-on-leave>
                    <v-btn v-show="expand" depressed  outline >Click Me</v-btn>
                  </v-slide-y-transition>-->
                </v-flex>
                <v-flex xs4 sm2>
                  <v-btn
                    depressed
                    fab
                    outline
                    large
                    :color="`${card.color}`"
                    @click="expand = !expand"
                  >
                    <v-fade-transition>
                      <v-icon v-if="!expand">{{card.icon}}</v-icon>
                    </v-fade-transition>
                    <v-fade-transition>
                      <v-icon v-if="expand">clear</v-icon>
                    </v-fade-transition>
                  </v-btn>
                </v-flex>
                <v-flex xs9 sm9 align-center>
                  <v-slide-y-transition hide-on-leave>
                    <v-btn v-show="expand" block outline :color="`${card.color}`">Iniciar Busqueda</v-btn>
                  </v-slide-y-transition>
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
export default {
  data() {
    return {
      expand: false,
      cards: [
        {
          name: "List",
          text: "Visor de Fichas",
          icon: "list",
          color: "#00bcd4",
          class: "borderList",
          route: "/Files"
        },
        {
          name: "Search",
          text: "Busqueda: Perro o Patio",
          icon: "search",
          color: "#FF9800",
          class: "borderSearch",
          route: "/Files"
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
      ],
      searchInput: ""
    };
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
