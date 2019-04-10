<template>
  <v-toolbar dense app class="mt-5" flat>
    <v-btn small flat block router :to="'/zones'">Zonas</v-btn>
    <v-icon>keyboard_arrow_right</v-icon>
    <v-btn small flat block router :to="'/Yards'">Patios</v-btn>
    <v-icon>keyboard_arrow_right</v-icon>
    <v-btn small flat block router :to="'/Dogs'">Perros</v-btn>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
</style>


