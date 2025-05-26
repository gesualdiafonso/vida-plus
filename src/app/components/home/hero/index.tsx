export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden group">
            {/* Vídeo de fundo */}
            <video
            src="../../assets/video/video_vidaplus.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-cover w-full h-full"
            />
            {/* Overlay escuro */}
            {/* <div className="absolute inset-0 bg-black/50" /> */}
    
            {/* Conteúdo visível no hover */}
            <div className="absolute inset-0 bg-black/50 p-5 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-white">Funerária Vida Plus</h1>
                    <p className="mt-4 text-lg text-white">
                        Oferecemos serviços funerários com acolhimento e simplicidade.
                    </p>
                    <button className="px-4 py-2 mt-4 text-lg text-white bg-blue-600 rounded hover:bg-blue-700">
                        Saiba mais
                    </button>
                </div>
            </div>
        </section>
    );
}