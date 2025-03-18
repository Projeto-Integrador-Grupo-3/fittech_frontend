import { useContext, useEffect, useState } from "react";
import Treino from "../../models/Treino";
import { buscar, atualizarTreino } from "../../service/Service";
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

        setIsLoading(true);

        try {
            const response = await atualizarTreino(
                Number(usuarioSelecionado.id),
                Number(treinoSelecionado.id),
                {
                    headers: { Authorization: token },
                }
            );

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
        <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')` }}>
            {/* Sobreposição escura */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="flex justify-center items-center min-h-screen px-4 relative z-10">
                <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full sm:w-96">
                    <section className="text-white text-center">
                        <h1 className="text-3xl font-bold mb-4">Atribuir Treino</h1>
                        <p className="text-lg mb-4">Primeiro, busque um aluno pelo nome:</p>
                    </section>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="buscaNome" className="block text-white mb-2">Buscar aluno:</label>
                            <input
                                type="text"
                                id="buscaNome"
                                placeholder="Digite o nome do aluno"
                                className="w-full px-4 py-2 border-2 border-red-500 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none"
                                value={buscaNome}
                                onChange={(e) => setBuscaNome(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="aluno" className="block text-white mb-2">Aluno:</label>
                            <select
                                name="aluno"
                                className="w-full px-4 py-2 border-2 border-red-500 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none"
                                value={usuarioSelecionado?.id || ""}
                                onChange={(e) => setUsuarioSelecionado(usuarios.find(user => user.id === Number(e.target.value)) ?? null)}
                            >
                                <option value="">Selecione um aluno</option>
                                {usuariosFiltrados.map((user) => (
                                    <option key={user.id} value={user.id}>{user.nome}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="treino" className="block text-white mb-2">Treino:</label>
                            <select
                                name="treino"
                                className="w-full px-4 py-2 border-2 border-red-500 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none"
                                value={treinoSelecionado?.id || ""}
                                onChange={(e) => setTreinoSelecionado(treinos.find(treino => treino.id === Number(e.target.value)) ?? null)}
                            >
                                <option value="">Selecione um treino</option>
                                {treinos.map((treino) => (
                                    <option key={treino.id} value={treino.id}>{treino.treino}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button
                                className="w-full py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-600"
                                onClick={atribuirTreino}
                                disabled={isLoading}
                            >
                                {isLoading ? "Atualizando..." : "Atualizar Treino"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AtribuirTreino;
