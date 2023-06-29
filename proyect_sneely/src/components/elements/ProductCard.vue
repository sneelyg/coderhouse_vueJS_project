<template>
    <div class="card bg-dark mx-3 my-3 p-3" style="width: 18rem;">
        <img class="card-img-top" :src="producto.image" :alt="producto.name"
            style="object-fit: cover; width: 100%; aspect-ratio: 1/1;">>
        <div class="card-body">

            <p class="card-text text-light">{{ producto.name }}</p>
            <p class="card-text text-light">{{ producto.price }}</p>
            <button class="btn btn-light text-dark" @click="innerAddItemToCart" v-show="login && !isAdmin"> Add to Cart</button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ProductCard',
    data() {
        return {
            login: false,
            isAdmin: false,

        }
    },
    props: {
        producto: {
            type: Object,
            required: true

        },
        imageUrl: String,
        productName: String,
        productPrice: Number,
        productId: Number,


    },
    methods: {
        innerAddItemToCart() {
            this.$emit('addItem', this.producto);
            this.$store.dispatch('agregarItemACarrito', this.producto.id);
            this.$store.dispatch('actualizarCarritoUsuario');
        }
    },
    mounted() {
        // Comprobar si existe la variable "current_user" en el localStorage
        if (localStorage.getItem('current_user')) {
            this.login = true;
            this.isAdmin = JSON.parse(localStorage.getItem('current_user')).isAdmin;
            console.log(this.login, this.isAdmin);
        } else {
            this.login = false;
            this.isAdmin = false;
            console.log(this.login, this.isAdmin);
        }
    }

}

</script>

<style scoped></style>