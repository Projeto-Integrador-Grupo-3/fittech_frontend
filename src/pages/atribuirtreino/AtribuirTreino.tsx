import { useContext, useEffect, useState } from "react";
import Treino from "../../models/Treino";
import { buscar, atualizar, atualizarTreino } from "../../service/Service";
import { AuthContext } from "../../context/AuthContext";

interface Usuario {
    id: number;
    nome: string;
    treino?: number[];
}

function AtribuirTreino() {
    const [treinos, setTreinos] = useState<Treino[]>([]);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario | null>(null);
    const [treinoSelecionado, setTreinoSelecionado] = useState<Treino | null>(null);
    const [buscaNome, setBuscaNome] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        async function buscarTreinos() {
            try {
                await buscar("/treino", setTreinos, {
                    headers: { Authorization: token },
                });
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    handleLogout();
                }
            }
        }

        async function buscarUsuarios() {
            try {
                await buscar("/usuarios", setUsuarios, {
                    headers: { Authorization: token },
                });
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    handleLogout();
                }
            }
        }

        buscarTreinos();
        buscarUsuarios();
    }, [token, handleLogout]);

    const usuariosFiltrados = usuarios.filter((usuario) =>
        usuario.nome.toLowerCase().includes(buscaNome.toLowerCase())
    );
    async function atribuirTreino() {
        if (!usuarioSelecionado || !treinoSelecionado) {
            alert("Selecione um aluno e um treino!");
            return;
        }
    
        console.log("ID do usuário selecionado:", usuarioSelecionado.id);
        console.log("ID do treino selecionado:", treinoSelecionado.id);
    
        setIsLoading(true);
    
        try {
            const response = await atualizarTreino(
                Number(usuarioSelecionado.id), // Converte para número
                Number(treinoSelecionado.id),  // Converte para número
                {
                    headers: { Authorization: token },
                }
            );
    
            console.log("Resposta do backend:", response);
            if (response.status === 200) {
                alert("Treino atribuído com sucesso!");
            } else {
                alert("Erro ao atribuir treino.");
            }
        } catch (error) {
            console.error("Erro ao atribuir treino:", error);
            alert("Erro ao atribuir treino.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')` }}>
            <div className="relative flex flex-col justify-center pt-10">
                <div id='aluno'>
                    <section className="text-white">
                        <h1 className="text-center pt-5 font-bold text-2xl">
                            Atribuir Treino
                        </h1>
                        <p className="ml-16 text-xl">Primeiro, busque um aluno pelo nome:</p>
                    </section>
                    <div>
                        <form>
                            <label htmlFor="buscaNome" className="text-white">Buscar aluno: </label>
                            <input 
                                type="text" 
                                id="buscaNome" 
                                placeholder="Digite o nome do aluno"
                                className="w-3/5 border-2 border-red-500 rounded p-3 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                value={buscaNome}
                                onChange={(e) => setBuscaNome(e.target.value)}
                            />
                            <label htmlFor="aluno" className="text-white mt-4">Aluno: </label>
                            <select
                                name="aluno"
                                className="w-3/5 border-2 border-red-500 rounded p-3 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                value={usuarioSelecionado?.id || ""}
                                onChange={(e) => setUsuarioSelecionado(usuarios.find(user => user.id === Number(e.target.value)) ?? null)}
                            >
                                <option value="">Selecione um aluno</option>
                                {usuariosFiltrados.map((user) => (
                                    <option key={user.id} value={user.id}>{user.nome}</option>
                                ))}
                            </select>

                            <label htmlFor="treino" className="text-white ml-4">Treino: </label>
                            <select
                                name="treino"
                                className="w-3/5 border-2 border-red-500 rounded p-3 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                value={treinoSelecionado?.id || ""}
                                onChange={(e) => setTreinoSelecionado(treinos.find(treino => treino.id === Number(e.target.value)) ?? null)}
                            >
                                <option value="">Selecione um treino</option>
                                {treinos.map((treino) => (
                                    <option key={treino.id} value={treino.id}>{treino.treino}</option>
                                ))}
                            </select>
                        </form>
                        <button
                            className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700"
                            onClick={atribuirTreino}
                            disabled={isLoading}
                        >
                            {isLoading ? "Atualizando..." : "Atualizar Treino"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AtribuirTreino;