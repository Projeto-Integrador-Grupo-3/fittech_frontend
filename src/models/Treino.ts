import Exercicio from "./Exercicio";
import Usuario from "./Usuario";

export default interface Treino {
    usuario: any;
    id: any;
    treino: string;
    descricao: string;
    exercicios?: Exercicio[] | null;

}