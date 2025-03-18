import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Treino from "../../../models/Treino";
import { AuthContext } from "../../../context/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormTreinos() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [treinos, setTreinos] = useState<Treino[]>([]);
    const [treino, setTreino] = useState<Treino>({ id: undefined, treino: '', descricao: '', usuario: null });
    const { id } = useParams<{ id: undefined }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<any>(null);

    const token = usuario.token;

    async function buscarTreinoPorId(id: String) {
        try {
            await buscar(`/treino/${id}`, setTreino, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    async function buscarTreinos() {
        try {
            await buscar('/treino', setTreinos, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
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
        buscarUsuarios();
    }, [token, handleLogout]);

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarTreinos();
        if (id !== undefined) {
            buscarTreinoPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTreino({
            ...treino,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate('/treinos');
    }

    async function gerarNovoTreino(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const treinoComUsuario = { ...treino, usuario: usuarioSelecionado };

        try {
            if (id !== undefined) {
                await atualizar(`/treino`, treinoComUsuario, setTreino, {
                    headers: { Authorization: token },
                });
                alert('Treino atualizado com sucesso');
            } else {
                await cadastrar(`/treino`, treinoComUsuario, setTreino, {
                    headers: { Authorization: token },
                });
                alert('Treino cadastrado com sucesso');
            }
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                alert('Erro ao processar o treino');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')` }}>
            <div className="flex items-center justify-center min-h-screen text-white">
                <div className="bg-gray-900 text-white w-96 rounded-lg shadow-lg p-6 my-8 border border-red-600">
                    <h1 className="text-2xl font-bold text-center mb-4">
                        {id === undefined ? 'Cadastrar Treino' : 'Editar Treino'}
                    </h1>
                    <form className="flex flex-col gap-4" onSubmit={gerarNovoTreino}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="treino" className="text-sm font-medium">Treino</label>
                            <input
                                type="text"
                                placeholder="Nome do treino"
                                name="treino"
                                className="border border-red-500 rounded p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={treino.treino}
                                onChange={atualizarEstado}
                            />
                            <label htmlFor="descricao" className="text-sm font-medium">Descrição do Treino</label>
                            <input
                                type="text"
                                placeholder="Descrição"
                                name="descricao"
                                className="border border-red-500 rounded p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={treino.descricao}
                                onChange={atualizarEstado}
                            />
                            
                        </div>
                        <div className="flex justify-between gap-2">
                        <button
                                className="rounded bg-gray-500 text-white py-2 hover:bg-gray-600 transition flex justify-center w-full"
                                type="button"
                                onClick={retornar}
                            >
                                Cancelar
                            </button>
                            <button
                                className="rounded bg-red-500 text-white py-2 hover:bg-red-600 transition flex justify-center w-full"
                                type="submit"
                            >
                                {isLoading ? (
                                    <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                                ) : (
                                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormTreinos;