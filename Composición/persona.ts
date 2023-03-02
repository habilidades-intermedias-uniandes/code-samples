import { LicenciaConduccion } from './licencia-conduccion.js';

export class Persona {
    cedula: string;

    nombre: string;

    fechaNacimiento: Date;

    licencias: LicenciaConduccion[];

    constructor(cedula: string, nombre: string, fechaNacimiento: Date) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.licencias = [];
    }
}
