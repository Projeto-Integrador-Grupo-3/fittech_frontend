import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Treino from "../../../models/Treino";
import CardTreinos from "../cardtreinos/CardTreinos";
import { buscar } from "../../../service/Service";
import { ThreeDots } from "react-loader-spinner";



function ListarTreinos() {

     const navigate = useNavigate();

     const [treinos, setTreinos] = useState<Treino[]>([])

     const { usuario, handleLogout } = useContext(AuthContext)
     const token = usuario.token

     async function buscarTreinos() {
        try {
             await buscar('/treino', setTreinos, {
                 headers: { Authorization: token }
             })
         } catch (error: any) {
             if (error.toString().includes('403')) {
                 handleLogout()
             }
         }
     }

     useEffect(() => {
         if (token === '') {
             alert('Você precisa estar logado')
             navigate('/')
         }
     }, [token])

     useEffect(() => {
         buscarTreinos()    
     }, [treinos.length])
    
    return (
        <>
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
            <div className="flex justify-center w-full py-40 bg-[#1c1c1c]">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treinos.map((treino) => (
                            <CardTreinos key={treino.id} treino={treino} />
                        ))} 
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarTreinos;