import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Treino from '../../../models/Treino';
import { AuthContext } from '../../../context/AuthContext';
import { buscar } from '../../../service/Service';
import CardExercicio from '../../exercicios/cardexercicios/CardExercicios';

function ExibirTreinos() {
    const navigate = useNavigate();
    const [treino, setTreino] = useState<Treino>({} as Treino);
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

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
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate('/treinos');
    }

    return (
        <div className="flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="w-full bg-gradient-to-r from-black to-gray-800 shadow-lg p-6">
                <h1 className="text-2xl text-center font-semibold text-white mb-4">Exibir Treino</h1>

                <div className="pl-4 py-3 mb-6 rounded-lg bg-gray-700">
                    <p className="text-base font-semibold text-white mb-1">Treino: {treino.treino}</p>
                    <p className="text-gray-300 text-sm">Descrição: {treino.descricao}</p>
                </div>

                {/* Lista de Exercícios */}
                <div className="flex flex-row  gap-2 w-4/4">
                    {treino.exercicios && treino.exercicios.length > 0 ? (
                        treino.exercicios.map((exercicio) => (
                            <CardExercicio key={exercicio.id} exercicio={exercicio} />
                        ))
                    ) : (
                        <p className="text-gray-400 text-center">Nenhum exercício cadastrado neste treino.</p>
                    )}
                </div>

                <div className="flex justify-between space-x-3 mt-4">
                    <button
                        className="py-2 px-5 text-sm font-semibold text-gray-600 bg-gray-300 hover:bg-gray-400 rounded-lg transition duration-300 w-full"
                        onClick={retornar}>
                        Concluir
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ExibirTreinos;
