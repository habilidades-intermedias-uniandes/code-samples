import { Profesor } from './profesor.js';
import { Curso } from './curso.js';
const profeDavid = new Profesor('David', 'Matemáticas', '1903456789');
const precalculo = new Curso('Precálculo', 'MAT-101', 50, profeDavid);
profeDavid.agregarCurso(precalculo);
const calculoDiferencial = new Curso('Cálculo Diferencial', 'MAT-102', 30, profeDavid);
profeDavid.agregarCurso(calculoDiferencial);
console.log(profeDavid);
