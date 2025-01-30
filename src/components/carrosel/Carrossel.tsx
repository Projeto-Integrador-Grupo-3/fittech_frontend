import { useState, useEffect } from "react";

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://ik.imagekit.io/tkeh5vknk/background-01-1920x750.png?updatedAt=1738181342074",
    "https://ik.imagekit.io/tkeh5vknk/background-02-1920x750.png?updatedAt=1738181342045",
    "https://ik.imagekit.io/tkeh5vknk/background-03-1920x750.png?updatedAt=1738181341812",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Troca de imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-500 ease-in-out transform"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à FitTech</h1>
          <p className="text-lg font-light mb-6 max-w-lg">
            Transforme seu corpo, sua mente e alcance seus objetivos com nossa estrutura completa e ambiente motivador.
          </p>
          <a
            href="#sobre"
            className="py-3 px-6 bg-red-500 hover:bg-red-600 text-lg font-semibold rounded-lg transition duration-300"
          >
            Saiba Mais
          </a>
        </div>
        
      </div>

      {/* Botões de navegação */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        &#10095;
      </button>
      
    </div>
  );
};

export default Carrossel;