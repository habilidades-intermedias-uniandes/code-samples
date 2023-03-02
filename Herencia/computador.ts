import { Dispositivo } from "./dispositivo.js";

export class Computador extends Dispositivo {
    procesador: string;

    velocidad: number;

    nucleos: number;

    os: "Windows" | "MacOS";

    constructor(idTienda: number, nombre: string, anchoPantalla: number, altoPantalla: number, 
                procesador: string, velocidad: number, nucleos: number, os: "Windows" | "MacOS") {
        super(idTienda, nombre, anchoPantalla, altoPantalla);
        this.procesador = procesador;
        this.velocidad = velocidad;
        this.nucleos = nucleos;
        this.os = os;
    }
}
