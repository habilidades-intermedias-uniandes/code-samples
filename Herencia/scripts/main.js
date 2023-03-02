import { Dispositivo } from "./dispositivo.js";
import { Telefono } from "./telefono.js";
import { Computador } from "./computador.js";
const telefono = new Telefono(1, "Alcatel 1", 400, 600, "123456789", "Android");
console.log(telefono);
const computador = new Computador(2, "Macbook Pro", 800, 1200, "Intel Core i7", 2.5, 4, "MacOS");
console.log(computador);
const otro = new Dispositivo(3, "Dispositivo", 100, 100); // ¿esto debería poder ocurrir?
console.log(otro);
