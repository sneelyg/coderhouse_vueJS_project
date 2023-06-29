import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import axios from 'axios';

export default new Vuex.Store({
  state: {
    inventario: [],
    current_user: 0,
    items_carrito: [],
    full_user: {},
  },
  mutations: {
    setInventario(state, inventario) {
      state.inventario = inventario;
    },
    setCurrentUser(state, current_user) {
      state.current_user = current_user.id;
    },
    cargarCarritoUsuario(state, carritoUsuario) {
      state.items_carrito = carritoUsuario;

    },
    agregarItemsCarrito(state, item) {
      state.items_carrito.push(item)
    },
    eliminarItemCarritoMut(state, posicion) {
      state.items_carrito.splice(posicion, 1);
    },
    setFullUserMut(state, fullUser) {
      state.full_user = fullUser;
    },

    setCarritoFullUser(state) {
      state.full_user.cartItems = state.items_carrito;
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
    agregarItemACarrito(context, item) {
      context.commit('agregarItemsCarrito', item)
    },

    eliminarItemCarrito(context, posicion) {
      context.commit('eliminarItemCarritoMut', posicion)
    },

    setFullUser(context, fullUserData) {
      const parsedUserData = JSON.parse(fullUserData);
      context.commit('setFullUserMut', parsedUserData);
      console.log("Full User   " + parsedUserData);
      console.log("Full User  cart  " + parsedUserData.cartItems);
    },

    actualizarCarritoUsuario(context) {
      const data = {
        username: context.state.full_user.username,
        password: context.state.full_user.password,
        email: context.state.full_user.email,
        nombre: context.state.full_user.nombre,
        apellido: context.state.full_user.apellido,
        cartItems: context.state.items_carrito,
        id: context.state.full_user.id
      }

      const url = `https://6494c46d0da866a953682d8d.mockapi.io/api/sneelyg/v1/users/${data.id}`;

      axios.put(url, data)
        .then(response => {
          const userActualizado = response.data;
          console.log(JSON.stringify(userActualizado))

          // Aquí puedes manejar la respuesta de la solicitud PUT si es necesario
        })
        .catch(error => {
          console.error(error);
        });
    }


    // putCarrito(context, nuevoCarrito) {

    // }

  },
  // watch: {
  //   'items_carrito'(nuevoCarrito) {
  //     this.dispatch('putCarrito', nuevoCarrito);
  //   },
  // },
});
