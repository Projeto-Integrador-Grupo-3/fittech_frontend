import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Exercicio from "../../../models/Exercicio";
import Treino from "../../../models/Treino";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormExercicios() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>();

    const [exercicio, setExercicio] = useState<Exercicio>({
        id: undefined,
        nome: '',
        grupoMuscular: '',
        series: 0,
        repeticoes: 0,
        treinoId: ''
    });
    
    const [treinos, setTreinos] = useState<Treino[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    async function buscarPorId(id: string) {
        try {
            await buscar(`/exercicio/${id}`, setExercicio, {
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
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
        buscarTreinos();
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovoExercicio(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/exercicio`, exercicio, setExercicio, {
                    headers: { 'Authorization': token }
                });
                alert('O Exercício foi atualizado com sucesso!');
            } else {
                await cadastrar(`/exercicio`, exercicio, setExercicio, {
                    headers: { 'Authorization': token }
                });
                alert('O Exercício foi cadastrado com sucesso!');
            }
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                alert('Erro ao processar o exercício.');
            }
        }
        setIsLoading(false);
        navigate("/exercicios");
    }

    return (
<div className="w-full h-full bg-black flex items-center justify-center py-12">
    <div className="bg-gray-900 w-[400px] sm:w-[450px] md:w-[500px] lg:w-[500px] rounded-lg shadow-lg p-6 border border-red-600">
        <h1 className="text-2xl text-center font-bold text-white mb-4">Adicionar Exercício</h1>
        <form className="w-full flex flex-col gap-3" onSubmit={gerarNovoExercicio}>
            <label className="text-white text-sm">Nome</label>
            <input type="text" name="nome" className="w-full border border-red-500 rounded p-2 bg-gray-800 text-white text-sm" value={exercicio.nome} onChange={atualizarEstado} />
            
            <label className="text-white text-sm">Grupo Muscular</label>
            <input type="text" name="grupoMuscular" className="w-full border border-red-500 rounded p-2 bg-gray-800 text-white text-sm" value={exercicio.grupoMuscular} onChange={atualizarEstado} />
            
            <label className="text-white text-sm">Séries</label>
            <input type="number" name="series" className="w-full border border-red-500 rounded p-2 bg-gray-800 text-white text-sm" value={exercicio.series} onChange={atualizarEstado} />
            
            <label className="text-white text-sm">Repetições</label>
            <input type="number" name="repeticoes" className="w-full border border-red-500 rounded p-2 bg-gray-800 text-white text-sm" value={exercicio.repeticoes} onChange={atualizarEstado} />
            
            <label className="text-white text-sm">Treino</label>
            <select name="treinoId" className="w-full border border-red-500 rounded p-2 bg-gray-800 text-white text-sm" value={exercicio.treinoId} onChange={atualizarEstado}>
                <option value="">Selecione</option>
                {treinos.map((treino) => (
                    <option key={treino.id} value={treino.id}>{treino.treino}</option>
                ))}
            </select>
            
            <button className="rounded bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 mt-3 transition duration-300 transform hover:scale-105" type="submit">Adicionar</button>
            <Link to='/exercicios' className="text-center rounded bg-gray-500 hover:bg-gray-600 text-white text-sm font-semibold py-2 mt-3 transition duration-300 transform hover:scale-105">Cancelar</Link>
        </form>
    </div>
</div>

    );
}

export default FormExercicios;