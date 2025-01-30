import React, { useState } from "react";
 
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
 
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [peso, setPeso] = useState<number | string>(""); // Peso
  const [altura, setAltura] = useState<number | string>(""); // Altura
  const [imc, setImc] = useState<number | null>(null); // Resultado do IMC
  const [categoria, setCategoria] = useState<string>(""); // Categoria do IMC
 
  const handlePesoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeso(e.target.value);
  };
 
  const handleAlturaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAltura(e.target.value);
  };
 
  // Função para calcular o IMC e a categoria
  const calcularIMC = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o envio do formulário (refresh da página)
 
    if (peso && altura) {
      // Cálculo do IMC (peso / altura²)
      const resultadoIMC = Number(peso) / (Number(altura) * Number(altura));
      setImc(resultadoIMC);
 
      // Classificação do IMC
      if (resultadoIMC < 18.5) {
        setCategoria("Abaixo do peso");
      } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
        setCategoria("Peso normal");
      } else if (resultadoIMC >= 25.0 && resultadoIMC < 29.9) {
        setCategoria("Sobrepeso");
      } else {
        setCategoria("Obesidade");
      }
    }
  };
 
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada.
 
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#FFFFFF] p-6 rounded-md shadow-lg w-96">
        <h1 className="text-3xl text-[#E63946] font-bold text-center mb-4">Calcule seu IMC</h1>
 
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-[#E63946] hover:text-[#E63946] p-4 bg-transparent rounded-full text-2xl"
        >
        &times;
        </button>
 
        {/* Formulário para inserção de altura e peso */}
        <form onSubmit={calcularIMC} className="space-y-4">
          <div>
            <label htmlFor="peso" className="block text-sm text-center font-medium text-[#E63946]">Peso (kg)</label>
            <input
              type="number"
              id="peso"
              value={peso}
              onChange={handlePesoChange}
              className="mt-1 block w-full px-3 py-2 border text-center border-[#E63946] rounded-md shadow-sm focus:outline-none focus:ring-[#E63946] focus:border-[#E63946] sm:text-sm"
              required
            />
          </div>
 
          <div>
            <label htmlFor="altura" className="block text-sm text-center font-medium text-[#E63946]">Altura (m)</label>
            <input
              type="number"
              id="altura"
              step="0.01"
              value={altura}
              onChange={handleAlturaChange}
              className="mt-1 block w-full px-3 py-2 border text-center border-[#E63946] rounded-md shadow-sm focus:outline-none focus:ring-[#E63946] focus:border-[#E63946] sm:text-sm"
              required
            />
          </div>
 
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#E63946] text-[#1C1C1C] font-semibold rounded-lg hover:bg-[#E63946]"
            >
              Calcular IMC
            </button>
          </div>
        </form>
 
        {/* Exibe o resultado do IMC e a categoria */}
        {imc !== null && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">Seu IMC:</h2>
            <p className="text-lg">{imc.toFixed(2)}</p>
 
            {/* Exibe a categoria */}
            <h3 className="mt-2 text-lg font-semibold">Categoria:</h3>
            <p className="text-lg">{categoria}</p>
          </div>
        )}
      </div>
    </div>
  );
};
 
export default Modal;
