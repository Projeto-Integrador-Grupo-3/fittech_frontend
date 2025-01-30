 import { Link } from 'react-router-dom';
import Treino from "../../../models/Treino";

 interface CardTreinoProps {
     treino: Treino;
 }

function CardTreino({ treino }: CardTreinoProps) {

     return (
        <div className='flex grid-cols-3 items-center justify-between border border-gray-700 rounded-lg shadow-md p-2 bg-black w-4/6'>
            <header className='font-semibold text-lg text-white'>
                { treino.treino || 'treino não disponivel'} 
            </header>
            
            {/* Descrição do treino */}
            <p className='text-gray-400 text-sm'>
                { treino.descricao} 
            </p>

            {/* Botões de ação */}
            <div className='flex space-x-2'>
                 <Link to={`/editartreino/${treino.id}`}> 
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-lg transition-colors shadow-md text-sm">Editar</button>
                 </Link> 

                {/* Deletar Treino */}
                 <Link to={`/deletartreino/${treino.id}`}> 
                    <button className="bg-red-800 hover:bg-red-900 text-white font-semibold py-1 px-3 rounded-lg transition-colors shadow-md text-sm">Deletar</button>
                 </Link> 
            </div>
        </div>
    );
}

 export default CardTreino;



