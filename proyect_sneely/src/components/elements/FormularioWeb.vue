<template>

<div>
<form action="">
    <label class="text-light" for="">Username</label>
    <input type="text" id="name" v-model="nombre" />
</form>
<p class="text-light">{{ nombre }}</p>

</div>
</template>

<script>


export default {
    name: 'FormularioWeb',

    data() {
        return {
            nombre:""
        }
    },
    props: {
        imageUrl: String,
        productName: String,
        productPrice: String,

    }
}

</script>
div{
    color: white;
}
<style scoped></style>