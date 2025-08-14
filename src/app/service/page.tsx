import Container from "@/components/container";
import Image from "next/image";
import React from "react"; 
import img1 from "../../../public/assets/images/fotos_ig/alegria.jpg";
import img2 from "../../../public/assets/images/fotos_500/compartilhamento.jpg"
import Contato from "@/components/contato";



export default function Service(){
    const whatsappMessage = encodeURIComponent("Olá! Tenho interesse em ser associado do plano Familiar. Pdoe me enviar mais informações?");
    const whatsappNumber = "5514997685642";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    return(
        <main>
            <Container>
                <section className="font-montserrat bg-hero-background w-full bg-no-repeat bg-cover bg-center bg-fixed">
                    <div className="flex flex-col justify-center items-center w-full h-[500px] bg-black/60">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary">Tranquilidade para você e sua família começa aqui.</h2>
                        <span className="text-lg md:text-xl lg:text-2xl w-2/3 text-center font-light text-text">Dentro do Plano você como <strong>TITULAR</strong> poderá até <strong>mais de 7 pessoas. Sendo Familiar ou não e sem limite de idade!</strong>.</span>
                        <div className="felx flex-col md:flex-row justify-center items-center gap-10 p-5 my-5 text-center">
                            <a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl my-5 md:mx-5 h-auto bg-secondary px-5 py-3 rounded-3xl text-text hover:bg-gradient-background bg-200 animate-gradient-background transition-all duration-500"
                            >
                                Quero ser Associado
                            </a>
                        </div>
                    </div>
                </section>
            </Container>
            <section className="bg-gradient-background bg-200 animate-gradient-background text-text py-5">
                <Container>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">Nosso Plano conta com:</h3>
                    <div className="flex flex-col lg:flex-row gap-10 text-center font-montserrat">
                        <div className="w-full">
                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold">Urna Mortuaria.</h4>
                            <p>Dentro de nosso plano garante uma Urna Mostruaria Padrão, varão visão.</p>
                        </div>
                        <div className="w-full">
                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold">Ornamentação.</h4>
                            <p>Ornamentação de corpo com flores artificiais ou naturais.</p>
                        </div>
                        <div className="w-full">
                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold">Dependentes</h4>
                            <p>Você como <strong>titular</strong> e mais <strong>7 pessoas.</strong>.</p>
                        </div>
                        <div className="w-full">
                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold">Traslado</h4>
                            <p>Traslado de até 200km ida e volta.</p>
                        </div>
                        <div className="w-full">
                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold">Convênios.</h4>
                            <p>Mais de 200 profissionais na região para atender aos nossos associados.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-25 lg:p-10">
                        <div className="w-full md:w-1/2 text-center">
                            <Image 
                                    src={img1}
                                    alt="#"
                                    width={450}
                                    height={550}
                                    className="mx-auto rounded-2xl shadow-lg shadow-black/50 hover:shadow-black/70 transition-all duration-500 transform hover:scale-105"
                            />
                        </div>
                        <div className="w-full md:w-1/2 h-auto bg-light text-dark p-5 rounded-2xl shadow-lg shadow-black/50 hover:shadow-black/70 transition-all duration-500 transform hover:scale-105">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-montserrat text-secondary">Você também conta com:</h3>
                            <div className="my-2 px-3">
                                <p className="text-lg md:text-xl">• Fornecimento de equipamentos aos conavecentes sendo muletas e andadores.</p>
                                <p className="text-lg md:text-xl">• Orientação nos processos administrativos de registro de obito e sepultamento.</p>
                                <p className="text-lg md:text-xl">• Velório equipado para o atendimento em Paranapanema e Campos de Holambra II.</p>
                                <p className="text-lg md:text-xl">• Fornecemos equipamentos necessarios para velorios em sua residencia.</p>
                            </div>
                            <span className="text-2xl">A partir de:</span>
                            <h4 className="text-3xl text-hover font-bold italic mb-5">R$ 43 por mês</h4>
                            <p className="text-xl font-bold">Para mais informações, entre em contato com nosso escritorio.</p>
                            <div className="felx flex-col md:flex-row justify-center items-center text-center">
                                <button className="text-xl my-5 md:mx-5 h-auto bg-secondary px-5 py-3 rounded-3xl text-text hover:bg-gradient-background bg-200 animate-gradient-background transition-all duration-500">Quero ser Associado</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-15 px-3 my-5">
                        <div className="w-full md:w-1/2 h-auto px-2">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat text-action">Outros serviços que você pode solicitar.</h3>
                            <div className="px-4">
                                <p className="text-xl md:text-2xl my-3"><strong>Convênio com mais de 200 profissionais</strong> na região, para atender aos nossos associados nas prestações de serviços.</p>
                                <p className="text-xl md:text-2xl my-3">Trabalhamos com empresas especializadas em <strong>Traslado Internacional</strong>.</p>
                                <p className="text-xl md:text-2xl my-3">Trabalhamos com empresas especializadas em <strong>Crematórios e Crematórios para Pet</strong>.</p>
                            </div>
                            <div className="felx flex-col md:flex-row justify-center items-center gap-10 p-5 my-5 text-center">
                                <button className="text-xl my-5 md:mx-5 h-auto bg-secondary px-5 py-3 rounded-3xl text-text hover:bg-gradient-background bg-200 animate-gradient-background transition-all duration-500">Quero ser Associado</button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 text-center">
                            <Image 
                                    src={img2}
                                    alt="#"
                                    width={500}
                                    height={500}
                                    className="mx-auto rounded-2xl shadow-lg shadow-black/50 hover:shadow-black/70 transition-all duration-500 transform hover:scale-105"
                            />
                        </div>
                        </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className="flex flex-col justify-center items-center p-10">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">Conheça nossos Velorios!</h3>
                        <div className="p-4 max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px] grid-flow-dense">
                                <div className="row-span-2 col-span-2">
                                    <Image
                                            src={img1}
                                            alt="Velório com flores e decoração"
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover rounded-xl"/>
                                </div>
                                <div className="row-span-1 col-span-1">
                                    <Image
                                        src={img1}
                                        alt="Velório com flores e decoração"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover rounded-xl"/>
                                </div>
                                <div className="row-span-2">
                                    <Image
                                        src={img1}
                                        alt="Velório com flores e decoração"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover rounded-xl"/>
                                </div>
                                <div className="row-span-1">
                                    <Image
                                        src={img1}
                                        alt="Velório com flores e decoração"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover rounded-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Contato />
            </section>
        </main>
    )
}