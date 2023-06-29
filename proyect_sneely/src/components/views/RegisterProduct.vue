<template>
    <div>
        <HeaderBakery :inventario="this.$store.state.inventario"/>
        <FormularioProducto />
    </div>
</template>

<script>
// import LoginBakery from '../elements/LoginBakery.vue'
import FormularioProducto from '../elements/FormularioProducto.vue';
import HeaderBakery from '../elements/HeaderBakery.vue';

export default {
    name: 'RegisterProduct',
    props: {

    },
    components: {
        HeaderBakery,
        FormularioProducto
    }
}

</script>

<style scoped></style>