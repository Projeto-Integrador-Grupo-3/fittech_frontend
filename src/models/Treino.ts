import Exercicio from "./Exercicio";

export default interface Treino {
    id: number;
    treino: string;
    descricao: string;
    exercicio?: Exercicio | null;
}