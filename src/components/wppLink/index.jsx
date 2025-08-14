import { IoLogoWhatsapp } from "react-icons/io";
export default function WppLink(){
    const whatsappMessage = encodeURIComponent("Olá! Tenho interesse em ser associado do plano Familiar. Pdoe me enviar mais informações?");
    const whatsappNumber = "5514997685642";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    return(
        <div className="relative">
            <a 
                className="fixed bottom-10 right-10 z-50 bg-green-500 text-white rounded-full p-2 shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
                href={whatsappLink} rel="noopener noreferrer" target="_blank"
                >
                    < IoLogoWhatsapp size={70}/>
                </a>
        </div>
    )
}