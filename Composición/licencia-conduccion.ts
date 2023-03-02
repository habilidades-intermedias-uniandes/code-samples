import { Persona } from './persona.js';

export class LicenciaConduccion {
    numero: number;

    fechaExpedicion: Date;

    tipo: string;

    persona: Persona;

    constructor(numero: number, fechaExpedicion: Date, tipo: string, persona: Persona) {
        this.numero = numero;
        this.fechaExpedicion = fechaExpedicion;
        this.tipo = tipo;
        this.persona = persona;        
    }
}
