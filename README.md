# Valeris Studio — valerisstudio.es

Web de Valeris Studio, estudio de diseño y desarrollo web premium. Desplegada en [valerisstudio.es](https://valerisstudio.es) vía Vercel.

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework UI | React 19 |
| Bundler | Vite 8 |
| Routing | React Router v7 |
| Estilos | Tailwind CSS 3 |
| Iconos | lucide-react |
| Despliegue | Vercel (CLI, sin CI/CD automático) |

---

## Cómo correr en local

```bash
npm install
npm run dev
```

Para generar el build de producción:

```bash
npm run build
npm run preview   # sirve el build en local
```

---

## Estructura de archivos

```
src/
├── App.jsx                  # Raíz: rutas, layout global, scroll-to-top
├── main.jsx                 # Punto de entrada React
├── index.css                # Estilos globales (Tailwind base + custom)
├── data/
│   └── siteData.js          # Toda la información del sitio (textos, servicios, proyectos…)
└── components/
    ├── layout/
    │   ├── Navbar.jsx       # Barra de navegación superior
    │   └── Footer.jsx       # Pie de página
    ├── seo/
    │   └── SeoHead.jsx      # Meta tags dinámicos + JSON-LD por ruta
    ├── sections/            # Una sección = una página (ver rutas)
    │   ├── Hero.jsx         # Página principal /
    │   ├── Services.jsx     # /servicios
    │   ├── Benefits.jsx     # /por-que-valeris
    │   ├── Process.jsx      # /proceso
    │   ├── Portfolio.jsx    # /proyectos
    │   ├── Testimonials.jsx # /testimonios
    │   ├── About.jsx        # /estudio
    │   ├── ValerisRow.jsx   # /valeris-row
    │   ├── FinalCta.jsx     # /contacto
    │   ├── Thanks.jsx       # /gracias
    │   └── IntroGate.jsx    # /acceso (puerta de entrada privada)
    └── ui/
        ├── ContactOptionsModal.jsx  # Modal flotante WhatsApp / email
        ├── HorizontalWheel.jsx      # Carrusel horizontal con scroll
        ├── ImageCarousel.jsx        # Carrusel de imágenes
        ├── Reveal.jsx               # Wrapper de animación al hacer scroll
        ├── SectionHeading.jsx       # Cabecera de sección reutilizable
        └── Sticker.jsx              # Elemento decorativo tipo etiqueta
```

---

## Rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Hero` | Portada principal con overlay de entrada |
| `/servicios` | `Services` | Servicios ofrecidos + FAQ |
| `/por-que-valeris` | `Benefits` | Razones diferenciales |
| `/proceso` | `Process` | Pasos del proceso de trabajo |
| `/proyectos` | `Portfolio` | Proyectos realizados |
| `/testimonios` | `Testimonials` | Opiniones de clientes |
| `/estudio` | `About` | Información sobre el estudio |
| `/valeris-row` | `ValerisRow` | Propuesta "Valeris × Row" |
| `/contacto` | `FinalCta` | CTA final de contacto |
| `/gracias` | `Thanks` | Página de confirmación post-contacto |
| `/acceso` | `IntroGate` | Puerta de entrada (sin Navbar) |
| `/inicio` | redirect → `/` | Redirección permanente vía Vercel |

El SPA está configurado en `vercel.json` con un rewrite `/(.*) → /index.html` para que React Router gestione todas las rutas en cliente.

---

## Overlay de entrada (splash screen)

Al cargar `/` por primera vez aparece un overlay a pantalla completa con:
- Fondo GIF (`/entry-bg.gif`)
- Logo y nombre del estudio
- Ventana con el mensaje "ESTÁS A PUNTO DE CONSEGUIR TU MEJOR WEB"
- Botón "Entrar" que cierra el overlay y muestra la web

El overlay está implementado directamente en el `index.html` con CSS y JS inline (sin esperar a que cargue React) para evitar cualquier flash o retraso. Se muestra solo en `/`, no en el resto de rutas.

---

## Datos del sitio (`siteData.js`)

Toda la información de contenido está centralizada en `src/data/siteData.js`:

- `navItems` — links de la barra de navegación
- `services` — lista de servicios con título, descripción e icono
- `benefits` — ventajas diferenciales
- `processSteps` — pasos del proceso (Estrategia → Diseño → Desarrollo → Lanzamiento)
- `portfolioProjects` — proyectos con nombre, categoría, descripción e impacto
- `testimonials` — citas de clientes con autor y cargo
- `serviceFaqs` — preguntas frecuentes sobre servicios

Para cambiar textos, precios o añadir proyectos, **este es el único archivo que hay que editar**.

---

## SEO

`SeoHead.jsx` genera meta tags dinámicos por ruta (title, description, og:*, twitter:*) y datos estructurados JSON-LD (`WebSite`, `Organization`). Los valores por defecto están hardcodeados en el componente y se sobreescriben con props por ruta donde sea necesario.

---

## Despliegue

La web está desplegada en Vercel bajo el proyecto `valeris-studio` (cuenta `jorgevarelarz`).

Para desplegar cambios:

```bash
vercel                  # preview
vercel --prod           # producción
```

No hay GitHub Actions ni integración continua. El deploy se lanza manualmente desde CLI.

---

## Contacto del estudio

- Email: info@valerisstudio.es
- WhatsApp: 672 710 040
- Web: [valerisstudio.es](https://valerisstudio.es)
