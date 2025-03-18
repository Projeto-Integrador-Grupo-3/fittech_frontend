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
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-12 px-6">
      {/* Cabeçalho */}
      <h1 className="text-4xl font-bold text-white mt-11 border-b-4 border-red-600 pb-2">
        Exercícios
      </h1>

      {/* Botão de Adicionar */}
      <div className="w-full flex justify-end mb-8">
        {usuario.tipo !== "aluno" && (
          <Link 
            to='/cadastrarexercicio' 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-2 border-red-700"
          >
            Adicionar Exercícios
          </Link>
        )}
      </div>

      {/* Grid de Exercícios */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-900 rounded-xl shadow-lg border-2 border-red-600">
        {exercicios.map((exercicio) => (
          <CardExercicio key={exercicio.id} exercicio={exercicio} />
        ))}
      </div>
    </div>
  );
}

export default ListarExercicios;
