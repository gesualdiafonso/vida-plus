export default function About(){
    return(
        <main>
            <section className="bg-hero-about h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
                <div className="bg-secondary/60 w-1/2 p-10 rounded-lg">
                    <h1 className="text-4xl md:text-6xl text-center text-white font-bold">
                        Sobre Nós
                    </h1>
                    <p className="text-lg md:text-xl text-center text-white mt-4 px-4">
                        Conheça a história e os valores que nos movem.
                    </p>
                </div>
            </section>
        </main>
    )
}