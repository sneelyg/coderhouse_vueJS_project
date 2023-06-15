<template>
  <div>
    <HeaderBakery :inventario="inventary" :itemsEnCarrito="renderItemsCarrito" />
    <!-- <FormularioWeb/> -->
    <MainPage :inventario="inventary" @itemAdded="addItemToCart" />

    <LoginBakery />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
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
    }
  },
  created() {
    this.inventary = products;
  },
  computed: {
    renderItemsCarrito() {
      const items = [];
      for (const element of this.itemsCarrito) {
        const producto = this.inventary.find(item => item.id === element);
        if (producto) {
          items.push(producto);
        }
      }
      return items;
    }
  },
  methods: {
    addItemToCart(productId) {
      this.itemsCarrito.push(productId);
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
