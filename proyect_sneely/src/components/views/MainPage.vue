<template>
    <div >

        <h1 class="text-secondary p-5 m-5 bg-black">Choose your weapon and join the band!</h1>
        <div class="row justify-content-around mx-4">
            <ProductCard v-for="(item, i) in inventario" :key="i" :imageUrl="item.image" :productName="item.name"
                :productPrice="item.price" />

        </div>
    </div>
</template>

<script>
import ProductCard from '../elements/ProductCard.vue'
//import products from '../../assets/products.js'
//import LoginBakery from '../elements/LoginBakery.vue';


export default {
    name: 'HeaderBakery',
    props: {
        inventario: {
            type: Object, // Se espera un objeto
            required: true
        }

    },

    components: {
        ProductCard,
        // LoginBakery
    }
}

</script>


<style scoped></style>