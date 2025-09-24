import { useState } from "react";
import NavLink from "./NavLink";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full flex py-4 px-4 sm:px-10 min-h-[70px] tracking-wide z-50 shadow-md bg-black/40 hover:bg-black/40">
            <nav className="flex flex-wrap items-center justify-between gap-5 w-full  ">
                {/* Logo de Vaia */}
                <a href="#heroe" className="text-2xl font-bold text-white">
                    <svg className="h-12 w-29 fill-white">
                        <use href="icons/Vaia-icon.svg" />
                    </svg>
                </a>

                {/* Contenedor del menú para móvil y desktop */}
                <div
                    id="collapseMenu"
                    className={`${isMenuOpen ? "block" : "hidden" } max-lg:fixed max-lg:bg-black/80 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-[500] lg:!block lg:items-center`}
                >
                    {/* Lista de enlaces de navegación sin clases de posicionamiento para móvil */}
                    <ul className="lg:flex gap-x-4 max-lg:space-y-3">
                        <NavLink to="#function">Funcionalidad</NavLink>
                        <NavLink to="#recommendation">Recomendacion</NavLink>
                        <NavLink to="#about-us">Sobre Nosotros</NavLink>
                        <NavLink to="#contact">Contacto</NavLink>
                    </ul>
                </div>

                {/* Contenedor del botón "Comenzar" */}
                <div className="hidden lg:flex flex-shrink-0">
                    <a
                        href="#contact"
                        className="px-4 py-2 bg-[#3f9798] text-white rounded-full hover:bg-[#5ebabc] transition-colors"
                    >
                        Comenzar
                    </a>
                </div>

                <div className="flex items-center space-x-4 relative w-12 h-12 lg:hidden">
                    <button
                        id="toggleOpen"
                        onClick={handleToggleMenu}
                        className={`lg:hidden absolute inset-0 transition-all duration-300 ${isMenuOpen
                            ? "opacity-0 scale-90 pointer-events-none"
                            : "opacity-100 scale-100"
                            }`}
                    >
                        <svg className="w-12 h-12 fill-white hover:fill-accent-green">
                            <use href={`icons/sprite.svg#BurguerMenu`} />
                        </svg>
                    </button>
                    <button
                        id="toggleClose"
                        onClick={handleToggleMenu}
                        className={`lg:hidden absolute right-0 top-0 transition-all duration-300 z-[600] ${isMenuOpen
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90 pointer-events-none"
                            }`}
                    >
                        <svg className="w-8 h-8 fill-red-600">
                            <use href={`icons/sprite.svg#Equis`} />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
        
    );
}