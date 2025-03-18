import  { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Treino from '../../../models/Treino';
import { AuthContext } from '../../../context/AuthContext';
import { buscar } from '../../../service/Service';
import CardExercicio from '../../exercicios/cardexercicios/CardExercicios';

function ExibirTreinos() {
    const navigate = useNavigate();
    const [treino, setTreino] = useState<Treino | null>(null);
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario?.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/treino/${id}`, setTreino, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (!token) {
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate('/treinos');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black px-4 py-6">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 border-t-4 border-red-600">
                {/* Saudação */}
                <h1 className="text-2xl font-semibold text-center text-red-600 mb-4">
                    Bem-vindo, {usuario?.nome}!
                </h1>

                {/* Detalhes do Treino */}
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Detalhes do Treino
                </h2>

                {treino ? (
                    <>
                        {/* Informações do Treino */}
                        <div className="p-4 mb-4 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white shadow-md">
                            <p className="text-lg font-semibold">{treino.treino}</p>
                            <p className="text-sm">{treino.descricao}</p>
                        </div>

                        {/* Exercícios do Treino */}
                        <h2 className="text-lg text-center font-semibold text-black mb-4">
                            Exercícios
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {treino.exercicios && treino.exercicios.length > 0 ? (
                                treino.exercicios.map((exercicio) => (
                                    <CardExercicio key={exercicio.id} exercicio={exercicio} />
                                ))
                            ) : (
                                <p className="text-gray-400 text-center col-span-2">
                                    Nenhum exercício cadastrado neste treino.
                                </p>
                            )}
                        </div>
                    </>
                ) : (
                    <p className="text-gray-400 text-center">Carregando treino...</p>
                )}

                {/* Botão de Concluir */}
                <div className="flex justify-center mt-4">
                    <button
                        className="py-2 px-6 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition duration-300"
                        onClick={retornar}>
                        Concluir
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ExibirTreinos;
