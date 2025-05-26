"use client"
import React from "react"
import Image from "next/image"
import { useState } from "react"
import Container from "../../container"

const cards = [
    {
        id: 1,
        title: "Escritorio Paranapanema.",
        description: "Rua Juca Teodoro, 460-1, Próximo ao Asilo- Centro - Paranapanema - SP",
        image: "/assets/images/foto_funeraria/escritorio_ppanema.jpg",
        mapaLink: "https://maps.app.goo.gl/UfKxbuFDvrmDBfzQA",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.542336561574!2d-48.7268125242243!3d-23.3820901952862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c14ccec3eefe01%3A0xcb6bb8efa6d3830!2sR.%20Juc%C3%A1%20Teodoro%2C%2070-176%20-%20Centro%2C%20Paranapanema%20-%20SP%2C%2018720-000%2C%20Brasil!5e0!3m2!1spt-BR!2sar!4v1748258823078!5m2!1spt-BR!2sar" 
    },
    {
        id: 2,
        title: "Escritorio Campos de Holambra II.",
        description: "Rua Goiás, 101 - Santa Helena - Campos de Holambra II, Paranapanema - SP",
        image: "/assets/images/foto_funeraria/escritorio_holambra_II.jpg",
        mapLink: "https://maps.app.goo.gl/EzkEZCCvoYhxqLWk7",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.1056303307239!2d-48.87770993036017!3d-23.44521899868001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c14f81a62cf593%3A0x5d07f121788a398f!2sR.%20Goi%C3%A1s%2C%20153-91%20-%20Res.%20Santa%20Helena%2C%20Paranapanema%20-%20SP%2C%2018720-000%2C%20Brasil!5e0!3m2!1spt-BR!2sar!4v1748259002986!5m2!1spt-BR!2sar" // link correto abaixo
    }
]

export default function Empresa() {
    const [selectedCardId, setSelectedCardId] = useState(null);
    const selectedCard = cards.find(card => card.id === selectedCardId);

    return(
        <section>
            <div className="text-center font-bold text-primary px-10 lg:px-32">
                <h3 className="text-2xl md:text-3xl lg:text-4xl">Com dois Velórios Completamente Equipados para atender a sua necessidade e de sua Familía</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-10">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => setSelectedCardId(card.id)}
                        className="group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-background bg-200 animate-gradient-background min-h-[300px] hover:shadow-2xl transition-shadow duration-300"
                    >
                        <Image 
                            src={card.image}
                            alt={card.title}
                            width={500}
                            height={300}
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 ease-out"
                        />
                        <div className="relative z-10 p-6 h-full flex flex-col justify-end transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 bg-black/50 backdrop-blur-sm">
                            <h2 className="text-text text-xl md:text-2xl font-bold">{card.title}</h2>
                            <p className="mt-2 text-neutral-200">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedCard && (
                <Container>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-5 mb-16 px-16">
                        <div className="flex-1 space-y-4">
                            <h3 className="text-xl font-bold md:text-3xl lg:text-4xl">{selectedCard.title}</h3>
                            <p className="text-neutral-700 text-lg md:text-xl lg:text-2xl">{selectedCard.description}</p>
                            <a 
                                href={selectedCard.mapLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 underline"
                            >
                                Ir até Maps
                            </a>
                        </div>
                        <div className="flex-1">
                            <iframe
                                src={selectedCard.embedUrl}
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl shadow-md"
                            ></iframe>
                        </div>
                    </div>
                </Container>
            )}
        </section>
    )
}