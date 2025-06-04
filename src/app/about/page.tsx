import Container from "@/components/container";
import Image from "next/image";
import nos from "../../../public/assets/images/fotos_ig/nos.jpg"

export default function About(){
    return(
        <main>
            <section className="bg-hero-about h-96 w-full bg-no-repeat bg-cover bg-bottom bg-fixed flex flex-col justify-center items-center">
                <div className="bg-secondary/60 w-full h-full flex justify-center items-center">
                    <h2 className=" p-5 text-4xl md:text-6xl text-white font-bold">
                        Sobre Nós
                    </h2>
                </div>
            </section>
            <div className="bg-secondary w-full py-10">
                <Container>
                    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-10">
                        <div>
                            <p className="text-lg md:text-xl lg:text-2xl text-white mt-4 px-4">
                                Fundada a mais de 20 anos, e com atuação contínua, a <strong className="text-hover">Funerária Vida Plus</strong> nasceu em <strong className="text-hover">Paranapanema (SP)</strong> com um único propósito: <strong className="text-hover">cuidar das famílias com carinho e respeito nos momentos mais delicados da vida.</strong> Somos uma <strong className="text-hover">empresa familiar</strong>, construída com amor por gerações da mesma família, e atuamos com o coraçõa voltado para acolher, confortar e servir nossa comunidade.
                            </p>
                            <p className="text-lg md:text-xl lg:text-2xl text-white mt-4 px-4 my-5">
                                Ao longo dos anos, crescemos junto com <strong className="text-hover">Paranapanema</strong>, nos tornamos referência também em <strong className="text-hover">Campos de Holambra II</strong> e hoje somos reconhecidos em diversos bairros e regiões vizinhas.
                            </p>
                        </div>
                        <div className="w-1/2 h-1/2 md:w-full md:h-full">
                            <Image 
                                src={nos}
                                alt="#"
                                width={500}
                                height={500}
                                className="mx-auto rounded-2xl"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-text my-4"> 
                            Mais que uma funerária, somos parte da história de muitas famílias.
                        </h3>
                        <span className="text-xl md:text-2xl text-text">Nosso compromisso vai além de oferecer um serviço - é oferecer <strong className="text-hover">presença, acolhimento e respeito</strong> quando mais se precisa.</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 my-5 px-5 md:px-10">
                        <div className="bg-primary p-5 rounded-2xl text-text w-full md:w-1/2">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Missão</h2>
                            <p className="text-lg md:text-xl">
                                Oferecer serviço funerários com <strong className="text-hover">humanidade, dignidade e respeito</strong>, proporcionando acolhimento às família enlutadas e honrando a memória de quem partiu com carinho, organização e cuidado em cada detalhe.
                            </p>
                        </div>
                        <div className="bg-primary p-5 rounded-2xl text-text w-full md:w-1/2">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Visão</h2>
                            <p className="text-lg md:text-xl">
                                Ser reconhecida como uma referência regional funerários, mantendo sempre a <strong className="text-hover">ética, o amor ao próximo e o respeito às tradições</strong>, crescendo junto com as famílias e comunidades que confiam em nós há mais de duas décadas.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="p-10 md:p-20 lg:px-40  rounded-2xl text-dark">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold" >Nosso Objetivo...</h3>
                <p className="text-lg md:text-xl"> 
                    Estar presente <strong className="text-hover">com leveza e compaixão</strong>, ajudando a transfomrar um momento de dor em um gesto de amor. Queremos que cada família atendida sinta que foi cuidado com <strong className="text-hover">respeito, empatia e simplicidade.</strong>
                </p>
            </div>
        </main>
    )
}