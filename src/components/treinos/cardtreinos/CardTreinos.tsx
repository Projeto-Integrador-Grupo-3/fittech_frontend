 import { Link } from 'react-router-dom';
import Treino from "../../../models/Treino";

 interface CardTreinoProps {
     treino: Treino;
 }

function CardTreino({ treino }: CardTreinoProps) {

     return (
        <div className='border border-gray-300 rounded-2xl shadow-lg overflow-hidden bg-slate-950 max-w-sm w-full'>
            <header className='py-3 px-6 bg-gradient-to-r from-red-800 to-slate-950 text-white font-bold text-2xl text-center'>
                { treino.treino}
            </header>
            
            {/* Descrição do treino */}
            <p className='p-6 text-lg text-white bg-slate-950'>
                { treino.descricao} 
            </p>

            {/* Botões de ação */}
            <div className="flex justify-between p-4">
                 <Link to={`/editartreino/${treino.id}`}  
                    className='w-full mr-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg text-center transition-colors'> 
                    <button className="w-full mr-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg text-center transition-colors">Editar</button>
                 </Link> 

                {/* Deletar Treino */}
                 <Link to={`/treino/${treino.id}`} 
                    className='w-full ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg text-center transition-colors'> 
                    <button className="w-full ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg text-center transition-colors">Deletar</button>
                 </Link> 
            </div>
        </div>
    );
}

 export default CardTreino;



