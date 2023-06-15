<template>
  <div>
    <button class="btn text-light btn-outline-0 my-2 my-sm-0" @click="toggleCarrito">Shopping Cart</button>
    <div v-if="mostrarCarrito">
      <div>
        <h1>Carrito</h1>
        <h1 v-for="(productos, i) of innerItemsCarrito" :key="i">
          {{ productos }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    inventario: {
      type: Array,
      required: true
    },

    innerItemsCarrito: Array,
  },
  data() {
    return {
      mostrarCarrito: false,
      renderCarrito: [],
    };
  },


  methods: {
    toggleCarrito() {
      this.mostrarCarrito = !this.mostrarCarrito;
    },
    renderizarItemsEnCarro() {
      console.log("Renderizando")

    }
  },
  watch: {
    inventario(newValue) {
      console.log('El prop inventario ha cambiado. Nuevo valor:', newValue);
      this.renderizarItemsEnCarro();
    }
  },
}

</script>

<style scoped></style>