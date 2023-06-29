<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3>Login</h3>

            <div class="row justify-content-center">
                <vue-form @submit.prevent="onSubmit" :state="formstate">
                    <div class="col-12">
                        <validate tag="label">
                            <span>Username</span>
                            <input type="text" id="username" required name="username" v-model="model.username"
                                class="form-control">
                            <field-messages name="username" show="$touched">
                                <div slot="required">El username es requerido</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label">
                            <span>Password</span>
                            <input type="password" id="password" required name="password" v-model="model.password"
                                class="form-control">
                            <field-messages name="password" show="$touched">
                                <div slot="required">El password es requerido</div>
                            </field-messages>
                        </validate>
                    </div>

                    <div class="col-12 my-3">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'LoginBakery',
    props: {},
    data() {
        return {
            formstate: {},
            model: {
                username: "",
                password: ""
            },
        }
    },
    methods: {
        onSubmit() {
            if (this.formstate.$valid) {
                this.getUsers();
            }
        },
        getUsers() {
            axios.get('https://6494c46d0da866a953682d8d.mockapi.io/api/sneelyg/v1/users')
                .then(response => {
                    const users = response.data;
                    const foundUser = users.find(user => user.username === this.model.username && user.password === this.model.password);
                    if (foundUser) {
                        // Guardar el ID del usuario en el local storage
                        localStorage.setItem('current_user', foundUser.id);
                        this.$store.dispatch('cargarCurrentUser',foundUser.id); 
                        
                        console.log("cart items" + foundUser.cartItems)
                        this.$store.dispatch('cargarCarritoUser', foundUser.cartItems);
                        alert("Login Exitoso: " + this.model.username);
                        this.redirectToHome();
                    } else {
                        alert("Usuario o contraseña no válidos");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        redirectToHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped></style>
