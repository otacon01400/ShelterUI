<template>
  <v-toolbar dense app class="mt-5" flat>
    <v-flex v-for="button in buttons" :key="button.name">
      <v-btn
        small
        block
        flat
        color="orange"
        :active-class="active"
        :disabled="button.disabled"
        router
        :to="'/zones'"
      >{{button.text}}</v-btn>
    </v-flex>
  </v-toolbar>
</template>
<script>
export default {
  props: {
    currentView: String
  },
  data() {
    return {};
  },
  computed: {
    buttons() {
      let arrayDefault = [
        {
          text: "Zonas",
          disabled: false,
          active: ""
        },
        {
          text: "Patios",
          disabled: true,
          active: ""
        },
        {
          text: "Perros",
          disabled: true,
          active: ""
        }
      ];
      console.log(this.currentView);
      let btnArray = arrayDefault.map(button => {
        console.log(button.text);
        if (this.currentView == button.text) {
          button.disabled = false;
          button.active = "true";
        }
        return button;
      });

      return btnArray;
    }
  }
};
</script>
<style>
.activeBtn {
  color: cornflowerblue;
}
</style>


