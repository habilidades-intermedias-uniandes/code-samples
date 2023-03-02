import { Profesor } from './profesor.js';

export class Curso {
    nombre: string;

    codigo: string;

    cupos: number;

    profesor: Profesor;

    constructor(nombre: string, codigo: string, cupos: number, profesor: Profesor) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.cupos = cupos;
        this.profesor = profesor;
    }
}
