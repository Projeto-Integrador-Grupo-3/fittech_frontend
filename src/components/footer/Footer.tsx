import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 w-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <a href="#home" className="text-3xl font-bold text-red-500">
            FitTech
          </a>
          <p className="mt-4 text-gray-400 text-wrap max-w-sm">
            Academia inovadora para transformar o seu corpo e mente, com um ambiente motivador e tecnologia de ponta.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-red-500 mb-4">Contato</h3>
          <p className="text-gray-300">Av Paulista, 123</p>
          <p className="text-gray-300">São Paulo/SP</p>
          <p className="text-gray-300">fittech@email.com</p>
          <p className="text-gray-300 mb-4">(11) 1234-5678</p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-red-500 mb-4">Atendimento</h3>
          <p className="text-gray-300">Segunda a Sexta - 5h às 23h</p>
          <p className="text-gray-300">Sábado - 7h às 13h</p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-red-500 mb-4">Redes Sociais</h3>
          <ul className="space-y-4">
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-red-500">
                <LinkedinLogo size={24} weight="bold" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-red-500">
                <InstagramLogo size={24} weight="bold" />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-red-500">
                <FacebookLogo size={24} weight="bold" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 text-sm">&copy; 2025 FitTech. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
