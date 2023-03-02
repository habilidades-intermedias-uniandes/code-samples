import { Dispositivo } from "./dispositivo.js";
export class Computador extends Dispositivo {
    constructor(idTienda, nombre, anchoPantalla, altoPantalla, procesador, velocidad, nucleos, os) {
        super(idTienda, nombre, anchoPantalla, altoPantalla);
        this.procesador = procesador;
        this.velocidad = velocidad;
        this.nucleos = nucleos;
        this.os = os;
    }
}
