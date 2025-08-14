import { GiRotaryPhone } from "react-icons/gi";

export default function FormularioContato(){
    return(
        <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Entre em Contato</h2>
            <div className="w-full flex flex-col justify-center mx-auto items-center">
                <p className="text-gray-600 text-lg mb-6 w-1/3 text-center">Clique no botão verde no canto direito de baixo e venha conversar conosco pelo WhatsApp.</p>
                <h2 className="text-xl font-bold text-gray-600 mb-1 w-1/3 text-center">Em caso de emergencia assitencial, entre em contato ligando ao numero:</h2>
                <span className="text-gray-900 mb-6 flex flex-row justify-center gap-4"> <GiRotaryPhone size={50} /> <a href="tel:+5514996721474" className="text-2xl md:text-3xl lg:text-4xl">(14) 99768-5642</a></span>
                <p className="text-gray-600 mb-6 text-lg">Ou preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
            </div>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Numero de telefone</label>
                    <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Enviar</button>
            </form>
        </div>
    )
}