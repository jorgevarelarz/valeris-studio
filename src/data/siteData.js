import {
  ArrowUpRight,
  Gauge,
  LayoutTemplate,
  LifeBuoy,
  MapPinned,
  RefreshCw,
  Search,
  Smartphone,
  Sparkles,
  Target,
} from 'lucide-react'

export const navItems = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Valeris x Row', href: '/valeris-row' },
  { label: 'Valor', href: '/por-que-valeris' },
  { label: 'Proceso', href: '/proceso' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Estudio', href: '/estudio' },
]

export const services = [
  {
    title: 'Diseño y desarrollo web',
    description:
      'Sitios corporativos a medida con una dirección visual sólida y una base técnica preparada para crecer.',
    icon: Sparkles,
  },
  {
    title: 'Landing pages de alta conversión',
    description:
      'Páginas pensadas para campañas, captación y ventas con una jerarquía clara y mensajes enfocados en acción.',
    icon: LayoutTemplate,
  },
  {
    title: 'Webs para negocios locales',
    description:
      'Presencia digital profesional para restaurantes, clínicas, despachos y marcas que necesitan destacar en su zona.',
    icon: MapPinned,
  },
  {
    title: 'Rediseño de páginas existentes',
    description:
      'Replanteamos webs desactualizadas para mejorar imagen, experiencia de usuario y percepción de valor.',
    icon: RefreshCw,
  },
  {
    title: 'Mantenimiento y soporte',
    description:
      'Acompañamiento continuo para mantener tu web cuidada, estable y lista para evolucionar sin fricciones.',
    icon: LifeBuoy,
  },
  {
    title: 'SEO básico y rendimiento',
    description:
      'Optimización inicial de estructura, velocidad y fundamentos técnicos para mejorar visibilidad y experiencia.',
    icon: Search,
  },
  {
    title: 'Webs con inteligencia integrada',
    description:
      'Algunas webs necesitan algo más que diseño y desarrollo. Integramos asistentes, automatizaciones y sistemas inteligentes para mejorar atención, captación y eficiencia.',
    subservices: [
      'Asistentes web para resolver dudas frecuentes',
      'Automatización de formularios y captación',
      'Filtrado inteligente de leads',
      'Integración con WhatsApp, correo o CRM',
      'Sistemas personalizados según el flujo del negocio',
    ],
    icon: Sparkles,
  },
]

export const benefits = [
  {
    title: 'Diseño premium y a medida',
    description:
      'Cada proyecto responde a una marca concreta, sin soluciones genéricas ni estructuras intercambiables.',
    icon: Sparkles,
  },
  {
    title: 'Webs rápidas y optimizadas',
    description:
      'Priorizamos rendimiento, claridad visual y una experiencia ágil desde el primer segundo.',
    icon: Gauge,
  },
  {
    title: 'Adaptación total a móvil',
    description:
      'La experiencia se diseña pensando en móvil, tablet y desktop con el mismo nivel de detalle.',
    icon: Smartphone,
  },
  {
    title: 'Imagen profesional de marca',
    description:
      'Una web mejor diseñada mejora percepción, confianza y coherencia en todos los puntos de contacto.',
    icon: ArrowUpRight,
  },
  {
    title: 'Enfoque en conversión',
    description:
      'Ordenamos el contenido para guiar al usuario, reducir fricción y favorecer solicitudes reales.',
    icon: Target,
  },
  {
    title: 'Trato cercano y personalizado',
    description:
      'Procesos claros, comunicación directa y decisiones de diseño alineadas con tus objetivos.',
    icon: LifeBuoy,
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Estrategia',
    description:
      'Analizamos tu negocio, tu posicionamiento y qué debe conseguir la web antes de diseñar nada.',
  },
  {
    number: '02',
    title: 'Diseño',
    description:
      'Creamos una propuesta visual elegante, clara y coherente con la percepción que quieres proyectar.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description:
      'Convertimos el diseño en una experiencia rápida, responsive y técnicamente limpia. Cuando el proyecto lo necesita, definimos también automatizaciones o asistentes que complementan la web y mejoran la captación o la atención.',
  },
  {
    number: '04',
    title: 'Lanzamiento y soporte',
    description:
      'Publicamos, revisamos detalles clave y dejamos la base lista para seguir creciendo con orden.',
  },
]

// `url` y `shot` son opcionales: `url` pinta el enlace «Ver web» y `shot` la captura
// de la home. Las capturas viven en /projects/shots/<nombre>.jpg.
export const portfolioProjects = [
  {
    name: 'Noma Club',
    category: 'Sala de conciertos y restaurante',
    description:
      'Web completa para un espacio de música en vivo y hostelería: programación de eventos, formulario de captación para artistas y cartas de menú integradas.',
    impact: 'Presencia digital coherente con la identidad del espacio, con mejor captación de artistas y más visibilidad de la oferta gastronómica.',
    logo: '/projects/noma-logo.png',
  },
  {
    name: 'TiendaFactu',
    category: 'Producto propio · Plugin de facturación',
    description:
      'Plugin de Veri*factu para WooCommerce, publicado en el repositorio oficial de WordPress.org: registro de facturas ante la AEAT, alta automática de clientes y panel para gestorías.',
    impact: 'Producto propio en producción, con web, checkout y soporte funcionando de punta a punta.',
    url: 'https://tiendafactu.es',
    shot: '/projects/shots/tiendafactu.jpg',
  },
  {
    name: 'Permiso VTC Madrid',
    category: 'Producto propio · Formación online',
    description:
      'Plataforma de preparación del examen oficial de conductor VTC de la Comunidad de Madrid: banco de preguntas, simulacros cronometrados y explicaciones razonadas.',
    impact: 'De la idea al producto cobrando en semanas, con analítica y pasarela de pago integradas.',
    url: 'https://permisovtc.es',
    shot: '/projects/shots/permisovtc.jpg',
  },
  {
    name: 'Mave Studio',
    category: 'Estudio de fotografía',
    description:
      'Web del estudio y migración completa de su alojamiento y su correo a servidor propio, con certificado con SAN, SPF y DNS saneados.',
    impact: 'Web y correo bajo control, sin depender de la agencia anterior ni de su infraestructura.',
    url: 'https://mavestudio.es',
    shot: '/projects/shots/mavestudio.jpg',
  },
  {
    name: 'IHA Race',
    category: 'Tienda online especializada',
    description:
      'Rediseño visual de la home de una tienda WooCommerce de material FPV y drones, con nueva estructura, jerarquía de categorías y componentes editables desde Elementor.',
    impact: 'Home más clara y comercial, con mejor recorrido hacia las categorías clave y mayor coherencia visual de marca.',
    logo: '/projects/iha-logo.png',
  },
  {
    name: 'Valeris Hosting',
    category: 'Producto propio · Plataforma',
    description:
      'Panel de alojamiento gestionado con portal de cliente, despliegue por releases con rollback automático y comprobación de salud en cada publicación.',
    impact: 'Infraestructura propia para alojar y mantener los proyectos de los clientes sin intermediarios.',
    url: 'https://hosting.valerisstudio.es',
    shot: '/projects/shots/hosting.jpg',
  },
  {
    name: 'EDER',
    category: 'Restaurante · Campaña',
    description:
      'Campaña de sorteo «Viaja gratis con EDER» sobre su WordPress: landing, popup de captación y formulario conectados, montados sin tocar el tema del sitio.',
    impact: 'Una acción de captación de leads en marcha sobre una web que ya estaba en producción.',
    url: 'https://eder.gal/gana-viaje-gratis-eder/',
    shot: '/projects/shots/eder.jpg',
  },
  {
    name: 'Mussvap',
    category: 'Marca de vapeadores',
    description:
      'Landing page de captación, corrección de errores técnicos y actualización de páginas para una marca de vapeadores con presencia digital activa.',
    impact: 'Web más sólida y una landing más efectiva que mejora la primera impresión y el recorrido hacia compra o contacto.',
    logo: '/projects/mussvap-logo.png',
  },
]

export const testimonials = [
  {
    quote:
      'Necesitábamos una web que transmitiera un nivel más alto de marca. El resultado fue limpio, elegante y muy fácil de presentar a clientes.',
    author: 'Marta Rivas',
    role: 'Directora, Rivas & Co.',
  },
  {
    quote:
      'Valeris Studio entendió rápido qué debíamos comunicar y ordenó todo el proyecto con mucho criterio. La diferencia frente a nuestra web anterior es evidente.',
    author: 'Javier Ortega',
    role: 'Socio, Ortega Legal',
  },
  {
    quote:
      'El proceso fue claro de principio a fin. Se nota que hay una intención estratégica detrás del diseño, no solo una capa estética.',
    author: 'Claudia Serrano',
    role: 'Fundadora, Serra Clinic',
  },
]

export const serviceFaqs = [
  {
    question: '¿Qué tipo de proyectos hace Valeris Studio?',
    answer:
      'Diseñamos y desarrollamos webs premium para marcas, negocios locales, clínicas, despachos, restaurantes, portfolios y proyectos que necesitan una presencia digital más fuerte.',
  },
  {
    question: '¿Solo hacéis diseño o también desarrollo web?',
    answer:
      'Trabajamos la parte visual, la estructura, el copy y el desarrollo frontend para entregar una web lista para publicarse y crecer con una base técnica limpia.',
  },
  {
    question: '¿Podéis rediseñar una web que ya existe?',
    answer:
      'Sí. Replanteamos webs desactualizadas para mejorar percepción de marca, claridad, recorrido de usuario y capacidad de captación.',
  },
  {
    question: '¿Trabajáis landings y webs orientadas a conversión?',
    answer:
      'Sí. Diseñamos landing pages, webs corporativas y páginas de captación con jerarquía clara, mensajes directos y estructura enfocada en contacto o venta.',
  },
  {
    question: '¿Integráis automatizaciones o asistentes en la web?',
    answer:
      'Cuando el proyecto lo necesita, integramos asistentes, automatizaciones y sistemas inteligentes para mejorar atención, filtrado de leads y eficiencia.',
  },
  {
    question: '¿Se puede contactar por WhatsApp o correo?',
    answer:
      'Sí. Puedes escribir a info@valerisstudio.es o abrir conversación directa por WhatsApp en el 672 710 040.',
  },
]
