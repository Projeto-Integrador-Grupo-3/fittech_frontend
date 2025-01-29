function HomePage() {
    return (
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://media.discordapp.net/attachments/1311369802186489936/1334227305807089704/background-01-1920x750.png?ex=679bc382&is=679a7202&hm=463096abf8470ba0092e6103c99d9571066c7c560564b632963bd443400cbee6&=&format=webp&quality=lossless&width=1397&height=546')` }}>
        {/* Overlay to dim the image */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
        {/* Content */}
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

    );
  }
  
  export default HomePage;
  