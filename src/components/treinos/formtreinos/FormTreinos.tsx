import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Treino from "../../../models/Treino";
import { AuthContext } from "../../../context/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import Exercicio from "../../../models/Exercicio";

function FormTreinos() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [treinos, setTreinos] = useState<Treino[]>([]);
    const [treino, setTreino] = useState<Treino>({ id: undefined, treino: '', descricao: '' });
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);
    const { id } = useParams<{ id: undefined }>();
    const { usuario, handleLogout } = useContext(AuthContext);
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

        if (id !== undefined) {
            try {
                await atualizar(`/treino`, treino, setTreino, {
                    headers: { Authorization: token },
                });
                alert('Treino atualizado com sucesso');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o treino');
                }
            }
        } else {
            try {
                await cadastrar(`/treino`, treino, setTreino, {
                    headers: { Authorization: token },
                });
                alert('Treino cadastrado com sucesso');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o treino');
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (

        <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')` }}>
            {/* Overlay to dim the image */}
            

            <div className="flex items-center justify-center min-h-screen text-white" >
                <div className="bg-gray-100 text-black w-96 rounded-lg shadow-lg p-6 my-8">
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
                                className="border border-gray-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={treino.treino}
                                onChange={atualizarEstado}
                            />
                            <label htmlFor="descricao" className="text-sm font-medium">Descrição do Treino</label>
                            <input
                                type="text"
                                placeholder="Descrição"
                                name="descricao"
                                className="border border-gray-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={treino.descricao}
                                onChange={atualizarEstado}
                            />
                        </div>
                        <button
                            className="rounded bg-red-600 text-white py-2 hover:bg-red-700 transition flex justify-center"
                            type="submit"
                        >
                            {isLoading ? (
                                <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                            ) : (
                                <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormTreinos;