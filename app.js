// import { Persona } from "./Persona.js";

//createApp
//Destructuring es como poner const createApp = Vue.createApp, crea la variable y la va a bsucar al bojeto
const { createApp } = Vue;

createApp({
  data() {
    return {
      contador: 0,
      titulo: "Esta es la página de",
      bajada: " está usando VueJS, un framework de javascript ",
      salida: "Ya shau!!",
      nombre: "Santiago",
      nombre_input: "",
      edad: 31,
      ciudad: "Pichilemu",
      a: 20,
      b: 15,
      numero: 13,
      laHora: "",
      mensaje: "El Heladero aumentó los precios",
      div: `
      <h3>Hola desde v-html</h3>
      <p>El Heladoero bajó sus precios</p>
      `,
      url: "https://chileestuyo.cl/wp-content/uploads/2019/09/wave-1246560_1920.jpg",
      parrafo: "",

      classBtn: {
        "background-color": "red",
        cursor: "pointer",
      },
      mostrar: true,
      nombres: ["Brian", "Pedro"],
    };
  },
  created() {
    // Created es para lo que se ejecuta al cargar la página.
    this.calculoFuncion();
  },
  methods: {
    aumentar(){
      this.contador += 1;
    },
    disminuir(){
      this.contador -= 1;
    },
    presentacion() {
      return this.nombre + " tiene " + this.edad + " años!";
    },
    calculoFuncion() {
      return this.a * this.b;
    },
    sumas() {
      return this.numero + 100;
    },
    multiplicado() {
      this.numero *= 10;
    },

    explicacion() {
      return (
        "Esta funcion multiplica " +
        this.a +
        " por " +
        this.b +
        ", y el resultado es : " +
        this.calculoFuncion()
      );
    },
    saludar() {
      console.log("Hola " + this.nombre_input);
    },
  },
  computed: {
    sumaComputed() {
      return this.numero * this.a;
    },
  },
}).mount("#app");
