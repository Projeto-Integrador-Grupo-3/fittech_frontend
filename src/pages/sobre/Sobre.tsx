function Sobre() {
    const developers = [
      { name: 'João Silva', role: 'Desenvolvedor Front-end', bgColor: 'bg-red-500' },
      { name: 'Maria Souza', role: 'Desenvolvedora Back-end', bgColor: 'bg-blue-500' },
      { name: 'Carlos Pereira', role: 'Desenvolvedor Fullstack', bgColor: 'bg-green-500' },
      { name: 'Ana Costa', role: 'Desenvolvedora Mobile', bgColor: 'bg-yellow-500' },
      { name: 'Paulo Lima', role: 'Desenvolvedor DevOps', bgColor: 'bg-purple-500' },
      { name: 'Laura Mendes', role: 'Desenvolvedora UI/UX', bgColor: 'bg-pink-500' },
    ];
  
    return (
      <section
        className="relative py-12 bg-gray-900 text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://media.discordapp.net/attachments/1311369802186489936/1334223672025809007/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.png?ex=679bc020&is=679a6ea0&hm=44e96e71991674389c7549a266fe4c3dfd3ee230421710c0fdb7735af4051cd3&=&format=webp&quality=lossless&width=733&height=551')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay para escurecer a imagem */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Conteúdo da seção */}
        <div className="relative max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          
          {/* Texto sobre a academia */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sobre a FitTech</h2>
            <p className="text-base font-light text-gray-300 max-w-3xl mx-auto">
              Na FitTech, oferecemos um ambiente moderno, equipado com as melhores tecnologias para garantir que você alcance seus objetivos de forma eficiente e motivada. Nossa equipe dedicada está aqui para apoiar você em cada passo da sua jornada fitness.
            </p>
          </div>
  
          {/* Título da seção de desenvolvedores */}
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe de Desenvolvedores</h2>
  
          {/* Lista de desenvolvedores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {developers.map((developer, index) => (
              <div key={index} className="relative flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className={`w-32 h-32 rounded-full ${developer.bgColor} mb-6`}></div>
                <h3 className="text-xl font-semibold">{developer.name}</h3>
                <p className="text-base font-light text-gray-400">{developer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Sobre;
  