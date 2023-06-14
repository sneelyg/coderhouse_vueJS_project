<template>

    <div>
   

        <!-- <h1 class="text-light">Main Page</h1> -->
        <!-- <div class="row">
            <ProductCard v-for="items, i of this.arregloDatos" 
            :key="i" 
            :imageUrl=items.image
            :productName=items.name
            :productPrice=items.price />

        </div> -->
    </div>
</template>

<script>
//import ProductCard from '../elements/ProductCard.vue'
import products from '../../assets/products.js'
//import LoginBakery from '../elements/LoginBakery.vue';


export default {
    name: 'HeaderBakery',
    props: {

    },
    data() {
        return {
            arregloDatos: products
        };
    },

    components: {
        //ProductCard,
       // LoginBakery
    }
}

</script>


<style scoped></style>