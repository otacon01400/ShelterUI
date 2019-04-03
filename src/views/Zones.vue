<template>
  <v-container class="my-5" fill-height>
    <v-layout column class="pt-2">
      <v-flex v-for="zone in zones" :key="zone.number">
        <v-card class="mx-2 my-2">
          <v-card-title>
            <v-layout row wrap>
              <v-layout column>
                <div class="font-weight-bold">
                  <div class="caption grey--text">Zona {{zone.id}}</div>
                  {{zone.name}}
                </div>
                <div class="font-weight-bold mt-1">
                  <div class="caption grey--text">Patios</div>
                  {{zone.yardsInside.length}}
                </div>
              </v-layout>

              <v-spacer></v-spacer>

              <v-layout column align-end>
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
              </v-layout>
            </v-layout>
          </v-card-title>
          <v-card-action>
            <v-btn
              flat
              color="grey darken-1"
              @click="selectedZone = zone.number"
              route
              :to="'/Yards'"
            >
              <v-icon left>folder</v-icon>Explorar
            </v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
    </v-layout>
    <!------------------------------------->
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
const bajo = {
  name: "Bajo",
  color: "cyan",
  voluntareerLevel: "Novatos",
  show: false
};
const medio = {
  name: "Medio",
  color: "orange",
  voluntareerLevel: "Formados",
  show: false
};
const alto = {
  name: "Alto",
  color: "red darken-1",
  voluntareerLevel: "Veteranos",
  show: false
};
const variado = {
  name: "Variado",
  color: "grey darken-1",
  voluntareerLevel: "Todos",
  show: false
};
const formacion = {
  name: "Formación",
  color: "purple",
  voluntareerLevel: "Veteranos",
  show: false
};

export default {
  data() {
    return {
      expand: "false",
      selectedZone: "",

      zones: [
        {
          name: "Periferias Centrales",
          id: "1",
          dangerLevels: [
            {
              name: bajo.name,
              color: bajo.color,
              voluntareerLevel: bajo.voluntareerLevel,
              show: bajo.show
            },
            {
              name: medio.name,
              color: medio.color,
              voluntareerLevel: medio.voluntareerLevel,
              show: medio.show
            }
          ],

          yardsInside: [
            {
              name: "Morera",
              id: "1",
              dangerLevel: [
                {
                  name: variado.name,
                  color: variado.color,
                  voluntareerLevel: variado.voluntareerLevel,
                  show: variado.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Llaurer",
              id: "2",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Gallinero",
              id: "3",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Comodín",
              id: "4",
              dangerLevel: [
                {
                  name: bajo.name,
                  color: bajo.color,
                  voluntareerLevel: bajo.voluntareerLevel,
                  show: bajo.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Enfermería de Arriba",
              id: "5",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Enfermería de Abajo",
              id: "6",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Cachorros",
              id: "7",
              dangerLevel: [
                {
                  name: formacion.name,
                  color: formacion.color,
                  voluntareerLevel: formacion.voluntareerLevel,
                  show: formacion.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "G1",
              id: "8",
              dangerLevel: [
                {
                  name: bajo.name,
                  color: bajo.color,
                  voluntareerLevel: bajo.voluntareerLevel,
                  show: bajo.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "G2",
              id: "9",
              dangerLevel: [
                {
                  name: bajo.name,
                  color: bajo.color,
                  voluntareerLevel: bajo.voluntareerLevel,
                  show: bajo.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Delante Recepción",
              id: "10",
              dangerLevel: [
                {
                  name: bajo.name,
                  color: bajo.color,
                  voluntareerLevel: bajo.voluntareerLevel,
                  show: bajo.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Bosquet",
              id: "11",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            }
          ]
        },
        {
          name: "Cementerios",
          id: "2",
          dangerLevels: [
            {
              name: medio.name,
              color: medio.color,
              voluntareerLevel: medio.voluntareerLevel,
              show: medio.show
            }
          ],

          yardsInside: [
            {
              name: "C1",
              id: "1",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "C2",
              id: "2",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "C3",
              id: "3",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "C4",
              id: "4",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "C5",
              id: "5",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Comportament 1",
              id: "6",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Comportament 2",
              id: "7",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Bosquet Cementiri",
              id: "8",
              dangerLevel: [
                {
                  name: medio.name,
                  color: medio.color,
                  voluntareerLevel: medio.voluntareerLevel,
                  show: medio.show
                }
              ],
              dogsInside: [{}]
            }
          ]
        },
        {
          name: "Patios de Arriba",
          id: "3",
          dangerLevels: [
            {
              name: alto.name,
              color: alto.color,
              voluntareerLevel: alto.voluntareerLevel,
              show: alto.show
            }
          ],

          yardsInside: [
            {
              name: "Patio 1",
              id: "1",
              dangerLevel: [
                {
                  name: alto.name,
                  color: alto.color,
                  voluntareerLevel: alto.voluntareerLevel,
                  show: alto.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 2",
              id: "2",
              dangerLevel: [
                {
                  name: alto.name,
                  color: alto.color,
                  voluntareerLevel: alto.voluntareerLevel,
                  show: alto.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 3",
              id: "3",
              dangerLevel: [
                {
                  name: alto.name,
                  color: alto.color,
                  voluntareerLevel: alto.voluntareerLevel,
                  show: alto.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 4",
              id: "4",
              dangerLevel: [
                {
                  name: alto.name,
                  color: alto.color,
                  voluntareerLevel: alto.voluntareerLevel,
                  show: alto.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 5",
              id: "5",
              dangerLevel: [
                {
                  name: alto.name,
                  color: alto.color,
                  voluntareerLevel: alto.voluntareerLevel,
                  show: alto.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 6",
              id: "6",
              dangerLevel: [
                {
                  name: alto.name,
                  color: alto.color,
                  voluntareerLevel: alto.voluntareerLevel,
                  show: alto.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 7",
              id: "7",
              dangerLevel: [
                {
                  name: alto.name,
                  color: alto.color,
                  voluntareerLevel: alto.voluntareerLevel,
                  show: alto.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 8",
              id: "8",
              dangerLevel: [
                {
                  name: alto.name,
                  color: alto.color,
                  voluntareerLevel: alto.voluntareerLevel,
                  show: alto.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 9",
              id: "9",
              dangerLevel: [
                {
                  name: bajo.name,
                  color: bajo.color,
                  voluntareerLevel: bajo.voluntareerLevel,
                  show: bajo.show
                }
              ],
              dogsInside: [{}]
            },
            {
              name: "Patio 10",
              id: "10",
              dangerLevel: [
                {
                  name: bajo.name,
                  color: bajo.color,
                  voluntareerLevel: bajo.voluntareerLevel,
                  show: bajo.show
                }
              ],
              dogsInside: [{}]
            }
          ]
        }
      ]
    };
  },
  computed: {},
  created() {}
};
</script>
<style>
</style>


