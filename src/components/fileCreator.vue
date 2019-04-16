<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn slot="activator" depressed fab color="cyan">
      <v-icon color="white">add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Añadir nuevo perro</h2>
      </v-card-title>
      <v-card-text>
        <v-form onSubmit="return false;" ref="form">
          <v-text-field
            class="pt-4 ma-0"
            clearable
            color="orange"
            v-model="name"
            label="Nombre del perro"
            required
            :rules="inputRules"
          ></v-text-field>
          <v-layout row>
            <v-text-field
              class="pt-4 ma-0"
              clearable
              color="orange"
              v-model="age"
              label="Edad"
              required
              mask="##"
              placeholder="00"
              suffix="Años"
            ></v-text-field>
            <v-text-field
              class="pt-4 ma-0"
              clearable
              color="orange"
              v-model="months"
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
              v-model="breed"
              label="Raza"
              required
            ></v-text-field>
            <v-text-field
              class="pt-4 ml-1"
              clearable
              color="orange"
              type="text"
              v-model="id"
              label="Nº Chapa"
            ></v-text-field>
          </v-layout>
          <v-container class="my-5">
            <div class="caption grey--text">Estado en patio:</div>
            <v-layout row justify-space-around>
              <v-btn
                flat
                block
                @click="freedom = true"
                :input-value="freedom"
                :disabled="blocked"
                active-class="freedomTrue"
              >
                <!-- <span>Suelto</span> -->
                <v-icon>lock_open</v-icon>
                <div class="caption">Suelto</div>
              </v-btn>

              <v-btn
                flat
                block
                @click="freedom = false"
                :input-value="!freedom"
                :disabled="blocked"
                active-class="freedomFalse"
              >
                <!-- <span>Encerrado</span> -->
                <v-icon>lock</v-icon>
                <div class="caption">Encerrado</div>
              </v-btn>

              <v-btn
                flat
                block
                @click="blocked = !blocked"
                :input-value="blocked"
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
            v-model="story"
            label="Historia del perro"
            auto-grow
          ></v-textarea>
          <v-textarea
            class="pt-4 ml-1"
            clearable
            color="orange"
            type="text"
            v-model="behaviourDogs"
            label="Comportamiento con otros perros"
            auto-grow
          ></v-textarea>
          <v-textarea
            class="pt-4 ml-1"
            clearable
            color="orange"
            type="text"
            v-model="behaviourHumans"
            label="Comportamiento con humanos"
            auto-grow
          ></v-textarea>
          <v-textarea
            class="pt-4 ml-1"
            clearable
            color="orange"
            type="text"
            v-model="behaviourWalk"
            label="Comportamiento durante paseos"
            auto-grow
          ></v-textarea>
          <v-textarea
            class="pt-4 ml-1"
            clearable
            color="orange"
            type="text"
            v-model="behaviourDiagnosis"
            label="Problemas de comportamiento detectados"
            auto-grow
          ></v-textarea>
          <v-textarea
            class="pt-4 ml-1"
            clearable
            color="orange"
            type="text"
            v-model="observations"
            label="Observaciones"
            auto-grow
          ></v-textarea>
          <v-text-field
            class="pt-4 ml-1 mt-5"
            clearable
            color="orange"
            type="text"
            v-model="author"
            label="Autor de la Ficha"
            auto-grow
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-action>
        <v-btn outline color="cyan" @click="submit">Guardar</v-btn>
      </v-card-action>
    </v-card>
  </v-dialog>
</template>
<script>
import db from "@/fb.js";
import dateFormat from "@/Date.format.min.js";

export default {
  props: {
    reference: String
  },
  data() {
    return {
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
      author: "",

      inputRules: [
        input => input.length >= 3 || "Longitud mínima de 3 carácteres",
        input => input.length <= 10 || "Longitud máxima de 10 carácteres",
        input => {
          var regex = /^[a-zA-Z]+$/;
          return input.match(regex) || "No se aceptan  numeros";
        }
      ],
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const dog = {
          name: this.name,
          breed: this.breed,
          age: this.age,
          months: this.months,
          freedom: this.freedom,
          blocked: this.blocked,
          id: this.id,
          story: this.story,
          behaviourDogs: this.behaviourDogs,
          behaviourHumans: this.behaviourHumans,
          behaviourWalk: this.behaviourWalk,
          behaviourDiagnosis: this.behaviourDiagnosis,
          observations: this.observations,
          author: this.author,
          creationDate: new Date().format("d-m-Y h:i:s"),
          id_yard: db.doc("/yards/" + this.reference)
        };
        db.collection("dogs").add(dog);

        this.name = null;
        this.age = null;
        this.months = null;
        this.breed = null;
        this.id = "Desconocida";
        this.story = "Desconocida";
        this.freedom = true;
        this.blocked = false;
        this.behaviourDogs = null;
        this.behaviourHumans = null;
        this.behaviourWalk = null;
        this.behaviourDiagnosis = null;
        this.observations = null;
        this.author = null;
        this.dialog = false;
      }
    }
  },
  computed: {
    freedomTest: function() {
      return this.freedom;
    }
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

