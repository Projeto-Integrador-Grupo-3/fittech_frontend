import { ThreeDots } from "react-loader-spinner";
import CardTreinos from "../cardtreinos/CardTreinos";
import { useContext, useEffect, useState } from "react";
import Treino from "../../../models/Treino";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { buscar } from "../../../service/Service";


function ListarTreinos() {
    const navigate = useNavigate();
    const [treinos, setTreinos] = useState<Treino[]>([]);


    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;


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


    useEffect(() => {
        buscarTreinos();
    }, [token]);


    const treinosFiltrados = usuario.tipo === "aluno"
        ? treinos.filter(treino => treino.usuario?.id === usuario.id)
        : treinos;


    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{
            backgroundImage:
                "url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')",
        }}>
            {treinosFiltrados.length === 0 && (
                <div className=" inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperClass="three-dots-wrapper"
                    />
                </div>
            )}


            <div className="flex justify-around items-center w-full px-8 pt-24">
                <h1 className="text-3xl font-bold text-white">Lista de Treinos</h1>


                {usuario.tipo !== "aluno" && (
                    <Link to='/cadastrartreino'>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
                        >
                            Cadastrar Treino
                        </button>
                    </Link>
                )}
            </div>


            <div className="container flex flex-wrap justify-center items-center gap-8 my-6">
                {treinosFiltrados.map((treino) => (
                    <CardTreinos key={treino.id} treino={treino} />
                ))}
            </div>
        </div>
    );
}


export default ListarTreinos;
