// import { ChangeEvent } from "react";

function FormTreinos() {
    return (
        <div className="container flex flex-col items-center justify-center mx-auto bg-red-100 m-3 p-10 rounded-lg">
            <h1 className="text-4xl text-center my-8">
                {/* {id === undefined ? 'Cadastrar Treino' : 'Editar Treino'} */} Editar
            </h1>

            <form className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="treino">Treino</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu treino"
                        name='treino'
                        className="border-2 border-slate-700 rounded p-2"
                        // value={treino.descricao}
                        // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao">Descrição do Treino</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu treino"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        // value={treino.descricao}
                        // onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {/* {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    } */}
                </button>
            </form>
        </div>
    );
}

export default FormTreinos;