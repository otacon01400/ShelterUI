<template>
  <div id="dogs">
    <v-content>
      <stepper currentView="3"/>
    </v-content>
    <v-container class="my-5" fill-height>
      <v-layout column class="pt-2">
        <v-flex v-for="dog in dogs" :key="dog.id">
          <v-card class="mx-2 my-2">
            <v-card-title>
              <v-layout row wrap>
                <v-layout column>
                  <div class="font-weight-bold mb-1">
                    <div class="caption grey--text">Nombre</div>
                    {{dog.name}}
                  </div>
                  <!-- <div class="font-weight-bold mt-1">
                    <div class="caption grey--text">Perros:</div>
                    {{yard.dogsInside.length}}
                  </div>-->
                </v-layout>
                <v-spacer></v-spacer>
                <!-- <v-layout column align-end>
                  <div v-for="level in yard.dangerLevel" :key="level.name">
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
              <v-btn flat color="grey darken-1">
                <v-icon left>folder</v-icon>Explorar
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
        <v-flex align-self-end>
          <fileCreator :reference="yard"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import stepper from "../components/stepper";
import fileCreator from "../components/fileCreator";
import db from "@/fb";

export default {
  components: { stepper, fileCreator },
  data() {
    return {
      yard: "",
      dogs: []
    };
  },
  created() {
    this.yard = this.$route.params.yard;

    var reference = db.collection("yards").doc(this.$route.params.yard);
    db.collection("dogs")
      .where("id_yard", "==", reference)
      .onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            this.dogs.push({
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