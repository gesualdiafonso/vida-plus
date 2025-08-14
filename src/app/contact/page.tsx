import Container from "@/components/container";
import Empresa from "@/components/home/empresa";
import { GiRotaryPhone } from "react-icons/gi";


export default function Contact(){
    return(
        <main>
            <section>
                <Container>
                    <div className="flex flex-col justify-center items-center my-20 gap-1">
                        <h2 className="text-center text-3xl lg:text-4xl font-bold italic">Contato</h2>
                        <p className="text-center w-1/2 text-xl md:text-2xl text-gray-600">
                            Clique no botão verde no canto direito de baixo e venha conversar conosco pelo WhatsApp.
                        </p>
                        <p className="text-center w-1/2 text-lg md:text-xl text-gray-800">Ou se preferir ligar, basta clicar no telefone abaixo:</p>
                        <span className="text-gray-900 mb-6 flex flex-row justify-center gap-4"> <GiRotaryPhone size={50} className="text-blue-500" /> <a href="tel:+5514996721474" className="text-2xl font-semibold text-blue-500 md:text-3xl lg:text-4xl hover:text-blue-700 hover:font-bold transition-all duration-300">(14) 99768-5642</a> <span className="text-2xl font-semibold text-blue-500 md:text-3xl lg:text-4xl">/</span> <a href="tel:+5514997685642" className="text-2xl font-semibold text-blue-500 md:text-3xl lg:text-4xl hover:text-blue-700 hover:font-bold transition-all duration-300">(14) 99672-1474</a></span>
                        <span className="text-center w-1/2 text-lg md:text-xl text-gray-800">Estamos aqui para ajudar você com qualquer dúvida ou solicitação.</span>
                    </div>
                </Container>
            </section>
            <section className="my-10">
                <Container>
                    <div className="my-20">
                        <Empresa />
                    </div>
                </Container>
            </section>
        </main>
    )
}