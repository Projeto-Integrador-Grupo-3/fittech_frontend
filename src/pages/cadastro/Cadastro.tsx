import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { cadastrarUsuario } from "../../service/Service"
import { RotatingLines } from "react-loader-spinner"
import Usuario from "../../models/Usuario"

function Cadastro() {

    const navigate = useNavigate()
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
  
    const[confirmaSenha, setConfirmaSenha] = useState<string>("")
  
    const [usuario, setUsuario] = useState<Usuario>({
      id: undefined,
      nome: '',
      cpf:'',
      usuario: '',
      senha: '',
      tipo: '',
      peso: 0,
      altura: 0
     
      
    })
    console.log(usuario)
    useEffect(() => {
      if (usuario.id !== undefined){
        retornar()
      }
    }, [usuario])
  
    function retornar(){
      navigate('/login')
    }
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
      })
  
    }
  
    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
      setConfirmaSenha(e.target.value)
    }
  
    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
      e.preventDefault()
  
      if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
  
        setIsLoading(true)
  
        try{
          await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
          alert('Usuário cadastrado com sucesso!')
        }catch(error){
          alert('Erro ao cadastrar o usuário!')
        }
      }else{
        alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
        setUsuario({...usuario, senha: ''})
        setConfirmaSenha('')
      }
  
      setIsLoading(false)
    }
  
    
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-[#1c1c1c]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-2/5 my-8">
        <h2 className="text-5xl font-bold text-center text-[#E63946] mb-6">Cadastrar</h2>

          <form className="mt-4" onSubmit={cadastrarNovoUsuario}>
            
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
               value = {usuario.nome}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">Email</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value = {usuario.usuario}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="cpf">Cpf</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="CPF"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value = {usuario.cpf}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="tipo">Tipo</label>
              <input
                type="text"
                id="tipo"
                name="tipo"
                placeholder="Instrutor ou Aluno"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value = {usuario.tipo}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="peso">Peso</label>
              <input
                type="number"
                id="peso"
                name="peso"
                placeholder="peso atual"
               className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value = {usuario.peso}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="atura">Altura</label>
              <input
                type="number"
                id="altura"
                name="altura"
                placeholder="Altura"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value = {usuario.altura}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value = {usuario.senha}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
           
            
            <div className="flex justify-around w-full gap-8">
              <button className='rounded text-white font-bold bg-[#E63946] 
                    hover:bg-[#e75b67] w-1/2 py-2' 
                    onClick={retornar}>
                Cancelar
              </button>
              <button 
                  type='submit'
                  className='rounded text-[#E63946] font-bold bg-[#3b3b3b]
                            hover:bg-[#555555] w-1/2 py-2
                             flex justify-center' 
                  >
                    {isLoading ? <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    /> :
                      <span>Cadastrar</span>
                    }
                
              </button>
            </div>
          </form>
        </div>
        </div>
      </>
    )
  }
  
  export default Cadastro