<template>
  <v-container class="mt-5">
    <v-layout align-center justify-space-around fill-height>
      <v-layout column>
        <template v-if="results.length > 0">
          <v-flex v-for="dog in results" :key="dog.id" class="my-2" xs12 sm12>
            <v-card>
              <v-card-title>
                <v-layout column>
                  <div class="font-weight-bold mb-1">
                    <div class="caption grey--text">Nombre</div>
                    {{dog.name}}
                  </div>
                </v-layout>
              </v-card-title>
              <v-card-action>
                <v-btn flat color="grey darken-1">
                  <v-icon left>chrome_reader_mode</v-icon>Ver Ficha
                </v-btn>
              </v-card-action>
            </v-card>
          </v-flex>
        </template>
        <template v-else>
          <v-flex xs12 sm12 align-self-center>
            <p class="title">Sin resultados.</p>
          </v-flex>
          <v-flex xs12 sm12 align-self-center>
            <p>Por favor, regresa y prueba con otro nombre.</p>
          </v-flex>
        </template>
        <v-flex xs6 sm6 align-self-center>
          <v-layout justify-space-around>
            <v-btn color="orange" flat @click="$router.go(-1)">
              <v-icon left>arrow_back</v-icon>
              <span>Atras</span>
            </v-btn>
            <!-- <v-spacer></v-spacer> -->
            <template v-if="results.length > 0">
              <v-btn color="orange" flat @click="$router.go(-1)">
                <span left>Ver Patio</span>
                <v-icon right>folder</v-icon>
              </v-btn>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>
<script>
import db from "@/fb.js";
export default {
  data() {
    return {
      results: []
    };
  },
  computed: {
    updatedInput() {
      return this.$store.getters.updatedInput;
    }
  },
  created() {
    let searchInput = this.updatedInput;
    searchInput = searchInput[0].toUpperCase() + searchInput.slice(1);
    db.collection("dogs")
      .where("name", "==", searchInput)
      .onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            this.results.push({
              ...change.doc.data(),
              id: change.doc.id
            });
          }
        });
      });
  }
};
</script>
<style>
</style>


