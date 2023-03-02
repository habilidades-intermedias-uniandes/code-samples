import { Dispositivo } from "./dispositivo.js";
export class Telefono extends Dispositivo {
    constructor(idTienda, nombre, anchoPantalla, altoPantalla, imei, os) {
        super(idTienda, nombre, anchoPantalla, altoPantalla);
        this.imei = imei;
        this.os = os;
    }
}
