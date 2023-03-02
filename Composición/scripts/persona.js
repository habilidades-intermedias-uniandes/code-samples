var Persona = /** @class */ (function () {
    function Persona(cedula, nombre, fechaNacimiento) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.licencias = [];
    }
    return Persona;
}());
export { Persona };
