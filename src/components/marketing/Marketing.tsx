import { FaDumbbell, FaAward, FaHeartbeat, FaAppleAlt, FaRunning, FaQuoteLeft } from 'react-icons/fa';

const Marketing = () => {
  return (
    <section className="bg-[#0F1219] text-white py-20 px-4">

      <div className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">TRANSFORME SEU CORPO E SUA MENTE</h2>
        <p className="text-base">
          A nossa academia não é apenas um espaço para treinar – é um ambiente onde você desafia seus limites e descobre o melhor de si. Com equipamentos modernos, acompanhamento de especialistas e uma comunidade motivadora, você encontrará o suporte ideal para alcançar seus objetivos de saúde e bem-estar.
        </p>

        <div className="flex items-center space-x-2">
          <FaAward className="h-6 w-6 text-white" />
          <span className="text-4x1 font-semibold">Compromisso com a Excelência</span>
        </div>

        <p className="text-base">
          Nossa academia é reconhecida por oferecer equipamentos de ponta, suporte profissional qualificado e um ambiente voltado para resultados reais. Aqui, sua evolução é prioridade!
        </p>
      </div>

      <br />

      <div className="flex justify-center items-center space-x-2 mb-6">
        <FaDumbbell className="h-12 w-12 text-red-600" />
        <h3 className="text-2xl font-bold">FORÇA E DETERMINAÇÃO</h3>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-center">Plano Básico</h2>
          <p className="text-center text-gray-600 mb-4">
            Acesso completo aos equipamentos e suporte técnico sempre que precisar.
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
            Experiência completa: treinos personalizados, acompanhamento nutricional e suporte premium.
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
            Para quem busca performance: equipamentos de alta tecnologia e suporte especializado.
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

      <div className="mt-16 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Dicas para uma vida mais saudável</h2>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          <FaHeartbeat className="h-10 w-10 text-red-500" />
          <p className="text-lg">Manter-se ativo reduz o estresse e melhora a qualidade do sono. Movimente-se todos os dias!</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          <FaAppleAlt className="h-10 w-10 text-green-500" />
          <p className="text-lg">Uma alimentação equilibrada é a base de um corpo saudável. Priorize alimentos naturais, ricos em fibras e evite ultraprocessados.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          <FaRunning className="h-10 w-10 text-blue-500" />
          <p className="text-lg">Defina metas realistas e celebre cada conquista. Pequenos avanços levam a grandes mudanças!</p>
        </div>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">O que nossos alunos dizem</h2>
        <div className="mt-6 bg-gray-900 p-6 rounded-2xl shadow-lg text-center">
          <FaQuoteLeft className="h-8 w-8 text-gray-500 mb-2 mx-auto" />
          <p className="text-lg italic">"Treinar aqui mudou minha vida! Equipe incrível e ambiente motivador."</p>
          <span className="block mt-2 font-semibold">- João Silva</span>
        </div>
      </div>

    </section>
  );
};

export default Marketing;
