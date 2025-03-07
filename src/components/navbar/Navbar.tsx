import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import Modal from "./Modal";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function logout() {
    handleLogout();
    alert('Usuario desconectado com sucesso!');
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

            {usuario.token === '' ? (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to='/sobre' className="text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
                  <Link to='/login' className="text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Acesse ou Cadastre-se</Link>
                </div>
              </div>



            ) : (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                  {usuario.tipo == 'instrutor' && (
                    <>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-red-500 text-[#F5F5F5] hover:text-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                      >Calcule seu IMC</button>

                      <Link to='/treinos' className="text-[#F5F5F5] hover:text-[#FF0000] px-3 py-2 rounded-md text-sm font-semibold">Treinos</Link>
                      <Link to='/exercicios' className="text-[#F5F5F5] hover:text-[#FF0000] px-3 py-2 rounded-md text-sm font-semibold">Exercícios</Link>
                      <Link to='/sobre' className="text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-semibold">Sobre</Link>
                      <Link to='/home' onClick={logout} className='text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-semibold'>Sair</Link>
                    </>
                  )}

                  {usuario.tipo == 'aluno' && ( 
                    <>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-red-500 text-[#F5F5F5] hover:text-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                      >Calcule seu IMC</button>

                      <Link to='/treinos' className="text-[#F5F5F5] hover:text-[#FF0000] px-3 py-2 rounded-md text-sm font-semibold">Treinos</Link>
                      <Link to='/sobre' className="text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-semibold">Sobre</Link>
                      <Link to='/home' onClick={logout} className='text-[#F5F5F5] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-semibold'>Sair</Link>
                    </>
                  )}
                </div>
              </div>
            )}

          </div>
        </div >
      </nav >

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Navbar;
