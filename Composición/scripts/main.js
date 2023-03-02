import { Persona } from './persona.js';
import { LicenciaConduccion } from './licencia-conduccion.js';
var david = new Persona('123456789', 'David', new Date('1990-01-01'));
var michael = new Persona('987654321', 'Michael', new Date('1990-01-01'));
var licencia1David = new LicenciaConduccion(1, new Date('2018-01-01'), 'A1', david);
var licencia2David = new LicenciaConduccion(2, new Date('2020-03-01'), 'A1', david);
david.licencias.push(licencia1David);
david.licencias.push(licencia2David);
console.log(david);
