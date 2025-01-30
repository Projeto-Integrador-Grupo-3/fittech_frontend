import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Treino from "../../../models/Treino";
import { AuthContext } from "../../../context/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import Exercicio from "../../../models/Exercicio";


function FormTreinos() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [treinos, setTreinos] = useState<Treino[]>([]);

    const [treino, setTreino] = useState<Treino>({ id: undefined, treino: '', descricao: '' });

    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);
    const { id } = useParams<{ id: undefined }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;


    // Função para buscar treino por ID
    async function buscarTreinoPorId(id: String) {
        try {
            await buscar(`/treino/${id}`, setTreino, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }


    // Função para buscar treinos
    async function buscarTreinos() {
        try {
            await buscar('/treino', setTreinos, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);


    // Carrega os dados do treino se o id estiver presente
    useEffect(() => {
        buscarTreinos();
        if (id !== undefined) {
            buscarTreinoPorId(id); // Chama a função para buscar treino específico
        }
    }, [id]);


    // Atualiza o estado do treino
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTreino({
            ...treino,
            [e.target.name]: e.target.value,
        });
    }


    function retornar() {
        navigate('/treinos');
    }


    // Função para gerar ou atualizar o treino
    async function gerarNovoTreino(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);


        if (id !== undefined) {
            try {
                await atualizar(`/treino`, treino, setTreino, {
                    headers: { Authorization: token },
                });
                alert('Treino atualizado com sucesso');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o treino');
                }
            }
        } else {
            try {
                await cadastrar(`/treino`, treino, setTreino, {
                    headers: { Authorization: token },
                });
                alert('Treino cadastrado com sucesso');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o treino');
                }
            }
        }


        setIsLoading(false);
        retornar();
    }


    // Verificação se os dados do treino estão carregados
    const carregandoTreino = treino.id === 0 && id !== undefined;


    return (
        <div className="container flex flex-col items-center justify-center mx-auto bg-red-100 m-3 p-10 rounded-lg">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Treino' : 'Editar Treino'}
            </h1>


            {/* Verifica se está carregando o treino apenas quando há um ID */}
            {carregandoTreino ? (
                <div className="text-center">Carregando treino...</div> // Mensagem de carregamento
            ) : (
                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTreino}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="treino">Treino</label>
                        <input
                            type="text"
                            placeholder="Descreva aqui seu treino"
                            name="treino"
                            className="border-2 border-slate-700 rounded p-2"
                            value={treino.treino}
                            onChange={atualizarEstado}
                        />
                        <label htmlFor="descricao">Descrição do Treino</label>
                        <input
                            type="text"
                            placeholder="Descreva aqui seu treino"
                            name="descricao"
                            className="border-2 border-slate-700 rounded p-2"
                            value={treino.descricao}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <button
                        className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                        type="submit"
                    >
                        {isLoading ? (
                            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                        ) : (
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}


export default FormTreinos;
