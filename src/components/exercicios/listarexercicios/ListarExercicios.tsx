import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { buscar, cadastrar } from "../../../service/Service";
import Exercicio from "../../../models/Exercicio";
import CardExercicio from "../cardexercicios/CardExercicios";

function ListarExercicios() {
  const navigate = useNavigate();

  const [exercicios, setExercicio] = useState<Exercicio[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarExercicios() {
    try {
      await buscar('/exercicio', setExercicio, {
        headers: { Authorization: token }



      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      }
    }
  }

  async function cadastrarExercicio() {
    try {
      await cadastrar('/exercicio', exercicios, setExercicio, {
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
    buscarExercicios();
  }, [exercicios.length]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')",
      }}
    >
      {/* Overlay para escurecer a imagem */}
      


      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white p-6">

        <div className="flex w-full justify-end mb-2 mt-6">
          {usuario.tipo !== "aluno" && (
            <button
              onClick={cadastrarExercicio}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors"
            >
              <Link to='/cadastrarexercicio'>Adicionar Exercicios</Link>
            </button>
          )}

          
        </div>

        <h1 className="text-4xl font-bold text-center text-red-500 mb-8">Exercícios</h1>

        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercicios.map((exercicios) => (
              <CardExercicio key={exercicios.id} exercicio={exercicios} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default ListarExercicios;
