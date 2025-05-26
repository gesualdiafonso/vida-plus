"use client"
import React from "react"
import Image from "next/image"

const cards = [
    {
        title: "Escritorio Paranapanema.",
        description: "Rua Juca Teodoro, 460-1, Próximo ao Asilo- Centro - Paranapanema - SP",
        image: "/assets/images/foto_funeraria/escritorio_ppanema.jpg"
    },
    {
        title: "Escritorio Campos de Holambra II.",
        description: "Rua Goiás, 101 - Santa Helena - Campos de Holambra II, Paranapanema - SP",
        image: "/assets/images/foto_funeraria/escritorio_holambra_II.jpg"
    }
]

export default function Empresa() {
    return(
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
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
        </section>
    )
}