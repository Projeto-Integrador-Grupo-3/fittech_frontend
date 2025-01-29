import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Exercicio from "../../../models/Exercicio";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormExercicios() {

    const navigate = useNavigate();


    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    const { id } = useParams<{ id: string }>();


    async function buscarPorId(id: string) {
        try {
            await buscar(`/exercicio/${id}`, setExercicio, {
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
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value
        })
    }


    function retornar() {
        navigate("/exercicio")
    }


    async function gerarNovoExercicio(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)


        if (id !== undefined) {
            try {
                await atualizar(`/exercicio`, exercicio, setExercicio, {
                    headers: { 'Authorization': token }
                })
                alert('O Exercicio foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o exercicio.')
                }


            }
        } else {
            try {
                await cadastrar(`/exercicio`, exercicio, setExercicio, {
                    headers: { 'Authorization': token }
                })
                alert('O Exercicio foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o exercicio.')
                }


            }
        }


        setIsLoading(false)
        retornar()
    }

    return (
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')` }}>
        {/* Overlay to dim the image */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
 
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center mx-auto p-10 rounded-lg shadow-lg bg-black bg-opacity-60 text-white">
          <h1 className="text-4xl text-center my-8 font-bold text-red-500">
            Editar Exercicio
          </h1>
 
          <form className="w-full md:w-1/2 flex flex-col gap-6" >
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="exercicio" className="text-lg font-semibold text-gray-300" >Exercicio</label>
                <input
                  type="text"
                  placeholder="Descreva aqui seu exercicio"
                  name="exercicio"
                  className="w-full border-2 border-red-500 bg-gray-800 text-white rounded p-3 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />
              </div>
 
              <div>
                <label htmlFor="descricao" className="text-lg font-semibold text-gray-300" >Descrição do Exercicio</label>
                <input
                  type="text"
                  placeholder="Descreva aqui a descrição do exercicio"
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
 
  export default FormExercicios;
