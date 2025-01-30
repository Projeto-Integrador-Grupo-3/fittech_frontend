import { ThreeDots } from "react-loader-spinner";
import CardTreinos from "../cardtreinos/CardTreinos";
import { useContext, useEffect, useState } from "react";
import Treino from "../../../models/Treino";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { buscar, cadastrar } from "../../../service/Service";

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

    async function cadastrarTreinos() {
        try {
            await cadastrar('/treino', treinos, setTreinos, {
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
    }, [treinos.length]);

    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{
            backgroundImage:
              "url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')",
          }}> {/* Definindo o fundo da página */}
            {treinos.length === 0 && (
                <ThreeDots
                    height="200"
                    width="200"
                    radius="9"
                    color="red"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass="three-dots-wrapper mx-auto"
                />
            )}
                
            <div className="flex justify-around items-center w-5/6 mx-auto pt-10">
                <h1 className="text-2xl font-bold mt-40 text-white">Lista de Treinos</h1>
                <button
                    onClick={cadastrarTreinos}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors"
                >
                    <Link to='/cadastrartreino'>Cadastrar Treino</Link>
                </button>
            </div>

            <div className="flex justify-center items-center w-full my-4">
                <div className="container flex flex-col gap-4 items-center">
                    {/* Exibe os cards de treino */}
                    {treinos.map((treino) => (
                        <CardTreinos key={treino.id} treino={treino} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListarTreinos;