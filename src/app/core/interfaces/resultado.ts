import {Cuestionario} from './cuestionario';
import {Partners} from './partners';

export interface Resultado {
    idRespuesta?: number;
    partner?: Partners;
    cuestionario?: Cuestionario;
    calificacion: number;
    fecha: Date;
}
