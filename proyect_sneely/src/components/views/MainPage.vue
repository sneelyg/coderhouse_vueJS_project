<template>
    <div>
        <HeaderBakery :inventario="inventary" :itemsEnCarrito="itemsCarrito" @borrarItemDesdeHeader="eliminarItemCarrito" />
        <div>

            <h1 class="text-secondary p-5 m-5 bg-black">Choose your weapon and join the band!</h1>
            <div class="row justify-content-around mx-4">
                <ProductCard v-for="(item, i) in inventary" :key="i" :producto="item" @addItem="handleAddItem" />

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
    mounted() {
        this.fetchData();
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

        },
        fetchData() {
            fetch('https://6494c46d0da866a953682d8d.mockapi.io/api/sneelyg/v1/inventary')
                .then(response => response.json())
                .then(data => {
                    this.inventary = data;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
}

</script>


<style scoped></style>