<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3>FormularioRegistro</h3>
            <div class="row justify-content-center">
                <vue-form @submit.prevent="onSubmit" :state="formstate" v-model="formstate">
                    <div class="col-12">
                        <validate tag="label">
                            <span>Nombre*</span>
                            <input type="text" id="firstname" required name="firstname" v-model="model.firstname"
                                class="form-control">
                            <field-messages name="firstname" show="$touched">
                                <div slot="required">El nombre es requerido</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label">
                            <span>Apellido*</span>
                            <input type="text" id="lastname" required name="lastname" v-model="model.lastname"
                                class="form-control">
                            <field-messages name="lastname" show="$touched">
                                <div slot="required">El apellido es requerido</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label">
                            <span>Email*</span>
                            <input type="email" id="email" required name="email" v-model="model.email" class="form-control">
                            <field-messages name="email" show="$touched">
                                <div slot="required">El mail es requerido</div>
                                <div slot="email">El mail no es válido</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label">
                            <span>Username*</span>
                            <input type="email" id="username" required name="username" v-model="model.username"
                                class="form-control">
                            <field-messages name="username" show="$touched">
                                <div slot="required">El username es requerido</div>
                            </field-messages>
                        </validate>
                    </div>

                    <div class="col-12">
                        <validate tag="label" :custom="{ 'check-password': checkPassword }">
                            <span>Password* (Pass123)</span>
                            <input type="password" id="password" required name="password" v-model="model.password"
                                class="form-control">
                            <field-messages name="password" show="$touched">
                                <div slot="check-password">Ingrese un password con al menos 6 caracteres, una mayúscula, una
                                    minúscula y un número</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label" :custom="{ 'check-coincidence': checkCoincidence }">
                            <span>Repite Password* (Pass123)</span>
                            <input type="password" id="password2" required name="password2" v-model="model.password2"
                                class="form-control">
                            <field-messages name="password2" show="$touched">
                                <div slot="check-coincidence">Los password no coinciden</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label" :custom="{ 'check-coincidence': checkCoincidence }">
                            <span>Es Administrador? </span>
                            <input type="checkbox" id="isAdmin" name="isAdmin" v-model="model.isAdmin">
                        </validate>
                    </div>

                    <div class="col-12" >
                        <button type="submit" class="btn btn-primary">Registrarse</button>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>
  

<script>
import axios from 'axios';

export default {
    name: 'FormularioRegistro',
    props: {
        msg: String
    },
    data() {
        return {

            formstate: {},
            model: {
                firstname: "John",
                lastname: "Doe",
                username: "test",
                email: "johndoe@example.com",
                password: "Pass123",
                password2: "Pass123",
                isAdmin: false
            },

        };

    },
    methods: {
        submitHandler() {
            if (this.model.firstname === "") {
                alert("El nombre es obligatorio");
                return;
            }
            else if (this.model.lastname === "") {
                alert("El apellido es obligatorio");
                return;
            }
            else if (this.model.password != this.model.password2) {
                alert("Los password no coinciden")
                return;
            }

            alert("Formulario Enviado")
        },
        onSubmit() {
            console.log(this.formstate);
        
                this.sendData();
            
        },
        checkPassword(value) {

            const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
            return regex.test(value);

        },
        checkCoincidence(value) {
            return (this.model.password === value);
        },
        sendData() {
            const data = {
                username: this.model.username,
                password: this.model.password,
                email: this.model.email,
                nombre: this.model.firstname,
                apellido: this.model.lastname,
                isAdmin: this.model.isAdmin
            };
            console.log("enviando:");
            console.log(data);
            axios
                .post('https://6494c46d0da866a953682d8d.mockapi.io/api/sneelyg/v1/users', data)
                .then(response => {
                    // Maneja la respuesta del servidor
                    console.log(response.data);

                    // Obtener el código HTML de la respuesta
                    const html = response.data;

                    // Mostrar el código HTML en la consola
                    console.log("Código HTML de la respuesta:");
                    console.log(html);

                    // Verificar si el código de respuesta es 200
                    if (response.status === 201) {
                        // Mostrar una alerta si el código es 200
                        alert("Registro Exitoso");
                        this.redirectToLogin();
                    }
                    else {
                        // Mostrar una alerta si el código es 200
                        alert("Registro Fallido");

                    }
                })
                .catch(error => {
                    // Maneja el error
                    console.error(error);
                });
        },
        redirectToLogin() {
            this.$router.push('/login')
        }



    }
}


</script>


<style>
div {
    color: white;
}
</style>