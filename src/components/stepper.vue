<template>
  <v-toolbar dense app class="mt-5" flat>
    <v-flex v-for="button in buttons" :key="button.name">
      <v-btn
        small
        block
        flat
        :color="button.stateColor"
        :active-class="button.active"
        :disabled="button.disabled"
        router
        :to="button.route"
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
          disabled: true,
          active: "",
          order: "1",
          stateColor: "black",
          route: ""
        },
        {
          text: "Patios",
          disabled: true,
          active: "",
          order: "2",
          stateColor: "black",
          route: ""
        },
        {
          text: "Perros",
          disabled: true,
          active: "",
          order: "3",
          stateColor: "black",
          route: ""
        }
      ];

      let btnArray = arrayDefault.map(button => {
        if (button.order <= this.currentView) {
          button.disabled = false;
          if (button.order == this.currentView) button.stateColor = "orange";
        }
        // if(button.order == '1' && this.currentView == '2') button.route =
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


