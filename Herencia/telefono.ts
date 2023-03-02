import { Dispositivo } from "./dispositivo.js";

export class Telefono extends Dispositivo {
    imei: string;

    os: "Android" | "iOS";

    constructor(idTienda: number, nombre: string, anchoPantalla: number, altoPantalla: number, 
                imei: string, os: "Android" | "iOS") {
        super(idTienda, nombre, anchoPantalla, altoPantalla);
        this.imei = imei;
        this.os = os;
    }
}

