import { GithubLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer id='footer' className="bg-black text-white py-10 w-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
        <div className="flex flex-col h-full">
          <a href="#home" className="text-3xl font-bold text-[#ff0000]">
            FIT TECH
          </a>
          <p className="mt-4 text-gray-400 text-justify">
            Academia inovadora para transformar o seu corpo e mente, com um ambiente motivador e tecnologia de ponta.
          </p>
        </div>

        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold text-[#ff0000] mb-4">Contato</h3>
          <p className="text-[#F5F5F5F]">Av Paulista, 123</p>
          <p className="text-[#F5F5F5F]">São Paulo, SP</p>
          <p className="text-[#F5F5F5F]">fit-tech@email.com</p>
          <p className="text-[#F5F5F5F] mb-4">(11) 4002-8922</p>
        </div>

        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold text-[#ff0000] mb-4">Atendimento</h3>
          <p className="text-[#F5F5F5F]">Segunda a Sexta - 5h às 23h</p>
          <p className="text-[#F5F5F5F]">Sábado - 7h às 13h</p>
        </div>

        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold text-[#ff0000] mb-4">Código Aberto</h3>
          <a 
            href="https://github.com/Projeto-Integrador-Grupo-3/academia-projetointegrador" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-[#F5F5F5F] hover:text-[#ff0000]"
          >
            <GithubLogo size={24} weight="bold" />
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 text-sm">&copy; 2025 FIT TECH. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
