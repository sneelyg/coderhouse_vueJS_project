import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from './components/views/MainPage.vue';
import LoginPage from './components/views/LoginPage.vue';

Vue.use(VueRouter);

const routes =[
    {path: "/" , component: MainPage, name: "home"},
    {path: "/login", component: LoginPage, name:"login"}
]

const router = new VueRouter({
    mode: 'history',
    routes,
  });
  
  export default router;