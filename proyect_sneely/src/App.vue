<template>
  <HeaderBakery/>
  <!-- <FormularioWeb/> -->
  <MainPage/>
  <LoginBakery/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/elements/HelloWorld.vue'
import HeaderBakery from './components/elements/HeaderBakery.vue'
import LoginBakery from './components/elements/LoginBakery.vue'
import MainPage from './components/views/MainPage.vue'
//import FormularioWeb from './components/elements/FormularioWeb.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderBakery,
    LoginBakery,
    MainPage,
    //FormularioWeb,
  }
}
</script>

<style>
body{
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #2c3e50;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
