import React from 'react';
import Image from 'next/image';
import Container from '../../container/index';
import sobreNos from '/public/assets/images/fotos_ig/nos.jpg';

export default function Sobre (){
    return(
        <section className='w-full bg-gradient-background bg-200 animate-gradient-background'>
            <Container>
                <div className='flex flex-col md:flex-row w-full gap-10 justify-center items-center'>
                    <div className='text-text w-full'>
                        <span className='text-xl lg:text-2xl font-bold font-montserrat'>Quem somos?</span>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold'>A mais de 20 anos trazendo compaixão, ajudando e apoiando toda nossa comunidade de Paranapanema, Campos de Holambra II e Região...</h3>
                    </div>
                    <div className='w-full md:py-10'>
                        <Image 
                            src={sobreNos}
                            alt="Sobre nós"
                            width={200}
                            height={200}
                            className='w-full lg:w-[60%] h-full object-cover mx-auto rounded-lg'
                        />
                    </div>
                </div>
                <div className='text-text my-10 py-10'>
                    <span className='text-xl md:text-2xl font-light font-montserrat'>Confiança de quem já nos conhece!</span>
                    <h3 className='text-2xl md:text-3xl font-bold font-montserrat'>Mais de 400 Associados confiam na Vida Plus.</h3>
                    <div className='flex flex-col lg:flex-row font-montserrat w-ful md:gap-5 my-5 font-semibold'>
                        <div className='p-5 text-xl'>
                            <h4>Urna mortuária já incluida em nosso plano.</h4>
                        </div>
                        <div className='p-5 text-xl text-start'>
                            <h4>Orgamentação com Flores artificiais.</h4>
                        </div>
                        <div className='p-5 text-xl text-start'>
                            <h4>Traslado de até 200km percorrido.</h4>
                        </div>
                        <div className='p-5 text-xl text-start'>
                            <h4>Documentação e orientação para registro de óbito e sepultamento.</h4>
                        </div>
                        <div className='p-5 text-xl text-start'>
                            <h4>Velório completo com suporte em casa ou e nossas unidades.</h4>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}