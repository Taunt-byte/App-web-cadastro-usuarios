export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#inicio" className="text-white text-2xl font-bold">
              Big Bang TI
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#Inicio"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </a>
              <a
                href="#sobre"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sobre
              </a>
              <a
                href="#Contato"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};