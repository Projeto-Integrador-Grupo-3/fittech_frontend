// // import { Link } from 'react-router-dom';
// // import Treino from "../../../models/Treino";

// // interface TreinoProps {
// //     treino: Treino;
// // }
// // { treino }: TreinoProps
// function CardTreino() {
//     return (
//         <div className='border border-gray-300 rounded-2xl shadow-lg overflow-hidden bg-slate-950 max-w-sm w-full'>
//             <header className='py-3 px-6 bg-gradient-to-r from-red-800 to-slate-950 text-white font-bold text-2xl text-center'>
//                 { "Treino"}
//             </header>
            
//             {/* Descrição do treino */}
//             <p className='p-6 text-lg text-white bg-slate-950'>
//                 { "Descrição do treino não disponível."} //treino.descricao
//             </p>

//             {/* Botões de ação */}
//             <div className="flex justify-between p-4">
//                 {/* <Link to={`/treino/${treino.id}`}  */}
//                     {/* className='w-full mr-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg text-center transition-colors'> */}
//                     <button className="w-full mr-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg text-center transition-colors">Editar</button>
//                 {/* </Link> */}

//                 {/* Deletar Treino */}
//                 {/* <Link to={`/treino/${treino.id}`}  */}
//                     {/* className='w-full ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg text-center transition-colors'> */}
//                     <button className="w-full ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg text-center transition-colors">Deletar</button>
//                 {/* </Link> */}
//             </div>
//         </div>
//     );
// }

// export default CardTreino;

function CardTreino() {
    return (
        <div className='border border-gray-200 rounded-lg shadow-2xl overflow-hidden bg-white w-full max-w-3xl mx-auto'>
            <header className='py-4 px-8 bg-gradient-to-r from-red-500 to-slate-900 bg- text-white font-semibold text-3xl text-center rounded-t-lg'>
                { "Treino"}
            </header>
            
            {/* Descrição do treino */}
            <p className='p-6 text-lg text-gray-700'>
                { "Descrição do treino não disponível."} {/* Aqui você pode usar treino.descricao */}
            </p>

            {/* Botões de ação */}
            <div className="flex justify-between p-6 border-t border-gray-200">
                <button className="w-full mr-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg text-center transition-colors shadow-lg">
                    Editar
                </button>

                <button className="w-full ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg text-center transition-colors shadow-lg">
                    Treino Finalizado
                </button>
            </div>
        </div>
    );
}

export default CardTreino;

