import Treino from "./Treino";
import Usuario from "./Usuario";

export default interface Exercicio {
    id: any;
    nome: string;
    grupoMuscular: string;
    repeticoes: number;
    series: number;
    usuario?: Usuario | null;
    treino?: Treino | null;
}