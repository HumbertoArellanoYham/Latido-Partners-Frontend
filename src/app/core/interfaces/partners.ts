import {Resultado} from './resultado';

export interface Partners {
    idPartners?: number;
    usuario: string;
    clave: string;
    nombre: string;
    turno: string;
    resultado?: Resultado;
}
