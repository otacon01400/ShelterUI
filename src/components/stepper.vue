<template>
  <v-toolbar dense app class="mt-5" flat>
    <v-flex v-for="button in buttons" :key="button.name">
      <div v-if="button.historyLevel == 0">
        <v-btn
          small
          block
          flat
          :color="button.stateColor"
          :disabled="button.disabled"
        >{{button.text}}</v-btn>
      </div>
      <div v-else>
        <v-btn
          small
          block
          flat
          :color="button.stateColor"
          :disabled="button.disabled"
          @click="$router.go(button.historyLevel)"
        >{{button.text}}</v-btn>
      </div>
    </v-flex>
  </v-toolbar>
</template>
<script>
export default {
  props: {
    currentView: String
  },
  data() {
    return {
      defaultButtons: [
        {
          text: "Zonas",
          disabled: true,
          historyLevel: 0,
          order: "1",
          stateColor: ""
        },
        {
          text: "Patios",
          disabled: true,
          historyLevel: 0,
          order: "2",
          stateColor: ""
        },
        {
          text: "Perros",
          disabled: true,
          historyLevel: 0,
          order: "3",
          stateColor: ""
        }
      ]
    };
  },
  computed: {
    buttons() {
      let historyCalculator;
      let btnArray = this.defaultButtons.map(button => {
        if (button.order <= this.currentView) {
          button.disabled = false;
          if (button.order == this.currentView) button.stateColor = "orange";
        }
        historyCalculator = this.currentView - button.order;
        if (historyCalculator > 0) button.historyLevel = -historyCalculator;
        return button;
      });

      return btnArray;
    }
  }
};
</script>
<style>
</style>


