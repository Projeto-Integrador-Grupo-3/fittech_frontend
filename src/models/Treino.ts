import Exercicio from "./Exercicio";

export default interface Treino {
    id: any;
    treino: string;
    descricao: string;
    exercicio?: Exercicio | null;
}