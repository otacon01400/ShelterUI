<template>
  <div id="yards">
    <v-content>
      <stepper/>
    </v-content>
    <v-container class="my-5" fill-height>
      <v-layout column class="pt-2">
        <v-flex v-for="yard in yards" :key="yard.id">
          <v-card class="mx-2 my-2">
            <v-card-title>
              <v-layout row wrap>
                <v-layout column>
                  <div class="font-weight-bold mb-1">
                    <div class="caption grey--text">Nombre</div>
                    {{yard.name}}
                  </div>
                  <div class="font-weight-bold mt-1">
                    <div class="caption grey--text">Perros:</div>
                    {{yard.dogsInside.length}}
                  </div>
                </v-layout>
                <v-spacer></v-spacer>
                <v-layout column align-end>
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
                </v-layout>
              </v-layout>
            </v-card-title>
            <v-card-action>
              <v-btn flat color="grey darken-1">
                <v-icon left>folder</v-icon>Explorar
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import stepper from "../components/stepper";
import db from "@/fb";

export default {
  components: { stepper },
  data() {
    return {
      zone: "",
      yards: ""
    };
  },
  created() {
    this.zone = this.$route.params.zone;
    this.yards = this.$route.params.data;
  }
};
</script>
<style>
</style>


