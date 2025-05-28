import Container from "@/components/container";


export default function Service(){
    return(
        <section>
            <Container>
                <section className="font-montserrat bg-hero-background w-full bg-no-repeat bg-cover bg-center">
                    <div className="flex flex-col justify-center items-center w-full h-[500px] bg-black/60">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary">Tranquilidade para você e sua família começa aqui.</h2>
                        <span className="text-lg md:text-xl lg:text-2xl w-2/3 text-center font-light text-text">Dentro do Plano você como <strong>TITULAR</strong> poderá até <strong>mais de 7 pessoas. Sendo Familiar ou não e sem limite de idade!</strong>.</span>
                        <div className="felx flex-col md:flex-row justify-center items-center gap-10 p-5 my-5 text-center">
                            <button className="text-xl my-5 md:mx-5 h-auto bg-secondary px-5 py-3 rounded-3xl text-text hover:bg-gradient-background bg-200 animate-gradient-background transition-all duration-500">Quero ser Associado</button>
                        </div>
                    </div>
                </section>
            </Container>
            <section className="bg-gradient-background bg-200 animate-gradient-background text-text py-5">
                <Container>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Nosso Plano conta com:</h3>
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
                    <div className="flex flex-col lg:flex-row gap-10 p-10">
                        <div className="w-full h-auto bg-light text-dark p-5 rounded-2xl">
                            <div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-montserrat text-secondary">Você também conta com:</h3>
                                <p className="text-lg md:text-xl">• Fornecimento de equipamentos aos conavecentes sendo muletas e andadores.</p>
                                <p className="text-lg md:text-xl">• Orientação nos processos administrativos de registro de obito e sepultamento.</p>
                                <p className="text-lg md:text-xl">• Velório equipado para o atendimento em Paranapanema e Campos de Holambra II.</p>
                                <p className="text-lg md:text-xl">• Fornecemos equipamentos necessarios para velorios em sua residencia.</p>
                            </div>
                        </div>
                        <div className="w-full h-auto bg-light text-dark p-5 rounded-2xl">
                            <div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-montserrat text-secondary">Outros serviços que você pode solicitar.</h3>
                                <p className="text-lg md:text-xl">• Convênio com mais de 200 profissionais na região, para atender aos nossos associados nas prestações de serviços.</p>
                                <p className="text-lg md:text-xl">• Trabalho com empresas especializadas em Traslado Internacional.</p>
                                <p className="text-lg md:text-xl">• Trabalho com empresas especializadas em Crematórios e Crematórios para Pet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="felx flex-col md:flex-row justify-center items-center gap-10 p-5 my-5 text-center">
                        <button className="text-xl my-5 md:mx-5 h-auto bg-secondary px-5 py-3 rounded-3xl text-text hover:bg-gradient-background bg-200 animate-gradient-background transition-all duration-500">Quero ser Associado</button>
                    </div>

                </Container>
            </section>
        </section>
    )
}