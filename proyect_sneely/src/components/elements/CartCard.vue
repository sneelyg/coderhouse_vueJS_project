<template>
    <div class="card bg-transparent" style="width: 60rem;">

        <div class="row ">

            <p class="card-text text-light col-5">{{ productName }}</p>
            <p class="card-text text-light col-3">{{ productPrice }}</p>
            <p class="card-text text-light col-3">1</p>
            <button class="btn btn-light text-dark col-1" @click="innerAddItemToCart"> Delete</button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'CartCard',
    props: {
        productName: String,
        productPrice: Number,
        productId: Number,


    },
    methods: {
        innerAddItemToCart(){
            this.$emit('addItem', this.productId);
        }
    }
}

</script>

<style scoped></style>