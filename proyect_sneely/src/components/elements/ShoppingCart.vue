<template>
  <div>
    <button class="btn text-light btn-outline-0 my-2 my-sm-0" @click="toggleCarrito">{{ textoBoton }}</button>
    <div v-if="mostrarCarrito">
      <div>
        <CartCard v-for="(productos, i) of innerItemsCarrito" :key="i"
        :productName="productos.name"
        :productPrice="productos.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from './CartCard.vue';

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
      textoBoton: 'Shopping Cart',
    };
  },
  methods: {
    toggleCarrito() {
      this.mostrarCarrito = !this.mostrarCarrito;
      this.textoBoton = this.mostrarCarrito ? 'Ocultar Carrito' : 'Shopping Cart';
    },
    renderizarItemsEnCarro() {
      console.log("Renderizando");
    }
  },
  watch: {
    inventario(newValue) {
      console.log('El prop inventario ha cambiado. Nuevo valor:', newValue);
      this.renderizarItemsEnCarro();
    }
  },
  components: {
    CartCard
  }
}
</script>

<style scoped></style>
