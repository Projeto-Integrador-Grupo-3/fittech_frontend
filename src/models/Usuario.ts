import Exercicio from "./Exercicio";

export default interface Usuario {
    id: number;
    nome: string;
    cpf: string;
    usuario: string;
    senha: string;
    tipo: string;
    peso: number;
    altura: number;
    imc: number;
    exercicio?: Exercicio | null;
}