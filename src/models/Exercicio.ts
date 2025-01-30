import Treino from "./Treino";
import Usuario from "./Usuario";

export default interface Exercicio {
    id: number;
    nome: string;
    grupomuscular: string;
    repeticoes: number;
    series: number;
    usuario?: Usuario | null;
    treino?: Treino | null;
}