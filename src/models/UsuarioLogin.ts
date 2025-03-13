import Treino from "./Treino";

export default interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    tipo: string;
    peso: number;
    altura:number;
    imc?: number;
    treino?: Treino ;
    token: string;
}