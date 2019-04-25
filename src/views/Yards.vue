<template>
  <v-content>
    <stepper currentView="2"/>
    <v-container class="my-5">
      <v-layout align-center justify-space-around fill-height>
        <v-layout column>
          <v-flex v-for="yard in updatedYards" :key="yard.id" class="my-2" xs12 sm12>
            <v-card>
              <v-card-title>
                <v-layout column>
                  <div class="font-weight-bold mb-1">
                    <div class="caption grey--text">Nombre</div>
                    {{yard.name}}
                  </div>
                  <div class="font-weight-bold mt-1">
                    <div class="caption grey--text">Perros:</div>
                    {{yard.dogsInside}}
                  </div>
                </v-layout>
              </v-card-title>
              <v-card-action>
                <router-link
                  tag="btn"
                  :to="{ name: 'Perros', params: {yard:yard.id, yardName:yard.name}}"
                >
                  <v-btn flat color="grey darken-1">
                    <v-icon left>folder</v-icon>Explorar
                  </v-btn>
                </router-link>
              </v-card-action>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import stepper from "../components/stepper";
import db from "@/fb";

export default {
  components: { stepper },
  data() {
    return {
      zone: "",
      yardsRaw: []
    };
  },
  methods: {
    getNumer: function() {
      return this.$data.yardsRaw.map(element => {
        let reference = db.collection("yards").doc(element.id);
        db.collection("dogs")
          .where("id_yard", "==", reference)
          .get()
          .then(snap => {
            if (element.dogsInside != snap.size) {
              element.dogsInside = snap.size;
              db.collection("yards")
                .doc(element.id)
                .update({
                  dogsInside: snap.size
                });
            }
          });
      });
    },
    sortBy(prop) {
      this.yardsRaw.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  computed: {
    updatedYards: function() {
      return this.yardsRaw;
    }
  },

  created() {
    this.zone = this.$route.params.zone;

    var reference = db.collection("zones").doc(this.$route.params.zone);
    db.collection("yards")
      .where("id_zone", "==", reference)
      .onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === "added") {
            this.yardsRaw.push({
              ...change.doc.data(),
              id: change.doc.id
            });
          }
        });
        this.getNumer();
        this.sortBy("name");
      });
    db.collection("dogs").onSnapshot(res => {
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


