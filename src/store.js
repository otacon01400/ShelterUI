import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchInput: '',
        // selectedZone: '',
        // selectedZoneData: []
    },
    getters: {
        updatedInput: state => {
            return state.searchInput;

        },
        // zone: state => {
        //     return state.selectedZone;
        // },
        // yards: state => {
        //     return state.selectedZoneData;
        // }
    },
    mutations: {
        storeInput: (state, input) => {
            state.searchInput = input;
        },
        // getSelectedZoneData: (state, inputData) => {
        //     // state.selectedZone = inputName;
        //     state.selectedZoneData = inputData;
        // },
        // getSelectedZoneData: (state, inputData) => {
        //     // state.selectedZone = inputName;
        //     state.selectedZoneData = inputData;
        // }
    }
})