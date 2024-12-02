import {Cuestionario} from './cuestionario';

export interface Pregunta {
    idPregunta?: number;
    preguntaDescription: string;
    cuestionario?: Cuestionario;
}
