export default function Footer() {
    return(
        <footer className="py-12 bg-black text-center text-gray-400">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0 mb-6">
                <a href="#about-us" className="hover:text-white">Sobre Nosotros</a>
                <a href="#contact" className="hover:text-white">Contacto</a>
                <a href="#" className="hover:text-white">Política de Privacidad</a>
                <a href="#" className="hover:text-white">Términos de Servicio</a>
            </div>
            <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook-f"></i></a>
            </div>
            <p>&copy; 2025 Vaia. Todos los derechos reservados.</p>
        </div>
    </footer>
    );
}