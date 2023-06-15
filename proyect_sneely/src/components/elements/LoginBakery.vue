<template>
      <div class="row justify-content-center">
    <div class="card bg-dark mx-3 my-1 p-3 justify-content-center" style="width: 25rem; height: 18rem ;">
        <form action="">
            <div class="row">
                <div class="col-6 bg-dark d-inline my-1">
                    <label class="text-light" for="">Username</label>
                </div>
                <div class="col-6 bg-dark d-inline my-1">
                    <input type="text" id="name" v-model="nombre" />
                </div>
            </div>

            <div class="row">
                <div class="col-6 bg-dark d-inline my-1">
                    <label class="text-light" for="">Password</label>
                </div>
                <div class="col-6 bg-dark d-inline my-1">
                    <input type="text" id="password" v-model="password" />
                </div>
            </div>

            <div class="row">
                <div class="col-12 bg-dark d-inline my-3">
                   <button>Login</button>
                </div>
            </div>


        </form>


    </div>
</div>
</template>

<script>



export default {
    name: 'LoginBakery',
    props: {

    },

    data() {
        return {

            nombre: "",
            password: "",

        }
    },
    created() {

    },
    methods: {

    }
}

</script>

<style scoped></style>