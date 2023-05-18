import { Persona } from "./Persona.js";

const saludar = () => {
  console.log("Hola!");
};

saludar();
const persona_1 = new Persona('Robert','Galmez', 22, "Chile")
console.log(persona_1)

const name = "Santiago";

const phrase = `hola ${persona_1.nombre}`
console.log(phrase); 

const promesa = new Promise(function (resolve, reject){
    setTimeout(function() { resolve("Promess cumplida"); }, 3000);

});

promesa.then(function(result){
    console.log(`${result} para ${persona_1.nombre}`)
});