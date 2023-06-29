<template>
  <div>
    <button class="btn text-light btn-outline-0 my-2 my-sm-0" @click="toggleCarrito">{{ textoBoton }}</button>
    <div v-if="mostrarCarrito">
      <div>
        <CartCard v-for="(productos, i) of renderCarrito" :key="i" :producto="productos" :id="i"/>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from './CartCard.vue';

export default {
  name: 'ShoppingCart',
  props: {
    innerItemsCarrito: Array,
  },
  data() {
    return {
      mostrarCarrito: false,
      textoBoton: 'Shopping Cart'
    }
  },
  methods: {
    toggleCarrito() {
      this.mostrarCarrito = !this.mostrarCarrito;
      this.textoBoton = this.mostrarCarrito ? 'Ocultar Carrito' : 'Shopping Cart';
    },

  },
  computed: {
    renderCarrito() {
      const itemsCarrito = this.$store.state.items_carrito;
      const inventario = this.$store.state.inventario;
      const renderCarrito = [];

      itemsCarrito.forEach(itemId => {
        const producto = inventario.find(item => item.id === itemId);
        if (producto) {
          renderCarrito.push(producto);
        }
      });
      console.log(renderCarrito);
      return renderCarrito;
    }
  },
  components: {
    CartCard
  }
}
</script>

<style scoped></style>
