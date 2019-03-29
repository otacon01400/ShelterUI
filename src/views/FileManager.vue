<template>
  <div class="home">
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-list>
            <v-list-tile class="pt-5">
              <v-list-tile-content class="grey--text">
                <span>Visor de Fichas</span>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  block
                  depressed
                  large
                  fab
                  color="cyan"
                  class="white--text"
                  router
                  :to="'/FileManager'"
                >
                  <v-icon>list</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile class="pt-5">
              <v-list-tile-content v-show="!expand" class="grey--text" style="white-space: nowrap">
                <span>Busqueda por Perro o Patio</span>
              </v-list-tile-content>

              <v-flex>
                <v-expand-x-transition>
                  <div v-show="expand" style="white-space: nowrap">
                    <v-text-field single-line prepend-icon="search"></v-text-field>
                  </div>
                </v-expand-x-transition>
              </v-flex>

              <v-list-tile-action>
                <v-btn
                  block
                  depressed
                  large
                  fab
                  color="orange"
                  class="white--text"
                  router
                  :to="'/FileManager'"
                  @click="expand = !expand"
                >
                  <v-icon>search</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile class="pt-5">
              <v-list-tile-content class="grey--text">
                <span>Escaneo de QR</span>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  block
                  depressed
                  large
                  fab
                  color="red darken-1"
                  class="white--text"
                  router
                  :to="'/FileManager'"
                >
                  <v-icon>camera_alt</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile class="pt-5">
              <v-list-tile-content class="grey--text">
                <span>Crear Ficha</span>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  block
                  depressed
                  large
                  fab
                  color="green accent-3"
                  class="white--text"
                  router
                  :to="'/FileManager'"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    expand: false
  })
};
</script>