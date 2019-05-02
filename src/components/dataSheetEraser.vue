<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn icon slot="activator" flat>
      <v-icon>delete_forever</v-icon>
    </v-btn>
    <v-card>
      <v-card-text>
        <v-layout align-center column>
          <div class="title text-uppercase">Se va a borrar la ficha.</div>
          <div class="subheading mt-2">Quieres continuar?</div>
        </v-layout>
      </v-card-text>
      <v-card-action>
        <v-layout row justify-center class="pb-3">
          <v-btn right @click="dialog = false" flat outline color="orange">Borrar</v-btn>
          <v-btn left @click="dialog = false" flat outline color="orange">Cancelar</v-btn>
        </v-layout>
      </v-card-action>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    rease() {
      this.dialog = false;
    }
  }
};
</script>
