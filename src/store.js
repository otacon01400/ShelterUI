import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchInput: ''
    },
    getters: {
        updatedInput: state => {
            return state.searchInput

        }
    },
    mutations: {
        storeInput: (state, input) => {
            state.searchInput = input;
        }
    }
})