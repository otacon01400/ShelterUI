<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-if="button == 'create' || button == 'update'">
      <template v-if="button == 'create'">
        <v-btn slot="activator" depressed fab color="cyan">
          <v-icon color="white">add</v-icon>
        </v-btn>
      </template>
      <template v-if="button == 'update'">
        <v-btn slot="activator" flat color="grey darken-1">
          <v-icon left>chrome_reader_mode</v-icon>
          <span right>Ver Ficha</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>{{title}}</h2>
        </v-card-title>
        <v-card-text>
          <v-form onSubmit="return false;" ref="form">
            <v-text-field
              class="pt-4 ma-0"
              clearable
              color="orange"
              v-model="dogData.name"
              label="Nombre del perro"
              required
              :rules="inputRules"
            ></v-text-field>
            <v-layout row>
              <v-text-field
                class="pt-4 mr-1"
                clearable
                color="orange"
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
                color="orange"
                v-model="dogData.months"
                required
                mask="##"
                placeholder="00"
                suffix="Meses"
              ></v-text-field>
            </v-layout>
            <v-layout row>
              <v-text-field
                class="pt-4 mr-1"
                clearable
                color="orange"
                v-model="dogData.breed"
                label="Raza"
                required
              ></v-text-field>
              <v-text-field
                class="pt-4 ml-1"
                clearable
                color="orange"
                type="text"
                v-model="dogData.id"
                label="Nº Chapa"
              ></v-text-field>
            </v-layout>
            <v-container class="my-5">
              <div class="caption grey--text">Estado en patio:</div>
              <v-layout row justify-space-around>
                <v-btn
                  flat
                  block
                  @click="dogData.freedom = true"
                  :input-value="dogData.freedom"
                  :disabled="dogData.blocked"
                  active-class="freedomTrue"
                >
                  <!-- <span>Suelto</span> -->
                  <v-icon>lock_open</v-icon>
                  <div class="caption">Suelto</div>
                </v-btn>

                <v-btn
                  flat
                  block
                  @click="dogData.freedom = false"
                  :input-value="!dogData.freedom"
                  :disabled="dogData.blocked"
                  active-class="freedomFalse"
                >
                  <!-- <span>Encerrado</span> -->
                  <v-icon>lock</v-icon>
                  <div class="caption">Encerrado</div>
                </v-btn>

                <v-btn
                  flat
                  block
                  @click="dogData.blocked = !dogData.blocked"
                  :input-value="dogData.blocked"
                  active-class="blocked"
                >
                  <!-- <span>Prohibido</span> -->
                  <v-icon>block</v-icon>
                  <div class="caption">Prohibido</div>
                </v-btn>
              </v-layout>
            </v-container>
            <v-textarea
              class="pt-4 ml-1"
              clearable
              color="orange"
              type="text"
              v-model="dogData.story"
              label="Historia del perro"
              auto-grow
            ></v-textarea>
            <v-textarea
              class="pt-4 ml-1"
              clearable
              color="orange"
              type="text"
              v-model="dogData.behaviourDogs"
              label="Comportamiento con otros perros"
              auto-grow
            ></v-textarea>
            <v-textarea
              class="pt-4 ml-1"
              clearable
              color="orange"
              type="text"
              v-model="dogData.behaviourHumans"
              label="Comportamiento con humanos"
              auto-grow
            ></v-textarea>
            <v-textarea
              class="pt-4 ml-1"
              clearable
              color="orange"
              type="text"
              v-model="dogData.behaviourWalk"
              label="Comportamiento durante paseos"
              auto-grow
            ></v-textarea>
            <v-textarea
              class="pt-4 ml-1"
              clearable
              color="orange"
              type="text"
              v-model="dogData.behaviourDiagnosis"
              label="Problemas de comportamiento detectados"
              auto-grow
            ></v-textarea>
            <v-textarea
              class="pt-4 ml-1"
              clearable
              color="orange"
              type="text"
              v-model="dogData.observations"
              label="Observaciones"
              auto-grow
            ></v-textarea>
            <v-text-field
              class="pt-4 ml-1 mt-5"
              clearable
              color="orange"
              type="text"
              v-model="dogData.author"
              label="Autor de la Ficha"
              auto-grow
            ></v-text-field>
          </v-form>
        </v-card-text>
        <div v-if="button == 'create'">
          <v-card-action>
            <v-btn outline color="cyan" @click="submit">Guardar</v-btn>
          </v-card-action>
        </div>
        <div v-if="button == 'update'">
          <v-card-action>
            <v-btn outline color="cyan" @click="update">Actualizar</v-btn>
          </v-card-action>
        </div>
      </v-card>
    </template>
    <template v-if="button == 'view'">
      <v-btn slot="activator" flat color="grey darken-1">
        <v-icon left>chrome_reader_mode</v-icon>
        <span right>Ver Ficha</span>
      </v-btn>
      <v-card>
        <v-card-action style="overflow: hidden">
          <v-btn icon style="float: right" @click="changeEditState">
            <v-icon>edit</v-icon>
          </v-btn>
        </v-card-action>
        <v-card-title class="font-weight-bold title">{{dogData.name}}</v-card-title>
        <v-card-text>
          <div class="font-weight-bold mb-5 subheading">
            <div class="caption grey--text mb-2">Comportamiento con otros Perros</div>
            {{dogData.behaviourDogs}}
          </div>
          <div class="font-weight-bold my-5 subheading">
            <div class="caption grey--text mb-2">Comportamiento con Humanos</div>
            {{dogData.behaviourHumans}}
          </div>
          <div class="font-weight-bold my-5 subheading">
            <div class="caption grey--text mb-2">Comportamiento durante Paseos</div>
            {{dogData.behaviourWalk}}
          </div>
          <div class="font-weight-bold my-5 subheading">
            <div class="caption grey--text mb-2">Problemas de comportamiento detectados</div>
            {{dogData.behaviourDiagnosis}}
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
import db from "@/fb.js";
import dateFormat from "@/Date.format.min.js";

export default {
  props: {
    reference: String,
    title: String,
    editable: Boolean,
    button: String,
    dogID: String
  },
  data() {
    return {
      dog: {
        name: "",
        photo: "",
        breed: "",
        age: "",
        months: "",
        freedom: true,
        blocked: false,
        volunteerLevel: "",
        id: "Desconocida",
        story: "Desconocida",
        behaviourDogs: "",
        behaviourHumans: "",
        behaviourWalk: "",
        behaviourDiagnosis: "",
        observations: "",
        creationDate: "",
        updateDate: "",
        author: ""
      },

      inputRules: [
        input => input.length >= 3 || "Longitud mínima de 3 carácteres",
        input => input.length <= 10 || "Longitud máxima de 10 carácteres",
        input => {
          var regex = /^[a-zA-Z]+$/;
          return input.match(regex) || "No se aceptan  numeros";
        }
      ],
      dialog: false,

      fetchedData: []
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        let dog = this.dog;
        dog.creationDate = new Date().format("d-m-Y h:i:s");
        dog.id_yard = db.doc("/yards/" + this.reference);

        db.collection("dogs").add(dog);

        this.dog.name = null;
        this.dog.age = null;
        this.dog.months = null;
        this.dog.breed = null;
        this.dog.id = "Desconocida";
        this.dog.story = "Desconocida";
        this.dog.freedom = true;
        this.dog.blocked = false;
        this.dog.behaviourDogs = null;
        this.dog.behaviourHumans = null;
        this.dog.behaviourWalk = null;
        this.dog.behaviourDiagnosis = null;
        this.dog.observations = null;
        this.dog.author = null;
      }

      this.dialog = false;
    },
    changeEditState() {
      this.button = "update";
    },
    update() {
      this.button = "view";
      this.dialog = false;
    }
  },
  computed: {
    dogData: function() {
      return this.dog;
    }
  },
  created() {
    db.collection("dogs")
      .where("name", "==", this.title)
      .onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            this.dog = {
              ...change.doc.data(),
              id: change.doc.id
            };
          }
        });
      });
  }
};
</script>

<style>
.v-btn.freedomTrue {
  color: #3ec1d3;
}
.v-btn.freedomFalse {
  color: #ff9a00;
}
.v-btn.blocked {
  color: #ff165d;
}
</style>

