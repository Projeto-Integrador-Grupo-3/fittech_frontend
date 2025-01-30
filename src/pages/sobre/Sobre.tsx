function Sobre() {
  const developers = [
    { name: 'Thalita Alves', role: 'Product Owner', image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG-20241004-WA0019.webp' },
    { name: 'João Vitor Bispo', role: 'Quality Assurance', image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2977_2.webp' },
    { name: 'Fátima Machado', role: 'Developer', image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2876.webp' },
    { name: 'Daffne Vieira', role: 'Developer', image: 'https://ik.imagekit.io/machadofatima/Fitness/WhatsApp_Image_2024-12-17_at_15.53.34.webp' },
    { name: 'Tiago Alves', role: 'Developer', image: 'https://ik.imagekit.io/machadofatima/Fitness/Perfil.webp' },
    { name: 'Kauê Oliveira', role: 'Developer', image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2850.webp' },
  ];

  return (
    <section
      className="relative py-12 bg-gray-900 text-white bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://media.discordapp.net/attachments/1311369802186489936/1334223672025809007/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.png?ex=679bc020&is=679a6ea0&hm=44e96e71991674389c7549a266fe4c3dfd3ee230421710c0fdb7735af4051cd3&=&format=webp&quality=lossless&width=733&height=551)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sobre a FIT TECH</h2>
          <p className="text-base font-light text-[#F5F5F5] max-w-3xl mx-auto">
            Na FIT TECH, desenvolvemos soluções inovadoras para transformar sua experiência fitness. Com tecnologia de ponta, oferecemos uma ferramenta digital inteligente que torna seus treinos mais eficazes, personalizados e motivadores.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe de Desenvolvedores</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {developers.map((developer, index) => (
            <div key={index} className="relative flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src={developer.image} alt={developer.name} className="w-32 h-32 rounded-full mb-6" />
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
