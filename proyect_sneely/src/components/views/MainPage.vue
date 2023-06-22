<template>
    <div>

        <h1 class="text-secondary p-5 m-5 bg-black">Choose your weapon and join the band!</h1>
        <div class="row justify-content-around mx-4">
            <ProductCard v-for="(item, i) in inventario" :key="i" :imageUrl="item.image" :productName="item.name"
                :productPrice="item.price" :productId="item.id" @addItem="handleAddItem" />

        </div>
    </div>
</template>

<script>
import ProductCard from '../elements/ProductCard.vue'


export default {
    name: 'MainPage',
    props: {
        inventario: {
            type: Object,
            required: true
        }

    },

    components: {
        ProductCard,

    },
    methods: {
        handleAddItem(productId) {
            this.$emit('itemAdded', productId);
        },
    },
}

</script>


<style scoped></style>