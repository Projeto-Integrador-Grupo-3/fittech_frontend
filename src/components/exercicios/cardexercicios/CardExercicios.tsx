import { Link, useNavigate } from 'react-router-dom';
import Exercicio from '../../../models/Exercicio';
import { AuthContext } from '../../../context/AuthContext';
import { useContext, useEffect } from 'react';

interface CardExercicioProps {
    exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExercicioProps) {

    const navigate = useNavigate()
    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
            if (token === '') {
                alert('Você precisa estar logado!');
                navigate('/');
            }
        }, [token]);

    return (
        <div className='flex flex-col items-start justify-between gap-4 rounded-lg p-4 bg-gray-800 w-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg'>
            {/* Cabeçalho */}
            <header className='font-semibold text-xl text-white'>
                {exercicio.nome || 'Treino não disponível'}
            </header>

            {/* Descrição do treino */}
            <div className="text-gray-400 text-sm space-y-2">
                <p>📋 <span className="font-semibold">Músculos Trabalhados:</span> {exercicio.grupoMuscular}</p>
                <p>🔢 <span className="font-semibold">Séries:</span> {exercicio.series}</p>
                <p>🔁 <span className="font-semibold">Repetições:</span> {exercicio.repeticoes}</p>
            </div>

            {/* Botões de ação */}
            <div className='flex justify-start mt-4'>
                {usuario.tipo !== "aluno" && (
                    <Link to={`/deletarexercicio/${exercicio.id}`}>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-md text-sm">
                            Deletar
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default CardExercicio;
