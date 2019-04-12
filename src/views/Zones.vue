<template>
  <div class="zones">
    <v-content>
      <stepper currentView="1"/>
    </v-content>
    <v-container class="my-5" fill-height>
      <v-layout column class="pt-2">
        <v-flex v-for="zone in updatedZones" :key="zone.id">
          <v-card class="mx-2 my-2">
            <v-card-title>
              <v-layout row wrap>
                <v-layout column>
                  <div class="font-weight-bold mt-1">
                    <div class="caption grey--text">Zona:</div>
                    {{zone.name}}
                  </div>
                  <div class="font-weight-bold mt-1">
                    <div class="caption grey--text">Patios:</div>
                    {{zone.yardsInside}}
                  </div>
                </v-layout>
                <v-spacer></v-spacer>
                <!-- <v-layout column align-end>
                  <div v-for="level in zone.dangerLevels" :key="level.name">
                    <v-scroll-x-transition hide-on-leave>
                      <template v-if="!level.show">
                        <v-chip :class="`white--text caption ${level.color}`">
                          <div>Peligro: {{level.name}}</div>
                          <v-icon right @click="level.show = true">info</v-icon>
                        </v-chip>
                      </template>
                    </v-scroll-x-transition>
                    <v-scroll-x-transition hide-on-leave>
                      <template v-if="level.show">
                        <v-chip :class="`white--text caption ${level.color}`">
                          <div>{{level.voluntareerLevel}}</div>
                          <v-icon right @click="level.show = false">close</v-icon>
                        </v-chip>
                      </template>
                    </v-scroll-x-transition>
                  </div>
                </v-layout>-->
              </v-layout>
            </v-card-title>
            <v-card-action>
              <router-link
                tag="btn"
                :to="{ name: 'Patios', params: {zone:zone.id, zoneName:zone.name}}"
              >
                <v-btn flat color="grey darken-1">
                  <v-icon left>folder</v-icon>Explorar
                </v-btn>
              </router-link>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
// const bajo = {
//   name: "Bajo",
//   color: "cyan",
//   voluntareerLevel: "Novatos",
//   show: false
// };
// const medio = {
//   name: "Medio",
//   color: "orange",
//   voluntareerLevel: "Formados",
//   show: false
// };
// const alto = {
//   name: "Alto",
//   color: "red darken-1",
//   voluntareerLevel: "Veteranos",
//   show: false
// };
// const variado = {
//   name: "Variado",
//   color: "grey darken-1",
//   voluntareerLevel: "Todos",
//   show: false
// };
// const formacion = {
//   name: "Formación",
//   color: "purple",
//   voluntareerLevel: "Veteranos",
//   show: false
// };

import stepper from "../components/stepper";
import db from "@/fb.js";

export default {
  components: { stepper },
  data() {
    return {
      zonesRaw: []
    };
  },
  methods: {
    getNumer: function() {
      return this.$data.zonesRaw.map(element => {
        let reference = db.collection("zones").doc(element.id);
        db.collection("yards")
          .where("id_zone", "==", reference)
          .get()
          .then(snap => {
            if (element.yardsInside != snap.size) {
              element.yardsInside = snap.size;
              db.collection("zones")
                .doc(element.id)
                .update({
                  yardsInside: snap.size
                });
            }
          });
      });
    }
  },
  computed: {
    updatedZones: function() {
      return this.zonesRaw;
    }
  },
  created() {
    db.collection("zones").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.zonesRaw.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
      this.getNumer();
    });
    db.collection("yards").onSnapshot(res => {
      let changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added" || change.type === "removed") {
          this.getNumer();
        }
      });
    });
  }
};
</script>
<style>
</style>


