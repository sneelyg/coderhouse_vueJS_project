<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active mx-3">
                        <h5>
                            <router-link to="/" class="text-light">Home</router-link>
                        </h5>
                    </li>
                    <li class="nav-item active mx-3">
                        <h5>
                            <router-link to="/login" class="text-light">Login</router-link>
                        </h5>
                    </li>
                    <li class="nav-item active mx-3">
                        <h5>
                            <router-link to="/user/register" class="text-light">Registrarse</router-link>
                        </h5>
                    </li>
                    <li class="nav-item active mx-3">
                        <h5>
                            <router-link to="/product/register" class="text-light">Registrar Producto</router-link>
                        </h5>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <ShoppingCart :innerItemsCarrito="itemsEnCarrito" :inventario="inventario"
                                @deleteItemHeader="handleDeleteItemHeader" />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
  

<script>
import ShoppingCart from './ShoppingCart.vue';
export default {
    name: 'HeaderBakery',
    props: {
        itemsEnCarrito: Array,
        inventario: {
            type: Array,
            required: true,
            default: () => [],
        },

    },
    components: {
        ShoppingCart
    },
    methods: {
        handleDeleteItemHeader(itemAEliminar) {
            console.log("remove desde header")
            this.$emit('borrarItemDesdeHeader', itemAEliminar)
        }
    }
}

</script>

<style scoped>
ul li:last-of-type {
    text-align: right;
}
</style>