<template>
  <div class="home">
    <v-container class="my-5">
      <v-card flat class="py-2 rounded-card" color="cyan lighten-5" rounded>
        <v-layout row wrap justify-space-around align-baseline>
          <v-flex xs4 sm6 class="cyan--text">
            <h3 class>Visor de Fichas</h3>
          </v-flex>
          <v-flex xs2 sm2>
            <v-btn fab depressed outline large color="cyan">
              <v-icon>list</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card flat class="py-2">
        <v-layout row wrap justify-space-around align-baseline>
          <v-flex xs4 sm4>
            <p left>Visor de Fichas</p>
          </v-flex>
          <v-flex xs2 sm2>
            <v-btn fab depressed>
              <v-icon>list</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    expand: false
  })
};
</script>
<style>
.rounded-card {
  border-radius: 50px;
}
</style>
