import { useState, useEffect } from 'react';

export default function RecommendationSection() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const slides = [
        {
            title: 'París, Francia',
            description: 'La ciudad del amor, el arte y la gastronomía.',
            image: 'imgs/paris.webp',
        },
        {
            title: 'Kioto, Japón',
            description: 'Templos antiguos y serenos jardines te esperan.',
            image: 'imgs/kioto.webp',
        },
        {
            title: 'Roma, Italia',
            description: 'Historia e historia en cada esquina de la ciudad.',
            image: 'imgs/roma.webp',
        },
    ];

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Esta es la nueva sección que debes agregar
    useEffect(() => {
        // Establece el temporizador para cambiar de slide cada 5000ms (5 segundos)
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000); // Puedes ajustar este valor según prefieras

        // La función de limpieza que se ejecuta cuando el componente se desmonta.
        // Esto previene fugas de memoria.
        return () => clearInterval(intervalId);
    }, []); // El array de dependencias vacío asegura que el efecto se ejecute solo una vez.

    return (
        <section id="recommendation" className="py-20 bg-[#b5d3d6]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ciudades Recomendadas</h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">Inspírate para tu próxima aventura con nuestras selecciones destacadas.</p>
                
                <div id="cities-carousel-container" className="relative max-w-5xl mx-auto h-96 overflow-hidden">
                    <div id="cities-carousel-slides" className="w-full h-full relative">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`
                                    absolute top-0 left-0 w-full h-full 
                                    rounded-xl shadow-md overflow-hidden bg-cover bg-center 
                                    transition-opacity duration-700 ease-in-out
                                    ${currentSlideIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                `}
                                style={{ backgroundImage: `url('${slide.image}')` }}
                            >
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0)]"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                                    <h3 className="text-2xl font-bold mb-1">{slide.title}</h3>
                                    <p className="text-sm text-gray-300">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        id="cities-prev-btn"
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-[#3f9798] hover:bg-white hover:bg-opacity-10 rounded-full transition-colors z-10"
                        onClick={prevSlide}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        id="cities-next-btn"
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-[#3f9798] hover:bg-white hover:bg-opacity-10 rounded-full transition-colors z-10"
                        onClick={nextSlide}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                
                <a href="#" className="inline-block mt-12 bg-transparent border border-[#3f9798] text-[#3f9798] font-bold py-3 px-8 rounded-full hover:bg-[#3f9798] hover:text-white transition-colors">
                    Ver Más Destinos
                </a>
            </div>
        </section>
    );
}