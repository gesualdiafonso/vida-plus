import Container from "../../container";
import Image from "next/image";
import uniao from "../../../../public/assets/images/fotos_500/uniao.jpg"


export default function Plano() {
    return(
        <section>
            <Container>
                <div className="my-10">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-start italic font-montserrat text-secondary">Plano Familiar Vida Plus</h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-start">Tranquilidade para você e sua familía!</p>
                </div>
                <div className="flex flex-col lg:flex-row my-10 gap-10 lg:gap-20">
                    <div className="w-full h-full">
                        <Image
                            src={uniao}
                            alt="A união familiar é o vinculo para todo bom convivio, para nós e nosso pilar principal!"
                            width={400}
                            height={400}
                            className="object-cover mx-auto rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="bg-secondary rounded-3xl p-10 text-text font-montserrat w-full shadow-2xl">
                        <h3 className="font-semibold text-xl lg:text-2xl my-1">Com o <strong className="text-hover">Plano Vida Plus</strong>, o titular pode incluir até <strong className="text-hover">7 pessoas</strong>, sem limite de idade e mesmo sem vínculo familiar.</h3>
                        <p className="text-xl my-3">Você garante assistência completa com mensalidades acessíveis e entrada facilitada. Com cobertura que oeferece respeito, estrutra e apoio total nos momentos masi difíceis.</p>
                        <p className="text-xl my-3 font-bold text-hover">São mais de 8 serviços...</p>
                        <span className="text-2xl">A partir de:</span>
                        <h4 className="text-3xl text-hover font-bold italic mb-5">R$ 43 por mês</h4>
                        <p className="text-xl font-bold">Para mais informações, entre em contato com nosso escritorio.</p>
                        <span className="text-lg italic text-center">Cuidamos da sua despedida como cuidamos da nossa família.</span>
                    </div>
                </div>
                <div className="my-10 text-center font-montserrat">
                    <h3 className="text-2xl lg:text-4xl font-bold text-secondary">Você é associado a outro plano? Saiba que trabalhamos com transferencias, de maneira rápida e você sai com plano ativo imediatamente!</h3>
                </div>
            </Container>
        </section>
    )
}