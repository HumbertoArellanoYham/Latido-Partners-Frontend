import {Pregunta} from './pregunta';
import {Resultado} from './resultado';

export interface Cuestionario {
    idCuestionario?: number;
    nombre: string;
    activo: boolean;
    preguntasList: Pregunta[];
    resultado?: Resultado;
}
