import { GiRotaryPhone } from "react-icons/gi";

export default function Contato(){
    return(
        <div className="flex flex-col justify-center items-center my-5 gap-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Entre em Contato</h2>
            <div className="w-full flex flex-col justify-center mx-auto items-center">
                <p className="text-gray-600 text-lg mb-6 w-1/3 text-center">Clique no botão verde no canto direito de baixo e venha conversar conosco pelo WhatsApp.</p>
                <h2 className="text-xl font-bold text-gray-600 mb-1 w-1/3 text-center">Em caso de emergencia assitencial, entre em contato ligando ao numero:</h2>
                <span className="text-gray-900 mb-6 flex flex-row justify-center gap-4"> <GiRotaryPhone size={50} className="text-blue-500" /> <a href="tel:+5514996721474" className="text-2xl font-semibold text-blue-500 md:text-3xl lg:text-4xl hover:text-blue-700 hover:font-bold transition-all duration-300">(14) 99768-5642</a> <span className="text-2xl font-semibold text-blue-500 md:text-3xl lg:text-4xl">/</span> <a href="tel:+5514997685642" className="text-2xl font-semibold text-blue-500 md:text-3xl lg:text-4xl hover:text-blue-700 hover:font-bold transition-all duration-300">(14) 99672-1474</a></span>
            </div>
        </div>
    )
}