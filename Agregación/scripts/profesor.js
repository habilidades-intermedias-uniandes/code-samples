export class Profesor {
    constructor(nombre, departamento, idUniversidad) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.idUniversidad = idUniversidad;
        this.cursos = [];
    }
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
    eliminarCurso(curso) {
        const index = this.cursos.indexOf(curso);
        if (index > -1) {
            this.cursos.splice(index, 1);
        }
    }
}
