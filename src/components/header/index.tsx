'use client'
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/assets/images/logo/Logo.png'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [animating, setAnimating] = useState(false);

    const menuToggle = () => {
        setAnimating(true);
        setTimeout(() => {
            setIsOpen(!isOpen);
            setAnimating(false);
        }, 200); // tempo igual à transição do Tailwind
    };

    return (
        <header className="relative z-50 bg-gradient-background bg-200 animate-gradient-background text-text h-auto text-center">
            {/* Título fixo no topo */}
            <div className="z-50 relative">
                <span className="font-bold text-text uppercase text-2xl md:text-3xl lg:text-4xl font-montserrat">
                    Atenção 24Hrs.
                </span>
            </div>

            <div className="flex flex-row justify-around items-center relative z-50">
                <div className="w-full">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo Funerária Vida Plus"
                            width={150}
                            height={150}
                            className="mx-auto transition-all duration-500 hover:scale-105"
                        />
                        <h1 className="hidden">Funerária Vida Plus</h1>
                    </Link>
                </div>

                {/* Botão do menu */}
                <div className="w-full">
                    <button
                        className="absolute top-1/2 text-text text-3xl z-50"
                        onClick={menuToggle}
                    >
                        {isOpen ? (
                            <span>Fechar <MdNavigateNext className="inline rotate-90" /></span>
                        ) : (
                            <span>Menu <MdNavigateNext className="inline" /></span>
                        )}
                    </button>
                </div>
            </div>

            {/* Menu fullscreen com animação */}
            <div
                className={`
                    fixed inset-0 bg-gradient-background text-text flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 text-2xl z-40
                    transition-all duration-500 ease-in-out
                    ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                    ${animating ? 'pointer-events-none' : 'pointer-events-auto'}
                `}
            >
                <nav className="flex flex-col gap-8 items-center text-3xl">
                    <Link href="/" onClick={menuToggle} className="hover:text-hover hover:underline">Home</Link>
                    <Link href="/service" onClick={menuToggle} className="hover:text-hover hover:underline">Planos</Link>
                    <Link href="/about" onClick={menuToggle} className="hover:text-hover hover:underline">Sobre Nós</Link>
                    <Link href="/contact" onClick={menuToggle} className="hover:text-hover hover:underline">Contato</Link>
                </nav>

                {/* Redes sociais e contato */}
                <div className="mt-10">
                    <h2 className="font-bold text-2xl">Redes sociais</h2>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="#"><FaFacebook size={34} /></a>
                        <a href="#"><FaInstagram size={34} /></a>
                    </div>
                    <div className="mt-8">
                        <h2 className="font-bold text-2xl">Entre em Contato</h2>
                        <a href="#" className="block mt-2">numero</a>
                    </div>
                </div>
            </div>
        </header>
    );
}