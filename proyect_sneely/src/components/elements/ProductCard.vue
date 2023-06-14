<template>
    <div class="card bg-dark mx-3 my-1 p-3" style="width: 18rem;">
        <img class="card-img-top" :src="imageUrl" alt="Card image cap">
        <div class="card-body">

            <p class="card-text text-light">{{productName}}</p>
            <p class="card-text text-light">{{productPrice}}</p>
            <button class="btn btn-primary"> Add to Cart</button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ProductCard',
    props: {
        imageUrl: String,
        productName: String,
        productPrice: String,
        
    }
}

</script>

<style scoped></style>