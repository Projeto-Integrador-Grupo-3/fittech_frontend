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
      <div className="relative w-full mx-auto overflow-hidden pt-16">
        <div className="relative w-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-auto object-cover shadow-lg transition duration-500 ease-in-out transform"
          />
          <div className="absolute top-1/2 left-4 right-4 md:left-20 w-full h-full flex items-center md:items-start justify-start text-left text-white p-4 md:p-6 transform -translate-y-1/2 mt-0 md:mt-16"> {/* Margem superior no texto apenas em telas maiores */}
            <div className="z-10">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-2 md:mb-4">
                FIT TECH
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-light mb-4 md:mb-6 max-w-full md:max-w-lg">
                Transforme seu corpo, sua mente e alcance seus objetivos com nossa estrutura completa e ambiente motivador.
              </p>

              <Link to="/sobre" className="py-2 px-4 sm:py-3 sm:px-6 bg-red-500 hover:bg-red-600 text-base sm:text-lg font-semibold rounded-lg transition duration-300">
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>

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
