import { Link } from 'react-router-dom';

import Exercicio from '../../../models/Exercicio';

 interface CardExercicioProps {
     exercicio: Exercicio;
 }

function CardExercicio({ exercicio }: CardExercicioProps) {

     return (
        <div className='flex flex-col items-start justify-center gap-1 rounded-lg p-2 bg-black w-3/4'>

            <header className='font-semibold text-lg text-white'>
                { exercicio.nome || 'treino não disponivel'} 
            </header>
            
            {/* Descrição do treino */}
            <p className='text-gray-400 text-sm'>
               Musculos Trabalhados: { exercicio.grupoMuscular} 
            </p>

            <p className='text-gray-400 text-sm'>
                Series: { exercicio.series} 
            </p>

            <p className='text-gray-400 text-sm'>
                Repetições: { exercicio.repeticoes} 
            </p>

            {/* Botões de ação */}
            <div className='flex  justify-center'>
                 {/* <Link to={`/editartreino/${treino.id}`}> 
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-lg transition-colors shadow-md text-sm">Editar</button>
                 </Link>  */}

                {/* Deletar Treino */}
                 <Link to={`/deletarexercicio/${exercicio.id}`}> 
                    <button className="bg-red-800 hover:bg-red-900 text-white  font-semibold py-1 px-3 rounded-lg transition-colors mt-2 text-sm">Deletar</button>
                 </Link> 
            </div>
        </div>
    );
}

 export default CardExercicio;



