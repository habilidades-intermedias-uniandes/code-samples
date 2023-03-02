export class Dispositivo {
    idTienda: number;

    nombre: string;

    anchoPantalla: number;

    altoPantalla: number;

    constructor(idTienda: number, nombre: string, anchoPantalla: number, altoPantalla: number) {
        this.idTienda = idTienda;
        this.nombre = nombre;
        this.anchoPantalla = anchoPantalla;
        this.altoPantalla = altoPantalla;
    }
}
