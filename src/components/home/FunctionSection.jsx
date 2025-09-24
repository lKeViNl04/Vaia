export default function FunctionSection() {
    const features = [
        {
            icon: 'fas fa-box-open',
            title: 'Empaque Inteligente',
            description: 'Obtén una lista de equipaje según el clima y las actividades. Nunca más empaques de más o de menos.'
        },
        {
            icon: 'fas fa-map-marked-alt',
            title: 'Planificador de Actividades',
            description: 'Descubre lugares turísticos, restaurantes y experiencias únicas en un mapa interactivo.'
        },
        {
            icon: 'fas fa-bell',
            title: 'Recordatorios de Viaje',
            description: 'Recibe notificaciones sobre cuándo empezar a empacar, revisar el clima y documentos importantes.'
        },
        {
            icon: 'fas fa-brain',
            title: 'Perfil de Usuario Inteligente',
            description: 'Tu perfil de gustos aprende de ti para ofrecer recomendaciones cada vez más personalizadas.'
        },
        {
            icon: 'fas fa-expand-arrows-alt',
            title: 'Escalabilidad y Personalización',
            description: 'Ya sea un viaje de negocios, un fin de semana o unas vacaciones familiares, Vaia se adapta a tu estilo de vida.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Confiable e Intuitivo',
            description: 'Disfruta de una interfaz limpia e intuitiva que se centra en la fluidez y simplicidad del viaje.'
        }
    ];

    return (
        <section id="function" className="py-20 bg-black">
            <div className="container mx-auto px-6 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Una App, Todas tus Necesidades de Viaje</h2>
                <p className="text-gray-400 mb-12 max-w-3xl mx-auto">Vaia agiliza tu viaje, haciendo que la planificación sea sencilla y sin estrés.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="p-8 rounded-lg flex flex-col items-center text-gray-800 bg-[#b5d3d6] transition-transform duration-300 hover:-translate-y-6 hover:shadow-xl"
                        >
                            <div className="mb-4 text-5xl text-[#3f9798]">
                                <i className={feature.icon}></i>
                            </div>
                            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
