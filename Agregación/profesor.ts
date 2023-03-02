import { Curso } from './curso.js';

export class Profesor {
    nombre: string;

    departamento: string;

    idUniversidad: string;

    cursos: Curso[];

    constructor(nombre: string, departamento: string, idUniversidad: string) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.idUniversidad = idUniversidad;
        this.cursos = [];
    }

    agregarCurso(curso: Curso) {
        this.cursos.push(curso);
    }

    eliminarCurso(curso: Curso) {
        const index = this.cursos.indexOf(curso);
        if (index > -1) {
            this.cursos.splice(index, 1);
        }
    }
}
