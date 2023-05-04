
export default function Footer (){
  return (
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between">
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <h2 className="text-white font-bold text-2xl mb-4">Sobre Nós</h2>
                <p className="text-gray-400">Somos uma empresa comprometida em trazer conhecimento sobre tecnologias inovadoras.</p>
              </div>
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <h2 className="text-white font-bold text-2xl mb-4">Links Úteis</h2>
                <ul className="text-gray-400">
                  <li><a href="#" className="hover:text-gray-200">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-gray-200">Termos de Serviço</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 te">© 2023 Exemplo, Inc. Todos os direitos reservados.</p>
            </div>
            </div>
            </footer>
  )
}