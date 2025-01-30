import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { buscar, deletar } from "../../../service/Service"
import Treino from "../../../models/Treino"





function DeletarTreino() {


    const navigate = useNavigate()


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [treino, setTreino] = useState<Treino>({} as Treino)


    const { id } = useParams<{ id: string }>()


     const { usuario, handleLogout } = useContext(AuthContext);
        const token = usuario.token;


    async function buscarPorId(id: string) {
        try {
            await buscar(`/treino/${id}`, setTreino, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    async function deletarTreino() {
        setIsLoading(true)


        try {
            await deletar(`/treino/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Treino apagado com sucesso')


        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                alert('Erro ao deletar treino')

            }
        }


        setIsLoading(false)
        retornar()
    }


    function retornar() {
        navigate('/treinos')
    }

    return (
        <div className="flex items-center justify-center fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
            <div className="w-full max-w-md bg-gradient-to-r from-black to-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-2xl text-center font-semibold text-white mb-4">Deletar Treino</h1>

                <p className="text-sm text-center text-white opacity-80 mb-5">
                    Você tem certeza de que deseja apagar o treino? Esta ação não pode ser desfeita.
                </p>

                <div className="border-l-4 border-yellow-500 pl-4 py-3 mb-6 rounded-lg bg-gray-700">
                    <p className="text-base font-semibold text-white mb-1">{treino.treino}</p>
                    <p className="text-gray-300 text-sm">{treino.descricao}</p>
                </div>

                <div className="flex justify-between space-x-3">
                    <button
                        className="py-2 px-5 text-sm font-semibold text-gray-600 bg-gray-300 hover:bg-gray-400 rounded-lg transition duration-300 w-full"
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className="py-2 px-5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-300 w-full"
                        onClick={deletarTreino}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );

}

export default DeletarTreino;
