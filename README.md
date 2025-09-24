# 🌍 Vaia - Tu Próximo Viaje, Perfectamente Organizado

Una aplicación web moderna para la planificación inteligente de viajes, desarrollada con React y diseñada para simplificar cada aspecto de tu experiencia de viaje.

## ✨ Características Principales

### 🎯 Funcionalidades Core
- **Empaque Inteligente**: Lista de equipaje personalizada según clima y actividades [1](#0-0) 
- **Planificador de Actividades**: Mapa interactivo con lugares turísticos y restaurantes [2](#0-1) 
- **Recordatorios Inteligentes**: Notificaciones para empaque, clima y documentos [3](#0-2) 
- **Perfil Personalizado**: Sistema que aprende tus preferencias de viaje [4](#0-3) 
- **Escalabilidad Total**: Adaptable a viajes de negocios, familiares o de placer [5](#0-4) 
- **Interfaz Intuitiva**: Diseño limpio centrado en la experiencia del usuario [6](#0-5) 

## 🏗️ Arquitectura del Proyecto

### Estructura de Componentes
```
src/
├── components/
│   ├── header/
│   │   ├── Header.jsx          # Navegación principal
│   │   └── NavLink.jsx         # Enlaces de navegación
│   ├── home/
│   │   ├── HeroeSection.jsx    # Banner principal
│   │   ├── FunctionSection.jsx # Grid de funcionalidades
│   │   ├── RecommendationSection.jsx # Carrusel de destinos
│   │   ├── AboutSetcion.jsx    # Información de la empresa
│   │   └── ContactSection.jsx  # Formulario de lista de espera
│   └── Footer/
│       └── Footer.jsx          # Pie de página
├── pages/
│   ├── Home.jsx               # Página principal
│   └── Error.jsx              # Página 404
└── App.jsx                    # Componente raíz con routing
```

### Sistema de Navegación
La aplicación utiliza React Router con una estructura simple: [7](#0-6) 
- **Ruta principal** (`/`): Página de inicio completa
- **Ruta catch-all** (`*`): Página de error 404

## 🎨 Diseño y UI

### Paleta de Colores
- **Color principal**: `#3f9798` (Verde azulado)
- **Color hover**: `#5ebabc` (Verde azulado claro)
- **Color de fondo**: `#b5d3d6` (Azul grisáceo claro)

### Secciones de la Página Principal
1. **Hero Section**: Banner con llamadas a la acción [8](#0-7) 
2. **Function Section**: Grid responsivo de 6 funcionalidades [9](#0-8) 
3. **Recommendation Section**: Carrusel automático de destinos
4. **About Section**: Carrusel con misión, valores y objetivos
5. **Contact Section**: Formulario de lista de espera [10](#0-9) 

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18+ con Hooks
- **Routing**: React Router DOM
- **Estilos**: Tailwind CSS
- **Iconos**: Font Awesome
- **Estado**: React useState para manejo local

## 📱 Características Responsivas

- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Navegación Adaptativa**: Menú hamburguesa en móviles [11](#0-10) 
- **Grid Responsivo**: Funcionalidades se adaptan de 1 a 3 columnas
- **Tipografía Escalable**: Texto que se ajusta según el tamaño de pantalla

## 🔧 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/lKeViNl04/Vaia.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Construir para producción
npm run build
```

## 📋 Estado del Proyecto

**Estado**: En desarrollo - Lista de espera activa

La aplicación actualmente recopila emails para una lista de espera. El formulario de contacto maneja el estado localmente sin integración backend. [12](#0-11) 

## 🎯 Próximos Pasos

- Integración con backend para manejo de formularios
- Implementación de funcionalidades de planificación
- Sistema de autenticación de usuarios
- API de recomendaciones de viaje

---

**Vaia** - Simplificando la planificación de viajes, una funcionalidad a la vez.

## Notes

El repositorio muestra una aplicación web de una sola página (SPA) bien estructurada con componentes modulares. La aplicación está en fase de pre-lanzamiento, recopilando interés a través de una lista de espera. El código está completamente en español, incluyendo comentarios y contenido, lo que sugiere un enfoque en el mercado hispanohablante. <cite/>

Wiki pages you might want to explore:
- [Routing and Navigation (lKeViNl04/Vaia)](/wiki/lKeViNl04/Vaia#3.1)
- [Home Page Sections (lKeViNl04/Vaia)](/wiki/lKeViNl04/Vaia#4.2)
