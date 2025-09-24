import { useState, useEffect } from 'react';

export default function AboutSection() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const slides = [
        {
            icon: 'fas fa-globe-americas',
            title: 'Nuestra Misión',
            content: 'Nuestra misión es empoderar a los viajeros, eliminando el estrés de la planificación y permitiéndoles disfrutar de cada momento de su aventura. Creemos que la planificación debe ser tan emocionante como el viaje en sí mismo.',
            type: 'text',
        },
        {
            icon: 'fas fa-hand-holding-heart',
            title: 'Nuestros Valores',
            content: [
                {
                    subtitle: 'Personalización:',
                    text: 'Cada viajero es único, y sus planes de viaje también deberían serlo.',
                },
                {
                    subtitle: 'Simplicidad:',
                    text: 'La tecnología debe simplificar la vida, no complicarla. Nos enfocamos en una experiencia de usuario limpia e intuitiva.',
                },
                {
                    subtitle: 'Innovación:',
                    text: 'Estamos constantemente buscando nuevas formas de mejorar la experiencia de viaje a través de la inteligencia artificial y la automatización.',
                },
            ],
            type: 'list',
        },
        {
            icon: 'fas fa-rocket',
            title: 'Nuestros Objetivos',
            content: 'Nuestro objetivo a corto plazo es lanzar un MVP con funcionalidades de empaque inteligente y planificador de actividades. A largo plazo, aspiramos a convertirnos en el compañero de viaje esencial para millones de personas en todo el mundo, añadiendo funcionalidades como recomendaciones de aprendizaje automático y una plataforma comunitaria.',
            type: 'text',
        },
    ];

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Efecto para el avance automático del carrusel cada 5 segundos
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="about-us" className="py-20 bg-black">
            <div className="container mx-auto px-6 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Sobre Nosotros</h2>
                
                <div id="about-us-carousel-container" className="relative max-w-4xl mx-auto h-96 overflow-hidden">
                    {/* Contenedor de los slides */}
                    <div id="about-us-carousel-slides" className="w-full h-full relative">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`
                                    absolute top-0 left-0 w-full h-full 
                                    transition-opacity duration-700 ease-in-out
                                    ${currentSlideIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                `}
                            >
                                <div className="flex justify-center mb-4">
                                    <i className={`${slide.icon} text-6xl text-[#3f9798]`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-[#3f9798] mb-4">{slide.title}</h3>
                                {slide.type === 'text' ? (
                                    <p className="max-w-3xl mx-auto text-lg text-gray-400">
                                        {slide.content}
                                    </p>
                                ) : (
                                    <ul className="max-w-3xl mx-auto space-y-4 text-lg text-gray-400">
                                        {slide.content.map((item, i) => (
                                            <li key={i}>
                                                <span className="font-semibold text-white">{item.subtitle}</span> {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Controles del carrusel */}
                    <button
                        id="about-us-prev-btn"
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-[#3f9798] hover:bg-white hover:bg-opacity-10 rounded-full transition-colors z-10"
                        onClick={prevSlide}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        id="about-us-next-btn"
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-[#3f9798] hover:bg-white hover:bg-opacity-10 rounded-full transition-colors z-10"
                        onClick={nextSlide}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}