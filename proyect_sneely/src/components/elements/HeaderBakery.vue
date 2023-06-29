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
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <router-link to="/" class="text-light">Home</router-link>
                        </button>
                        </h5>
                    </li>
                    <li class="nav-item active mx-3" v-show="!login">
                        <h5>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <router-link to="/login" class="text-light">Login</router-link>
                            </button>
                        </h5>
                    </li>
                    <li class="nav-item active mx-3" v-show="!login">
                        <h5>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <router-link to="/user/register" class="text-light">Registrarse</router-link>
                            </button>
                        </h5>
                    </li>
                    <li class="nav-item active mx-3" v-show="isAdmin">
                        <h5>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <router-link to="/product/register" class="text-light" >Registrar Producto</router-link>
                            </button>
                        </h5>
                    </li>
                    <li class="nav-item active mx-3"  v-show="login">
                        <h5>
                            <button class="btn btn-outline-danger my-2 my-sm-0" @click="handleCerrarSesion">
                                <p>Cerrar Sesión</p>
                            </button>
                        </h5>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-show="login && !isAdmin">
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

    data() {
        return {
            login: false,
            isAdmin: false,
        }
    },

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
        },

        handleCerrarSesion() {
            localStorage.removeItem('current_user');
            localStorage.removeItem('isAdmin');
            this.$router.push('/login')
        }
    },
    mounted() {
    // Comprobar si existe la variable "current_user" en el localStorage
    if (localStorage.getItem('current_user')) {
      this.login = true;
      this.isAdmin = JSON.parse(localStorage.getItem('current_user')).isAdmin;
      console.log(this.login, this.isAdmin);
    } else {
      this.login = false;
      this.isAdmin = false;
      console.log(this.login, this.isAdmin);
    }
    

    // Escuchar los cambios en el localStorage
    window.addEventListener('storage', (event) => {
      if (event.key === 'current_user') {
        if (localStorage.getItem('current_user')) {
          this.login = true;
          this.isAdmin = JSON.parse(localStorage.getItem('current_user')).isAdmin;
          console.log("change" , this.login, this.isAdmin);
        } else {
          this.login = false;
          this.isAdmin = false;
          console.log("change", this.login, this.isAdmin);
        }
      }
    });
  },
}

</script>

<style scoped>
ul li:last-of-type {
    text-align: right;
}
</style>