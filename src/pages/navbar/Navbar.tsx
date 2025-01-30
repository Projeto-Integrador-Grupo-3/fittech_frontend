function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-stone-950 bg-opacity-50 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-red-500">
                FitTech
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Início
                </a>
                <a
                  href="#sobre"
                  className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sobre
                </a>
                <a
                  href="#treinos"
                  className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Treinos
                </a>
                <a
                  href="#contato"
                  className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contato
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-300 hover:text-red-500 focus:outline-none focus:text-red-500"
                type="button"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  