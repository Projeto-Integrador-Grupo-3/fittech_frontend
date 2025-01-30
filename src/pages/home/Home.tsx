import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Marketing from "../../components/marketing/Marketing";

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://ik.imagekit.io/machadofatima/Fitness/background-01-1920x750%20(1).webp",
    "https://ik.imagekit.io/machadofatima/Fitness/background-02-1920x750%20(1).webp",
    "https://ik.imagekit.io/machadofatima/Fitness/background-03-1920x750.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval); 
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
    <>
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto object-cover shadow-lg transition duration-500 ease-in-out transform"
        />
        <div className="absolute top-1 z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
          <h1 className="text-6xl font-extrabold mb-4">FIT TECH</h1>
          <p className="text-lg font-light mb-6 max-w-lg">
            Transforme seu corpo, sua mente e alcance seus objetivos com nossa estrutura completa e ambiente motivador.
          </p>
        
           <Link to='/sobre' className="py-3 px-6 bg-red-500 hover:bg-red-600 text-lg font-semibold rounded-lg transition duration-300">Saiba Mais</Link> 
          
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

<Marketing />
</>
  );
};

export default Carrossel;