import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inventario: [],
  },
  mutations: {
    setInventario(state, inventario) {
      state.inventario = inventario;
    },
  },
  actions: {
    cargarInventario(context) {
      fetch('https://6494c46d0da866a953682d8d.mockapi.io/api/sneelyg/v1/inventary')
        .then(response => response.json())
        .then(data => {
          context.commit('setInventario', data); // Ejecutar la mutación con los datos recibidos
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
});
