'use client'
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/assets/images/logo/Logo.png';
import Container from "../container";

export default function Footer() {
    return (
        <footer className="bg-gradient-background bg-200 animate-gradient-background text-text px-6 py-10 text-sm md:text-base font-montserrat">
            {/* Topo: Atenção e telefones */}
            <div className="text-center mb-2">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold italic tracking-wide">Atenção 24Hrs</h2>
            </div>
            <div className="text-center mb-8 flex flex-col md:flex-row justify-center items-center gap-10">
                <a href="tel:+551499768-5642" className="mx-3 font-bold text-xl md:text-2xl hover:text-action hover:font-extrabold">(14) 99768-5642</a>
                <a href="tel:+551499768-5642" className="mx-3 font-bold text-xl md:text-2xl hover:text-action hover:font-extrabold">(14) 99672-1474</a>
                <a href="tel:+551499768-5642" className="mx-3 font-bold text-xl md:text-2xl hover:text-action hover:font-extrabold">(14) 13713-1879</a>
            </div>

            {/* Meio: Logo + mapa do site + endereços */}
            <Container>
                <div className="flex flex-col md:flex-row justify-around items-center gap-10 mb-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center md:items-start w-full">
                        <Image
                            src={logo}
                            alt="Logo Funerária Vida Plus"
                            width={150}
                            height={150}
                            className="mb-2"
                        />
                    </div>

                    {/* Mapa do site */}
                    <div className="text-center md:text-left w-full">
                        <h3 className="font-bold text-hover mb-2">Mapa do Site</h3>
                        <ul className="space-y-1">
                            <li><Link href="/" className="hover:text-hover hover:underline">Home</Link></li>
                            <li><Link href="/service" className="hover:text-hover hover:underline">Planos</Link></li>
                            <li><Link href="/contact" className="hover:text-hover hover:underline">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Endereços */}
                    <div className="text-center md:text-left w-full">
                        <h3 className="font-bold text-hover mb-2">Endereços</h3>
                        <ul className="space-y-1 text-wrap">
                            <li className="my-2">Rua <strong>Juca Teodóro, 460-1, Centro, Próximo ao Asilo</strong> - Paranapanema, SP</li>
                            <li className="my-2">Rua <strong>Goiás, 101 - Bairro Santa Helena</strong> - Campos de Holambra II, Paranapanema, SP </li>
                        </ul>
                    </div>
                </div>
            </Container>

            {/* Base: Direitos e créditos */}
            <div className="border-t border-gray-300 pt-6 text-center">
                <p className="text-lg md:text-xl ">Todos os direitos reservados</p>
                <p className="text-lg md:text-xl ">© <strong>Funerária <span className="text-hover">Vida</span> <span className="text-gray-200 italic">Plus</span></strong></p>
                <p className="text-lg mt-2">
                    Desenvolvido por <a href="https://afonsodev.vercel.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Afonso Gesualdi</a>
                </p>
            </div>
        </footer>
    );
}