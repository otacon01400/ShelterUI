<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn slot="activator" depressed fab outline large color="orange">
      <v-icon>search</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Busqueda de Perro por Nombre</h2>
      </v-card-title>
      <v-card-text>
        <v-form onSubmit="return false;" ref="form">
          <v-text-field
            class="pt-4 ma-0"
            clearable
            prepend-icon="search"
            color="orange"
            v-model="searchInput"
            label="Nombre del perro"
            required
            :rules="inputRules"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-action>
        <v-btn outline color="orange" @click="storeInput">Iniciar Busqueda</v-btn>
      </v-card-action>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      searchInput: "",
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
    storeInput() {
      if (this.$refs.form.validate()) {
        this.$store.commit("storeInput", this.searchInput);
        this.dialog = false;
      }
      this.searchInput = null;
    }
  }
};
</script>

