import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inventario: [],
    current_user: 0,
    items_carrito: [],
  },
  mutations: {
    setInventario(state, inventario) {
      state.inventario = inventario;
    },
    setCurrentUser(state, current_user) {
      state.current_user = current_user;
    },
    cargarCarritoUsuario(state, carritoUsuario) {
      state.items_carrito = carritoUsuario;

    },
    agregarItemsCarrito(state, item) {
      state.items_carrito.push(item)
    }

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
    cargarCurrentUser(context, currentUser) {
      context.commit('setCurrentUser', currentUser)
      console.log(currentUser)
    },

    cargarCarritoUser(context, userCarrito) {
      console.log("desde store actions" + userCarrito)
      context.commit('cargarCarritoUsuario', userCarrito)
    },
    agregarItemACarrito(context, item){
      context.commit('agregarItemsCarrito', item)
    },

  },
});
