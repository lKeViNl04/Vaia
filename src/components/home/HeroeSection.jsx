export default function HeroeSection() {
    return (
    <section id="heroe" className="text-center py-24 md:py-48 relative bg-black/60 bg-blend-multiply bg-cover bg-center" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}/imgs/heroe-bg.webp')`}}>
        <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4">Tu Próximo Viaje, Perfectamente Organizado</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Vaia es la app todo-en-uno que simplifica la planificación de tus viajes. Desde hacer la valija inteligentemente hasta la creación de itinerarios, te tenemos cubierto.
            </p>
            <a href="#contact" className="inline-block bg-[#3f9798] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5ebabc] transition-colors mr-4">
                ¡Únete a la lista de espera!
            </a>
            <a href="#function" className="inline-block bg-transparent border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors">
                Ver Funcionalidades
            </a>
        </div>
    </section>
    );
}