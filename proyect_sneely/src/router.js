import Vue from "vue";
import VueRouter from "vue-router";

// import HomePage from "./views/HomePage.vue";
// import QuienesSomos from "./views/QuienesSomos.vue";
// import PostId from "./views/PostId.vue";
import MainPage from "./components/views/MainPage.vue"
import LoginPage from "./components/views/LoginPage.vue"
import RegisterPage from "./components/views/RegisterPage.vue"
import RegisterProduct from "./components/views/RegisterProduct.vue"

Vue.use(VueRouter);

const routes = [
  // { path: "/", component: HomePage, name: "home" },
  // { path: "/somos-increibles", component: QuienesSomos, name: "quienes-somos" },
  // { path: "/posts/:id", component: PostId, name: "post-id" },
  { path: "/", 
  component: MainPage, 
  name: "main-page",
  props: true
 },
  { path: "/login", 
  component: LoginPage, name: "login-page", props: true },
  { path: "/user/register", 
  component: RegisterPage, name: "register-page", props: true },
  { path: "/product/register", 
  component: RegisterProduct, name: "register-product", props: true },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
