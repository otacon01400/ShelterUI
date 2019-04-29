<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-if="button == 'create' || button == 'update'">
      <template v-if="button == 'create'">
        <v-btn slot="activator" depressed fab color="cyan">
          <v-icon color="white">add</v-icon>
        </v-btn>
      </template>
      <template v-if="button == 'update'">
        <v-btn slot="activator" flat color="grey darken-1">
          <v-icon left>chrome_reader_mode</v-icon>
          <span right>Ver Ficha</span>
        </v-btn>
      </template>
      <dogFormBase :reference="reference" @close="dialog = false"/>
    </template>
    <template v-if="button == 'view'">
      <v-btn slot="activator" flat color="grey darken-1">
        <v-icon left>chrome_reader_mode</v-icon>
        <span right>Ver Ficha</span>
      </v-btn>
      <dogFile :dogData="dogData" @changeToEdit="button = 'create'"/>
    </template>
  </v-dialog>
</template>
<script>
import db from "@/fb.js";
import dateFormat from "@/Date.format.min.js";
import dogFormBase from "@/components/dogFormBase";
import dogFile from "@/components/dogFile";

export default {
  components: { dogFormBase, dogFile },
  props: {
    reference: String,
    editable: Boolean,
    button: String,
    title: String,
    dogID: String
  },
  data() {
    return {
      dog: {
        name: "",
        photo: "",
        breed: "Sin identificar",
        age: "",
        months: "",
        freedom: true,
        blocked: false,
        volunteerLevel: "",
        idNumber: "Desconocido",
        story: "Desconocida",
        behaviourDogs: "",
        behaviourHumans: "",
        behaviourWalk: "",
        behaviourDiagnosis: "",
        observations: "",
        creationDate: "",
        updateDate: "",
        author: ""
      },
      dialog: false
    };
  },
  methods: {
    changeEditState() {
      this.button = "update";
    },
    update() {
      this.button = "view";
      this.dialog = false;
    }
  },
  computed: {
    dogData: function() {
      return this.dog;
    }
  },
  created() {
    db.collection("dogs")
      .where("name", "==", this.title)
      .onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            this.dog = {
              ...change.doc.data(),
              id: change.doc.id
            };
          }
        });
      });
  }
};
</script>

<style>
.v-btn.freedomTrue {
  color: #3ec1d3;
}
.v-btn.freedomFalse {
  color: #ff9a00;
}
.v-btn.blocked {
  color: #ff165d;
}
</style>

