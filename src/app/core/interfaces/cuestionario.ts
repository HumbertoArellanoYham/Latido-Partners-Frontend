export interface Cuestionario {
    idCuestionario?: number;
    nombre: string;
    activo: boolean;
    preguntasList: Pregunta[];
    resultado?: Resultado;
}
