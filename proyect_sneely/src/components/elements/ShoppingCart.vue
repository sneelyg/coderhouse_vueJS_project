<template>
  <div>
    <button class="btn text-light btn-outline-0 my-2 my-sm-0" @click="toggleCarrito">{{ textoBoton }}</button>
    <div v-if="mostrarCarrito">
      <div>
        <CartCard v-for="(productos, i) of innerItemsCarrito" :key="i" :producto="productos" @deleteItem="removeItemfromShoppingCart"/>
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
    removeItemfromShoppingCart(producto_a_eliminar){
      console.log("Remove desde shopping Cart")
      this.$emit('deleteItemHeader', producto_a_eliminar);
      
    }
  },
  components: {
    CartCard
  }
}
</script>

<style scoped></style>
