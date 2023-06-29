<template>
    <div>
        <HeaderBakery :inventario="this.$store.state.inventario"/>
        <FormularioRegistro />
    </div>
</template>

<script>
// import LoginBakery from '../elements/LoginBakery.vue'
import FormularioRegistro from '../elements/FormularioRegistro.vue';
import HeaderBakery from '../elements/HeaderBakery.vue';

export default {
    name: 'RegisterPage',
    props: {

    },
    components: {
        FormularioRegistro,
        HeaderBakery
    }
}

</script>

<style scoped></style>