import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ReactNode, useContext, useState} from "react";
import Modal from "./Modal";

function Navbar() {
  const navigate = useNavigate();
 
  const { usuario, handleLogout } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function logout(){
      handleLogout();
      alert('Usuario desconectado com sucesso!');
      navigate('/');
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <nav className="fixed top-0 left-0 w-full bg-stone-950 bg-opacity-50 text-[#F5F5F5F] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-shrink-0 flex items-center">
              <Link to='/home' className="text-2xl font-impact text-[#ff0000] flex items-center">
                <img src="https://ik.imagekit.io/machadofatima/Fitness/dumbbell.png?updatedAt=1738237099134" alt="Ícone Fitness" className="h-8 mr-2" />
                FIT TECH
              </Link>
            </div>


            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to='/treinos' className="text-[#F5F5F5F] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Treinos</Link>
                <Link to='/exercicios' className="text-[#F5F5F5F] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Exercicios</Link>
                <button
                  onClick={() => setIsModalOpen(true)} // Abre o modal
                  className="text-[#F5F5F5F] hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calcule seu IMC
                </button>
                <Link to='/sobre' className="text-[#F5F5F5F] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
                {/* <Link to='#footer' className="text-[#F5F5F5F] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Contato</Link> */}
                <Link to='/home' onClick={logout} className='text-[#F5F5F5F] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium'>Sair</Link>
                
              </div>
            </div>
            <div className="md:hidden">
              <button
                className="text-[#F5F5F5F] hover:text-[#ff0000] focus:outline-none focus:text-[#ff0000]"
                type="button"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    component = (
      <nav className="fixed top-0 left-0 w-full bg-stone-950 bg-opacity-50 text-[#F5F5F5F] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <div className="flex-shrink-0 flex items-center">
              <Link to='/home' className="text-2xl font- font-bold text-[#ffffff] flex items-center">
                <img src="https://ik.imagekit.io/machadofatima/Fitness/dumbbell.png?updatedAt=1738237099134" alt="Ícone Fitness" className="h-8 mr-2" />
                FIT TECH
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to='/sobre' className="text-[#F5F5F5F] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
                {/* <Link to='#footer' className="text-[#F5F5F5F] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Contato</Link> */}
                <Link to='/login' className="text-[#F5F5F5F] hover:text-[#ff0000] px-3 py-2 rounded-md text-sm font-medium">Acesse ou Cadastre-se</Link>

              </div>
            </div>
            <div className="md:hidden">
              <button
                className="text-[#F5F5F5F] hover:text-[#ff0000] focus:outline-none focus:text-[#ff0000]"
                type="button"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>{component}
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </>
  );
}

export default Navbar;
