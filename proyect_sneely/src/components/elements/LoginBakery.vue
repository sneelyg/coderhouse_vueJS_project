<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3>Login</h3>
  
        <div class="row justify-content-center">
          <vue-form @submit.prevent="onSubmit" :state="formstate">
            <div class="col-12">
              <validate tag="label">
                <span>Username</span>
                <input type="text" id="username" required name="username" v-model="model.username" class="form-control">
                <field-messages name="username" show="$touched">
                  <div slot="required">El username es requerido</div>
                </field-messages>
              </validate>
            </div>
            <div class="col-12">
              <validate tag="label">
                <span>Password</span>
                <input type="password" id="password" required name="password" v-model="model.password" class="form-control">
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
      getUsers() {
        axios.get('https://6494c46d0da866a953682d8d.mockapi.io/api/sneelyg/v1/users')
          .then(response => {
            const users = response.data;
            const foundUser = users.find(user => user.username === this.model.username && user.password === this.model.password);
            if (foundUser) {
              alert("Login Exitoso: " + this.model.username);

            } else {
              alert("Usuario o contraseña no válidos");
            }
          })
          .catch(error => {
            console.error(error);
          });
      },
      onSubmit() {
        if (this.formstate.$valid) {
          this.getUsers();
        }
      }
    }
  }
  </script>
  
  <style scoped></style>
  