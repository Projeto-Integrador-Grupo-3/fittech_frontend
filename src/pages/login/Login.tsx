import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';


function Login() {

  const navigate = useNavigate();
 

  const { usuario, handleLogin, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
      {} as UsuarioLogin
  )

  useEffect(() => {
    if (usuario && usuario.token && usuario.token !== "") {
        navigate('/home');
    }
}, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setUsuarioLogin({
          ...usuarioLogin,
          [e.target.name]: e.target.value
      })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      handleLogin(usuarioLogin)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1c1c]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Login</h2>
        
        <form onSubmit={login}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="text"
              id="usuario"
              name='usuario'
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Digite seu usuario"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="senha" className="block text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              id="senha"
              name='senha'
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>
                        }
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Não tem uma conta? 
            <Link to='/cadastrar'><span className="text-red-600 hover:underline">Cadastre-se</span>
            </Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
