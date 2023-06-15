<template>
    <div class="card bg-dark mx-3 my-3 p-3" style="width: 18rem;">
        <img class="card-img-top" :src="imageUrl" :alt="productName"  style="object-fit: cover; width: 100%; aspect-ratio: 1/1;">>
        <div class="card-body">

            <p class="card-text text-light">{{productName}}</p>
            <p class="card-text text-light">{{productPrice}}</p>
            <button class="btn btn-light text-dark"> Add to Cart</button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ProductCard',
    props: {
        imageUrl: String,
        productName: String,
        productPrice: Number,
       
        
    }
}

</script>

<style scoped></style>