
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

function Sobre() {
  const developers = [
    { 
      name: 'Daffne Vieira', 
      role: 'Developer', 
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFDHY5D1g2q6A/profile-displayphoto-shrink_800_800/B4DZVO3V7rHYAc-/0/1740784887252?e=1747872000&v=beta&t=w-yJeSu40aaF1cmmlUvYdN8Qfjhfvqr0567ZQ0XTzQM',
      linkedin: 'https://www.linkedin.com/in/daffne-vieira/'
    },
    { 
      name: 'Tiago Alves', 
      role: 'Developer', 
      image: 'https://ik.imagekit.io/machadofatima/Fitness/Perfil.webp',
      linkedin: 'https://www.linkedin.com/in/tiago-salves'
    },
    { 
      name: 'Fátima Machado', 
      role: 'Developer', 
      image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2876.webp',
      linkedin: 'https://www.linkedin.com/in/machadofatima/'
    },
    { 
      name: 'Kauê Oliveira', 
      role: 'Developer', 
      image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2850.webp',
      linkedin: 'https://www.linkedin.com/in/kaue-de-oliveira-667856155/'
    },
    { 
      name: 'Thalita Alves', 
      role: 'Product Owner', 
      image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG-20241004-WA0019.webp',
      linkedin: 'https://www.linkedin.com/in/thalita-alves-s/'
    },
    { 
      name: 'João Vitor Bispo', 
      role: 'Quality Assurance', 
      image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2977_2.webp',
      linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-bispo-836767174/'
    },
  ];

  return (
    <section
      className="relative py-16 bg-gray-900 text-white bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://media.discordapp.net/attachments/1311369802186489936/1334223672025809007/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.png?format=webp&quality=lossless&width=733&height=551)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4 text-red-600">Sobre a Fit Tech</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Na FIT TECH, desenvolvemos soluções inovadoras para transformar sua experiência fitness. Nossa plataforma digital utiliza tecnologia de ponta para tornar seus treinos mais eficazes, personalizados e motivadores.
          </p>
        </div>

        <h2 className="text-2xl font-extrabold text-center mb-12 text-red-600">Nossa Equipe</h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {developers.map((developer, index) => (
            <motion.div 
              key={index} 
              className="relative flex flex-col items-center text-center bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={developer.image} alt={developer.name} className="w-32 h-32 rounded-full mb-4 border-4 border-red-600" />
              <h3 className="text-2xl font-semibold text-white">{developer.name}</h3>
              <p className="text-lg font-light text-gray-400">{developer.role}</p>
              <motion.a 
                href={developer.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Sobre;
