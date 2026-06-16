# Tetsu Studio Landing Page

Landing page oficial para **Tetsu Studio** (鉄STUDIO / 哲STUDIO), una marca paraguas y un ecosistema unificado diseñado para agrupar y centralizar el desarrollo de diversas herramientas de software utilitario y proyectos personales bajo un mismo dominio.

##  Filosofía del Proyecto

Tetsu Studio se rige por un enfoque **minimalista y funcional**, priorizando:
- **Utilidad Pura**: Herramientas que hacen una sola cosa de manera excepcional, eliminando el ruido y la complejidad innecesaria.
- **Velocidad de Ejecución**: Optimizado al byte, sin dependencias pesadas, logrando cargas instantáneas.
- **Modularidad e Interfaz Unificada**: Compartir componentes de diseño comunes para ofrecer una experiencia técnica y visual coherente y consistente.

---

## 🛠️ Proyectos Integrados en el Ecosistema

1. **[Glimpse](https://github.com/azanardi/glimpse)**: Lector y gestor multidispositivo de libros digitales en formato EPUB y PDF, integrado con capacidades OCR.
2. **FitLab - Virtual Try On**: Generador inteligente de lookbooks para e-commerce que combina prendas y modelos mediante IA para fotos de catálogo fotorrealistas.
3. **OCR Scan**: Herramienta especializada en transcribir y recuperar textos de documentos escaneados de baja calidad para convertirlos a formatos limpios como PDF o EPUB.

---

## 💻 Características Técnicas de la Landing Page

Esta landing page se ha diseñado siguiendo principios modernos de desarrollo web con cero dependencias externas para garantizar el máximo rendimiento y fidelidad:
- **Estructura Semántica**: HTML5 accesible y estructurado.
- **CSS Avanzado**: Organizado en capas (`@layer reset, base, theme, components, utilities`) con variables de diseño, cuadrícula técnica adaptativa (dot grid) y visuales dinámicos de vidrio (glassmorphism).
- **Animaciones Nativas (Scroll-Driven)**: Transiciones e interfaces reveladas al hacer scroll implementadas con CSS nativo (`view()`).
- **Interactividad sin Librerías**: Interactividad interactiva y fluida en JavaScript puro (Vanilla JS), incluyendo:
  - **Glimpse**: Regla de lectura guiada ajustable por el cursor y cambio dinámico de tamaño de fuente.
  - **FitLab**: Selección de prendas simuladas y efecto de distorsión interactiva del lienzo representando visión computacional activa.
  - **OCR Scan**: Mapeo visual interactivo en tiempo real al pasar el cursor sobre las líneas del documento escaneado para ver su extracción en JSON.
- **Optimización de Compatibilidad**: Fallback inteligente programado con `IntersectionObserver` para navegadores que aún no soportan las animaciones de scroll de CSS nativo.

---

## 🚀 Cómo Ejecutar Localmente

Dado que el proyecto está desarrollado con tecnologías nativas de la web (HTML, CSS y JS vanila) sin compiladores, puedes ejecutarlo de varias maneras sencillas:

### Opción 1: Abrir directamente
Simplemente haz doble clic en `index.html` en tu navegador de preferencia.

### Opción 2: Usar un servidor local ligero
Para una experiencia óptima con recarga en vivo (Live Reloading), puedes iniciar un servidor HTTP básico:

**Con Python:**
```bash
python3 -m http.server 8000
```
Y abre `http://localhost:8000` en tu navegador.

**Con Node.js (live-server):**
```bash
npx live-server
```

---

## 📂 Estructura de Archivos

```text
tetsustudio_landing/
├── index.html        # Estructura y marcado semántico
├── index.css         # Estilos y tokens de diseño por capas
├── index.js          # Lógica interactiva y fallbacks
├── README.md         # Documentación del proyecto
└── .gitignore        # Exclusiones de control de versiones
```
