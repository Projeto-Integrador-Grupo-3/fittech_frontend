import Exercicio from "./Exercicio";
import Usuario from "./Usuario";

export default interface Treino {
    id: any;
    treino: string;
    descricao: string;
    usuario?: Usuario | null;
    exercicio?: Exercicio | null;
}