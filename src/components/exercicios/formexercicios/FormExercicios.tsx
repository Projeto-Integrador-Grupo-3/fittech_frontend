import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Exercicio from "../../../models/Exercicio";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormExercicios() {

    const navigate = useNavigate();


    const [exercicio, setExercicio] = useState<Exercicio>({
        id: undefined,
        nome: '',
        grupoMuscular: '',
        series: 0,
        repeticoes: 0

    })
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
        navigate("/exercicios")
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
        <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')` }}>
            {/* Overlay to dim the image */}


            {/* Content */}
            <div className="relative flex flex-col items-center justify-center pt-10">
                <div className="bg-gray-100 w-96 rounded-lg shadow-lg p-6 my-8">


                    <h1 className="text-4xl text-center my-8 font-bold text-red-500">
                        Adicionar Exercicio
                    </h1>

                    <form className="w-full h-full mb-10  flex flex-col gap-6" onSubmit={gerarNovoExercicio}>

                        <div>
                            <label htmlFor="exercicio" className="text-lg font-semibold " >Exercício</label>
                            <input
                                type="text"
                                placeholder="Exercicio"
                                name="nome"
                                className="w-full border-2 border-red-500  rounded p-3  focus:ring-2 focus:ring-red-600 focus:outline-none"
                                value={exercicio.nome}
                                onChange={atualizarEstado}
                            />
                        </div>

                        <div>
                            <label htmlFor="musculo" className="text-lg font-semibold" >Músculos Trabalhados</label>
                            <input
                                type="text"
                                placeholder="Musculos Trabalhados"
                                name="grupoMuscular"
                                className="w-full border-2 border-red-500   rounded p-3  focus:ring-2 focus:ring-red-600 focus:outline-none"
                                value={exercicio.grupoMuscular}
                                onChange={atualizarEstado}
                            />
                        </div>

                        <div className="flex ">
                            <div className="flex flex-col  ">
                                <label htmlFor="series" className="text-lg font-semibold " >Series:</label>
                                <input
                                    type="number"
                                    placeholder="Quantidade de series"
                                    name="series"
                                    className="w-4/5 border-2 border-red-500   rounded p-3 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                    value={exercicio.series}
                                    onChange={atualizarEstado}
                                />
                            </div>

                            <div className="flex flex-col ">
                                <label htmlFor="repeticoes" className="text-lg font-semibold " >Repetições:</label>
                                <input
                                    type="number"
                                    placeholder="Quantidade de repeticoes"
                                    name="repeticoes"
                                    className="w-5/5 border-2 border-red-500   rounded p-3 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                    value={exercicio.repeticoes}
                                    onChange={atualizarEstado}
                                />
                            </div>

                        </div>
                        <div className="flex">
                        <button
                            className="rounded-lg bg-red-500 hover:bg-red-600 text-white  text-lg font-semibold py-3  mt-6 mx-auto w-1/2 transition duration-300 transform hover:scale-105"
                            type="submit">
                            Adicionar
                        </button>

                        <button className="flex rounded-lg justify-center bg-gray-400 hover:bg-gray-300 text-red-700  text-lg font-semibold py-3  mt-6 mx-auto w-2/5 transition duration-300 transform hover:scale-105">
                            <Link to='/exercicios'>Cancelar</Link>
                            
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormExercicios;
