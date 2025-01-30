import { FaDumbbell, FaAward } from 'react-icons/fa';


const Marketing = () => {
  return (
    <section className="bg-black text-white py-20 px-4">


      <div className="flex justify-center items-center space-x-2 mb-6">
        <FaDumbbell className="h-12 w-12 text-red-600" />
        <h3 className="text-2xl font-bold">Força e Determinação</h3>
      </div>


      <div className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Transforme seu corpo na nossa academia!</h2>
        <p className="text-base">
          Na nossa academia, oferecemos os melhores treinos, acompanhamento especializado e uma estrutura
          de primeira para você alcançar seus objetivos. Vamos juntos melhorar sua saúde e bem-estar com qualidade e dedicação!
        </p>
       
        <div className="flex items-center space-x-2">
          <FaAward className="h-6 w-6 text-white" />
          <span className="text-lg font-semibold">Selo de Qualidade</span>
        </div>
       
        <p className="text-base">
          Nossa academia é reconhecida pela qualidade dos equipamentos, suporte especializado e um ambiente focado em resultados.
        </p>
      </div>


      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-center">Plano Básico</h2>
          <p className="text-center text-gray-600 mb-4">
            Acesso a todos os equipamentos e suporte especializado.
          </p>
          <p className="text-center text-4xl font-bold text-green-500 mb-4">R$ 49,90/mês</p>
          <div className="flex justify-center">
            <a
              href="#planos"
              className="py-3 px-6 bg-green-500 hover:bg-green-600 text-lg font-semibold text-white rounded-lg transition duration-300"
            >
              Assine Agora
            </a>
          </div>
        </div>


        <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-center">Plano Premium</h2>
          <p className="text-center text-gray-600 mb-4">
            Acesso ilimitado, treinos personalizados, nutricionista e suporte exclusivo dos nossos especialistas.
          </p>
          <p className="text-center text-4xl font-bold text-red-500 mb-4">R$ 99,90/mês</p>
          <div className="flex justify-center">
            <a
              href="#planos"
              className="py-3 px-6 bg-red-500 hover:bg-red-600 text-lg font-semibold text-white rounded-lg transition duration-300"
            >
              Assine Agora
            </a>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-center">Plano Avançado</h2>
          <p className="text-center text-gray-600 mb-4">
            Acesso a todos os equipamentos e suporte especializado.
          </p>
          <p className="text-center text-4xl font-bold text-blue-500 mb-4">R$ 79,90/mês</p>
          <div className="flex justify-center">
            <a
              href="#planos"
              className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-lg font-semibold text-white rounded-lg transition duration-300"
            >
              Assine Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Marketing;
