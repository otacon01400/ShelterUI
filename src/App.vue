<template>
  <v-app>
    <navbar></navbar>
    <v-slide-y-transition mode="out-in">
      <router-view></router-view>
    </v-slide-y-transition>
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
