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
            prepend-icon="search"
            color="orange"
            v-model="name"
            label="Nombre del perro"
            required
            :rules="inputRules"
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
export default {
  props: {
    reference: String
  },
  data() {
    return {
      name: "",
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
          id_yard: db.doc("/yards/" + this.reference)
        };
        db.collection("dogs").add(dog);
        this.dialog = false;
      }
    }
  }
};
</script>
