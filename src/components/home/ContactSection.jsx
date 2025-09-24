import { useState } from 'react';
export default function ContactSection() {
    // Estado para rastrear si el formulario ha sido enviado
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Manejador del envío del formulario
    const handleSubmit = (event) => {
        // Previene el comportamiento por defecto de la página de recargarse
        event.preventDefault();
        
        // Aquí podrías enviar el email a un servidor
        // Por ahora, solo actualizamos el estado para mostrar el mensaje
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="py-20 bg-[#b5d3d6] text-center">
            <div className="container mx-auto px-6">
                {isSubmitted ? (
                    // Muestra este bloque si el formulario ha sido enviado
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#3f9798]">¡Gracias por tu interés!</h3>
                        <p className="text-gray-700">Te has unido a nuestra lista de espera y serás el primero en recibir noticias y acceso anticipado.</p>
                    </div>
                ) : (
                    // Muestra este bloque si el formulario aún no ha sido enviado
                    <>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">¿Listo para tu Próxima Aventura?</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Únete a nuestra lista de espera y sé el primero en probar la aplicación. Te enviaremos actualizaciones exclusivas y acceso anticipado.
                        </p>
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                                <input
                                    type="email"
                                    placeholder="Ingresa tu email"
                                    className="w-full md:w-auto flex-grow p-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f9798] text-gray-900"
                                    required
                                />
                                <button type="submit" className="w-full md:w-auto bg-[#3f9798] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5ebabc] transition-colors">
                                    ¡Únete a la lista de espera!
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}