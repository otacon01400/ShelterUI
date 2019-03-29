<template>
  <v-app class="white">
    <navbar/>
    <v-fade-transition mode="out-in">
      <router-view></router-view>
    </v-fade-transition>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar";

export default {
  name: "App",
  components: {
    navbar
  }
};
</script>

<style>
</style>
