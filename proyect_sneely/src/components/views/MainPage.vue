<template>
    <div>
        <HeaderBakery :inventario="this.$store.inventario" :itemsEnCarrito="itemsCarrito" @borrarItemDesdeHeader="eliminarItemCarrito" />
        <div>
            <h5>{{ this.$store.state.items_carrito }}</h5>
            <h1 class="text-secondary p-5 m-5 bg-black">Choose your weapon and join the band!</h1>
            <div class="row justify-content-around mx-4">
                <ProductCard v-for="(item, i) in this.$store.state.inventario" :key="i" :producto="item" @addItem="handleAddItem" />

            </div>
        </div>

    </div>
</template>

<script>
import ProductCard from '../elements/ProductCard.vue'
// import products from '../../assets/products.js'
import HeaderBakery from '../elements/HeaderBakery.vue'


export default {
    name: 'MainPage',


    data() {
        return {
            itemsCarrito: [],  //Esto almacena los elementos agregados al carrito
            inventary: null
        }
    },
    created() {
         this.$store.dispatch('cargarInventario'); 
    },
    components: {
        ProductCard,
        HeaderBakery

    },
    methods: {
        handleAddItem(product) {
            console.log("Click en botón de product card")
            this.itemsCarrito.push(product)
            console.log("items carrito")
            console.log(this.itemsCarrito)
            // this.$emit('itemAdded', productId);
        },
        eliminarItemCarrito(borrarItem) {
            console.log("borrando en mainPage")
            console.log(borrarItem)

        }
    },
}

</script>


<style scoped></style>