<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>

                </ul>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <button class="btn  btn-outline-success my-2 my-sm-0" type="submit">
                            <ShoppingCart :innerItemsCarrito="itemsEnCarrito" :inventario="inventario" @deleteItemHeader="handleDeleteItemHeader"/>
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
            required: true
        },

    },
    components: {
        ShoppingCart
    },
    methods:{
        handleDeleteItemHeader(itemAEliminar){
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