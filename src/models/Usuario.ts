import Exercicio from "./Exercicio";

export default interface Usuario {
    id: any;
    nome: string;
    cpf: string;
    usuario: string;
    senha: string;
    tipo: string;
    peso: number;
    altura: number;
    imc?: number;
    exercicio?: Exercicio ;
}