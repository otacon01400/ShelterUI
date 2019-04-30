<template>
  <v-card>
    <v-card-title>
      <h2>Añadir nueva ficha</h2>
    </v-card-title>
    <v-card-text>
      <v-form onSubmit="return false;" ref="form">
        <v-text-field
          class="pt-4 ma-0"
          clearable
          color="orange"
          v-model="dog.name"
          label="Nombre del perro"
          required
          :rules="nameRules"
        ></v-text-field>
        <v-layout row>
          <v-text-field
            class="pt-4 mr-1"
            clearable
            color="orange"
            v-model="dog.age"
            label="Edad"
            required
            mask="##"
            placeholder="00"
            suffix="Años"
            :rules="ageRules"
          ></v-text-field>
          <v-text-field
            class="pt-4 ml-1"
            clearable
            color="orange"
            v-model="dog.months"
            required
            mask="##"
            placeholder="00"
            suffix="Meses"
            :rules="ageRules"
          ></v-text-field>
        </v-layout>
        <v-layout row>
          <v-text-field
            class="pt-4 mr-1"
            clearable
            color="orange"
            v-model="dog.breed"
            label="Raza"
            required
          ></v-text-field>
          <v-text-field
            class="pt-4 ml-1"
            clearable
            color="orange"
            type="text"
            v-model="dog.idNumber"
            label="Nº Chapa"
          ></v-text-field>
        </v-layout>
        <v-container class="my-5">
          <div class="caption grey--text">Estado en patio:</div>
          <v-layout row justify-space-around>
            <v-btn
              flat
              block
              @click="dog.freedom = true"
              :input-value="dog.freedom"
              :disabled="dog.blocked"
              active-class="freedomTrue"
            >
              <!-- <span>Suelto</span> -->
              <v-icon>lock_open</v-icon>
              <div class="caption">Suelto</div>
            </v-btn>

            <v-btn
              flat
              block
              @click="dog.freedom = false"
              :input-value="!dog.freedom"
              :disabled="dog.blocked"
              active-class="freedomFalse"
            >
              <!-- <span>Encerrado</span> -->
              <v-icon>lock</v-icon>
              <div class="caption">Encerrado</div>
            </v-btn>

            <v-btn
              flat
              block
              @click="dog.blocked = !dog.blocked"
              :input-value="dog.blocked"
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
          v-model="dog.story"
          label="Historia del perro"
          auto-grow
        ></v-textarea>
        <v-textarea
          class="pt-4 ml-1"
          clearable
          color="orange"
          type="text"
          v-model="dog.behaviourDogs"
          label="Comportamiento con otros perros"
          auto-grow
        ></v-textarea>
        <v-textarea
          class="pt-4 ml-1"
          clearable
          color="orange"
          type="text"
          v-model="dog.behaviourHumans"
          label="Comportamiento con humanos"
          auto-grow
        ></v-textarea>
        <v-textarea
          class="pt-4 ml-1"
          clearable
          color="orange"
          type="text"
          v-model="dog.behaviourWalk"
          label="Comportamiento durante paseos"
          auto-grow
        ></v-textarea>
        <v-textarea
          class="pt-4 ml-1"
          clearable
          color="orange"
          type="text"
          v-model="dog.behaviourDiagnosis"
          label="Problemas de comportamiento detectados"
          auto-grow
        ></v-textarea>
        <v-textarea
          class="pt-4 ml-1"
          clearable
          color="orange"
          type="text"
          v-model="dog.observations"
          label="Observaciones"
          auto-grow
        ></v-textarea>
        <v-text-field
          class="pt-4 ml-1 mt-5"
          clearable
          color="orange"
          type="text"
          v-model="dog.author"
          label="Autor de la Ficha"
          auto-grow
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-action>
      <v-btn outline color="cyan" @click="submit">Guardar</v-btn>
    </v-card-action>
    <!-- <div v-if="button == 'update'">
      <v-card-action>
        <v-btn outline color="cyan" @click="update">Actualizar</v-btn>
      </v-card-action>
    </div>-->
  </v-card>
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
      dog: {
        name: "",
        photo: "",
        breed: "Sin identificar",
        age: "",
        months: "",
        freedom: true,
        blocked: false,
        volunteerLevel: "",
        idNumber: "Desconocido",
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
      nameRules: [
        input => input.length >= 3 || "Longitud mínima de 3 carácteres",
        input => input.length <= 10 || "Longitud máxima de 10 carácteres",
        input => {
          var regex = /^[a-zA-Z]+$/;
          return input.match(regex) || "No se aceptan  numeros";
        }
      ],
      ageRules: [
        input => input.length >= 2 || "La edad debe constar de 2 carácteres"
      ]
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
        this.dog.idNumber = "Desconocida";
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

      this.$emit("close");
    }
  }
};
</script>

