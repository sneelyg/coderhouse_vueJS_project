<template>
    <div>
        <HeaderBakery :inventario="this.$store.state.inventario"/>
        <LoginBakery />
    </div>
</template>

<script>
import LoginBakery from '../elements/LoginBakery.vue'
import HeaderBakery from '../elements/HeaderBakery.vue';

export default {
    name: 'LoginPage',
    props: {

    },
    components: {
        LoginBakery,
        HeaderBakery
    }
}

</script>

<style scoped></style>