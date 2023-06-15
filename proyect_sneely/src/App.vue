<template>
  <HeaderBakery :inventario="inventary" :itemsEnCarrito="itemsCarrito" />
  <!-- <FormularioWeb/> -->
  <MainPage :inventario="inventary" @itemAdded="addItemToCart" />

  <LoginBakery />

  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/elements/HelloWorld.vue'
import HeaderBakery from './components/elements/HeaderBakery.vue'
import LoginBakery from './components/elements/LoginBakery.vue'
import MainPage from './components/views/MainPage.vue'
import products from './assets/products.js'
//import FormularioWeb from './components/elements/FormularioWeb.vue'

export default {
  name: 'App',
  data() {
    return {
      inventary: [],  //Esta es la lista total de productos en inventario
      itemsCarrito: [],  //Esto almacena los ID de los elementos agregados al carrito
      renderItemsCarrito: []  //Esto tiene cada elemento agregado al carrito completo.
    }
  },
  created() {
    this.inventary = products;

  },
  methods: {
    addItemToCart(productId) {
      console.log(this.itemsCarrito)
      this.itemsCarrito.push(productId)
      this.renderCarrito()
    },
    renderCarrito() {
      this.renderItemsCarrito = []
      for (elements in this.itemsCarrito) {
        for (instrumentos in inventary) {
          if (instrumentos.id == elements) {
            this.renderItemsCarrito.push(instrumentos)
          }
        }
      }
    }
  },
  components: {
    HelloWorld,
    HeaderBakery,
    LoginBakery,
    MainPage,
    //FormularioWeb,
  }
}
</script>

<style>
body {
  background-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #2c3e50;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
