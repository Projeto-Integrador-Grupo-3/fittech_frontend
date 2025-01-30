
import { ChangeEvent, useContext, useEffect, useState } from "react";
//import { useNavigate, useParams } from "react-router-dom";
//import { AuthContext } from "../../../context/AuthContext";
//import Treino from "../../../models/Treino";
//import { atualizar, buscar, cadastrar } from "../../../services/Service";
function FormTreinos() {
/*
    const navigate = useNavigate();

    const [treino, setTreino] = useState<Treino>({} as Treino)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    //const { usuario, handleLogout } = useContext(AuthContext)
    //const token = usuario.token

    const { id } = useParams<{ id: string }>();

    /*async function buscarPorId(id: string) {
        try {
            await buscar(`/treino/${id}`, setTreino, {
                headers: { Authorization: token }
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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTreino({
            ...treino,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/treino")
    }

    async function gerarNovoTreino(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/treino`, treino, setTreino, {
                    headers: { 'Authorization': token }
                })
                alert('O Treino foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o treino.')
                }

            }
        } else {
            try {
                await cadastrar(`/treino`, treino, setTreino, {
                    headers: { 'Authorization': token }
                })
                alert('O Treino foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o treino.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }*/
    return (
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')` }}>
        {/* Overlay to dim the image */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center mx-auto p-10 rounded-lg shadow-lg bg-black bg-opacity-60 text-white">
          <h1 className="text-4xl text-center my-8 font-bold text-red-500">
            Editar Treino
          </h1>
  
          <form className="w-full md:w-1/2 flex flex-col gap-6" >
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="treino" className="text-lg font-semibold text-gray-300" >Treino</label>
                <input
                  type="text"
                  placeholder="Descreva aqui seu treino"
                  name="treino"
                  className="w-full border-2 border-red-500 bg-gray-800 text-white rounded p-3 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />
              </div>
  
              <div>
                <label htmlFor="descricao" className="text-lg font-semibold text-gray-300" >Descrição do Treino</label>
                <input
                  type="text"
                  placeholder="Descreva aqui a descrição do treino"
                  name="descricao"
                  className="w-full border-2 border-red-500 bg-gray-800 text-white rounded p-3 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                  
                />
              </div>
            </div>
  
            <button
              className="rounded-lg bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-3 mt-6 mx-auto w-1/2 transition duration-300 transform hover:scale-105"
              type="submit">
              Atualizar
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default FormTreinos;
  