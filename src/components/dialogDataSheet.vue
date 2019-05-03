<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>{{dogData.name}}</v-toolbar-title>
      <div v-if="dogData.freedom && !dogData.blocked">
        <v-icon right color="#3ec1d3">lock_open</v-icon>
      </div>
      <div v-if="!dogData.freedom && !dogData.blocked">
        <v-icon right color="#ff9a00">lock</v-icon>
      </div>
      <div v-if="dogData.blocked">
        <v-icon right color="#ff165d">block</v-icon>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="changeState">
        <v-icon>edit</v-icon>
      </v-toolbar-side-icon>
      <eraser @eraseData="remove"/>
    </v-toolbar>
    <!-- <v-list three-line expand> -->
    <!-- <v-list-tile>
        <v-list-tile-action>
          <v-form>
            <v-layout row>
              <v-text-field
                class="pt-4 mr-1"
                clearable
                color="black"
                v-model="dogData.age"
                label="Edad"
                required
                mask="##"
                placeholder="00"
                suffix="Años"
              ></v-text-field>
              <v-text-field
                class="pt-4 ml-1"
                clearable
                color="black"
                v-model="dogData.months"
                required
                mask="##"
                placeholder="00"
                suffix="Meses"
              ></v-text-field>
            </v-layout>
          </v-form>
        </v-list-tile-action>
    </v-list-tile>-->
    <!-- <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Edad</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.age}} Años y {{dogData.months}} Meses</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-content>
          <v-list-tile-title>Nº de Chapa</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.idNumber}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Raza</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.breed}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Historia</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.story}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Comportamiento con Perros</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.behaviourDogs}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Comportamiento con Humanos</v-list-tile-title>
          <v-list-tile-sub-title>
            <div>{{dogData.behaviourHumans}}</div>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Comportamiento en Paseos</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.behaviourWalk}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Problemas detectados</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.behaviourDiagnosis}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Observaciones</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.observations}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Autor</v-list-tile-title>
          <v-list-tile-sub-title>{{dogData.author}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>-->

    <v-card-text>
      <v-layout row wrap justify-space-between>
        <v-flex xs12 sm12>
          <div class="font-weight-regular mb-4 caption grey--text">
            <div class="subheading black--text mb-2">Edad</div>
            {{dogData.age}} Años y {{dogData.months}} Meses
          </div>
        </v-flex>

        <v-flex xs6 sm6>
          <div class="font-weight-regular mb-4 caption grey--text">
            <div class="subheading black--text mb-2">Raza</div>
            {{dogData.breed}}
          </div>
        </v-flex>
        <v-flex xs6 sm6>
          <div class="font-weight-regular mb-4 caption grey--text">
            <div class="subheading black--text mb-2">Nº de Chapa</div>
            {{dogData.idNumber}}
          </div>
        </v-flex>
        <v-flex xs12 sm12>
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs12 sm12>
          <div class="font-weight-regular my-4 caption grey--text">
            <div class="subheading black--text mb-2">Historia</div>
            {{dogData.story}}
          </div>
        </v-flex>
        <v-flex xs12 sm12>
          <div class="font-weight-regular my-4 caption grey--text">
            <div class="subheading black--text mb-2">Comportamiento con otros Perros</div>
            {{dogData.behaviourDogs}}
          </div>
        </v-flex>
        <v-flex xs12 sm12>
          <div class="font-weight-regular my-4 caption grey--text">
            <div class="subheading black--text mb-2">Comportamiento con Humanos</div>
            {{dogData.behaviourHumans}}
          </div>
        </v-flex>
        <v-flex xs12 sm12>
          <div class="font-weight-regular my-4 caption grey--text">
            <div class="subheading black--text mb-2">Comportamiento durante Paseos</div>
            {{dogData.behaviourWalk}}
          </div>
        </v-flex>
        <v-flex xs12 sm12>
          <div class="font-weight-regular my-4 caption grey--text">
            <div class="subheading black--text mb-2">Problemas de comportamiento detectados</div>
            {{dogData.behaviourDiagnosis}}
          </div>
        </v-flex>
        <v-flex xs12 sm12>
          <div class="font-weight-regular my-4 caption grey--text">
            <div class="subheading black--text mb-2">Observaciones</div>
            {{dogData.observations}}
          </div>
          <v-divider></v-divider>
        </v-flex>

        <v-flex xs6 sm6>
          <div class="font-weight-regular my-4 caption grey--text">
            <div class="subheading black--text mb-2">Fecha</div>
            {{dogData.creationDate}}
          </div>
        </v-flex>
        <v-flex xs6 sm6>
          <div class="font-weight-regular my-4 caption grey--text">
            <div class="subheading black--text mb-2">Autor</div>
            {{dogData.author}}
          </div>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import eraser from "@/components/dataSheetEraser";
import db from "@/fb.js";

export default {
  components: { eraser },
  props: {
    dogData: Object
  },
  methods: {
    changeState() {
      this.$emit("changeToEdit");
    },
    remove() {
      console.log("eventDetected");
      console.log(this.dogData.id);
      db.collection("dogs")
        .doc(this.dogData.id)
        .delete();
    }
  }
};
</script>

