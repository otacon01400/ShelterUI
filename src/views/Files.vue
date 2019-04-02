<template>
  <v-container class="my-5" fill-height>
    <v-slide-x-transition hide-on-leave>
      <v-layout column class="pt-5" v-show="!selectedZone">
        <!-- <v-flex>
          <v-card class="py-3 mx-2">
            <v-layout row justify-space-around align-center>
              <v-flex xs4>
                <div class="caption grey--text">Zona 1</div>
                <div>Periferias Centrales</div>
              </v-flex>
              <v-flex xs2>
                <v-btn fab flat large color="#00bcd4" @click="selectedZone = '1'">
                  <v-icon large>folder</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card hover class="py-3 mx-2">
            <v-layout row justify-space-around align-center>
              <v-flex xs4>
                <div class="caption grey--text">Zona 2</div>
                <div>Cementerios</div>
              </v-flex>
              <v-flex xs2>
                <v-btn fab flat large color="orange" @click="selectedZone = '2'">
                  <v-icon large>folder</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card class="py-3 mx-2">
            <v-layout row justify-space-around align-center>
              <v-flex xs4>
                <div class="caption grey--text">Zona 3</div>
                <div>Patios de Arriba</div>
              </v-flex>
              <v-flex xs2>
                <v-btn fab flat large color="#e53935" @click="selectedZone = '3'">
                  <v-icon large>folder</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>-->
        <!------------------------------------>
        <v-flex>
          <v-card hover class="py-1 mx-2">
            <v-card-title>
              <div>
                <div class="caption grey--text">Zona 1</div>Periferias Centrales
              </div>
              <v-spacer></v-spacer>
              <div>
                <v-chip small class="white--text caption cyan">Peligro Bajo</v-chip>
              </div>
            </v-card-title>
            <v-card-action>
              <v-btn flat color="#00bcd4" @click="selectedZone = '1'">
                <v-icon left>folder</v-icon>Explorar
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card hover class="py-1 mx-2">
            <v-card-title>
              <div>
                <div class="caption grey--text">Zona 2</div>Cementerios
              </div>
              <v-spacer></v-spacer>
              <div>
                <v-chip small class="white--text caption orange">Peligro Medio</v-chip>
              </div>
            </v-card-title>
            <v-card-action>
              <v-btn flat color="orange" @click="selectedZone = '1'">
                <v-icon left>folder</v-icon>Explorar
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card hover class="py-1 mx-2">
            <v-card-title>
              <div>
                <div class="caption grey--text">Zona 3</div>Patios de Arriba
              </div>
              <v-spacer></v-spacer>
              <div>
                <v-chip small class="white--text caption red darken-1">Peligro Alto</v-chip>
              </div>
            </v-card-title>
            <v-card-action>
              <v-btn flat color="red darken-1" @click="selectedZone = '1'">
                <v-icon left>folder</v-icon>Explorar
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
        <!------------------------------------->
      </v-layout>
    </v-slide-x-transition>
    <v-slide-x-transition hide-on-leave>
      <v-layout class="pt-5" v-show="selectedZone">
        <v-flex>
          <v-card class="py-3 mx-2">
            <v-layout row justify-space-around align-center>
              <v-flex xs4>
                <div>{{selectedZone}}</div>
              </v-flex>
              <v-flex xs2>
                <v-btn @click="selectedZone = ''">Reset</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-x-transition>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      expand: "false",
      selectedZone: ""
    };
  },
  computed: {}
};
</script>
<style>
</style>


