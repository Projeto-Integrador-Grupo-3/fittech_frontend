import Exercicio from "./Exercicio";

export default interface Treino {
    usuario: any;
    id: any;
    treino: string;
    descricao: string;
    exercicios?: Exercicio[] | null;
}