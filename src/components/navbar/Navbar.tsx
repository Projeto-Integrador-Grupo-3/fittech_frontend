import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import Modal from "./Modal";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function logout() {
    handleLogout();
    alert('Usuário desconectado com sucesso!');
    navigate('/');
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-transparent text-[#F5F5F5] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to='/home' className="text-2xl font-impact text-[#F5F5F5] flex items-center">
                <img src="https://ik.imagekit.io/machadofatima/Fitness/dumbbell.png?updatedAt=1738237099134" alt="Ícone Fitness" className="h-8 mr-2" />
                FIT TECH
              </Link>
            </div>

            {/* Botão de hambúrguer para telas pequenas */}
            <div className="block lg:hidden absolute right-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-[#F5F5F5] focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Menu de navegação */}
            <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block lg:flex-row ml-auto `}>
              <div className="flex flex-col lg:flex-row ml-10 lg:space-x-4">
                {/* Menu para quando não está logado */}
                {usuario.token === '' ? (
                  <div className="ml-auto flex space-x-4 lg:ml-0">
                    <Link to='/sobre' className="text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
                    <Link to='/login' className="text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Acesse ou Cadastre-se</Link>
                  </div>
                ) : (
                  <>
                    {/* Menu para instrutores */}
                    {usuario.tipo === 'instrutor' && (
                      <>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="bg-red-500 text-[#F5F5F5] hover:text-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Calcule seu IMC
                        </button>

                        <Link to='/atribuirtreino' className="text-[#F5F5F5] hover:text-[#FF0000] px-3 py-2 rounded-md text-sm font-semibold">Atribuir Treino</Link>
                        <Link to='/treinos' className="text-[#F5F5F5] hover:text-[#FF0000] px-3 py-2 rounded-md text-sm font-semibold">Treinos</Link>
                        <Link to='/exercicios' className="text-[#F5F5F5] hover:text-[#FF0000] px-3 py-2 rounded-md text-sm font-semibold">Exercícios</Link>
                        <Link to='/sobre' className="text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-semibold">Sobre</Link>
                        <Link to='/home' onClick={logout} className='text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-semibold'>Sair</Link>
                      </>
                    )}

                    {/* Menu para alunos */}
                    {usuario.tipo === 'aluno' && (
                      <>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="bg-red-500 text-[#F5F5F5] hover:text-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Calcule seu IMC
                        </button>

                        <Link to='/treinos' className="text-[#F5F5F5] hover:text-[#FF0000] px-3 py-2 rounded-md text-sm font-semibold">Treinos</Link>
                        <Link to='/sobre' className="text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-semibold">Sobre</Link>
                        <Link to='/home' onClick={logout} className='text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-semibold'>Sair</Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Navbar;
