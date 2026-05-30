import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { serviceFaqs, services } from '../../data/siteData'

const SITE_URL = 'https://valerisstudio.es'
const DEFAULT_IMAGE = `${SITE_URL}/social-card.png`
const DEFAULT_TITLE = 'Diseño Web en A Coruña | Valeris Studio'
const DEFAULT_DESCRIPTION =
  'Estudio de diseño y desarrollo web en A Coruña. Creamos webs premium para negocios locales, marcas y pymes de Galicia que necesitan una presencia digital más fuerte.'
const DEFAULT_KEYWORDS =
  'diseño web A Coruña, desarrollo web Galicia, agencia web A Coruña, diseño web Galicia, páginas web para negocios, estudio web Galicia, Valeris Studio'
const DEFAULT_ROBOTS = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

const routeSeo = {
  '/': {
    title: 'Diseño Web en A Coruña | Valeris Studio',
    description:
      'Estudio de diseño web en A Coruña. Webs premium para negocios locales, marcas y pymes de Galicia con una presencia digital elegante, rápida y que convierte.',
    keywords:
      'diseño web A Coruña, desarrollo web A Coruña, agencia web Galicia, páginas web negocios locales, estudio web Coruña',
    canonical: '/',
    robots: DEFAULT_ROBOTS,
    pageType: 'WebPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
    ],
  },
  '/acceso': {
    title: 'Acceso | Valeris Studio',
    description:
      'Puerta de entrada a Valeris Studio, estudio especializado en diseño y desarrollo web con dirección visual fuerte.',
    canonical: '/',
    robots: 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    pageType: 'WebPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
    ],
  },
  '/servicios': {
    title: 'Servicios de Diseño Web en A Coruña | Valeris Studio',
    description:
      'Diseño web, landings de conversión, rediseños, mantenimiento y webs con IA para negocios en A Coruña y Galicia. Presupuesto sin compromiso.',
    keywords:
      'servicios diseño web A Coruña, desarrollo web Galicia, landing pages, rediseño web, agencia web Coruña',
    canonical: '/servicios',
    pageType: 'CollectionPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Servicios', path: '/servicios' },
    ],
  },
  '/valeris-row': {
    title: 'Valeris x Row | Identidad visual y experiencia digital',
    description:
      'Colaboración entre Row y Valeris Studio para proyectos que necesitan identidad visual sólida y una web a la altura.',
    keywords:
      'Valeris x Row, branding y web, identidad visual, experiencia digital, colaboración creativa',
    canonical: '/valeris-row',
    pageType: 'WebPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Valeris x Row', path: '/valeris-row' },
    ],
  },
  '/por-que-valeris': {
    title: 'Por qué Valeris | Webs con dirección visual y estrategia',
    description:
      'Webs rápidas, pensadas para conversión y diseñadas para reforzar la percepción de marca con una dirección visual clara.',
    keywords:
      'por qué valeris, diseño web estratégico, webs rápidas, diseño responsive, conversión web, imagen de marca',
    canonical: '/por-que-valeris',
    pageType: 'WebPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Valor', path: '/por-que-valeris' },
    ],
  },
  '/proceso': {
    title: 'Proceso de trabajo | Valeris Studio',
    description:
      'Estrategia, diseño, desarrollo y lanzamiento en un proceso claro para crear webs premium con criterio y estructura.',
    keywords:
      'proceso diseño web, estrategia web, desarrollo web premium, lanzamiento web, estudio web',
    canonical: '/proceso',
    pageType: 'WebPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Proceso', path: '/proceso' },
    ],
  },
  '/proyectos': {
    title: 'Proyectos web | Valeris Studio',
    description:
      'Selección de proyectos web con enfoque editorial, presencia visual fuerte y estructura pensada para captar mejor.',
    keywords:
      'proyectos web, portfolio web, casos web, diseño web editorial, webs para marcas',
    canonical: '/proyectos',
    pageType: 'CollectionPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Proyectos', path: '/proyectos' },
    ],
  },
  '/testimonios': {
    title: 'Testimonios | Valeris Studio',
    description:
      'Lo que cambia no es solo la web: mejora la percepción de marca, la claridad del proyecto y la confianza.',
    keywords:
      'testimonios diseño web, opiniones clientes, estudio web premium, percepción de marca',
    canonical: '/testimonios',
    pageType: 'CollectionPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Testimonios', path: '/testimonios' },
    ],
  },
  '/estudio': {
    title: 'Estudio de Diseño Web en A Coruña | Valeris Studio',
    description:
      'Somos un estudio de diseño y desarrollo web en A Coruña. Trabajamos con negocios locales y marcas de Galicia que quieren destacar online.',
    keywords:
      'estudio diseño web A Coruña, agencia web Galicia, diseñador web Coruña, Valeris Studio',
    canonical: '/estudio',
    pageType: 'AboutPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Estudio', path: '/estudio' },
    ],
  },
  '/contacto': {
    title: 'Presupuesto Diseño Web A Coruña | Valeris Studio',
    description:
      'Solicita presupuesto para tu web en A Coruña o Galicia. Contacta con Valeris Studio por WhatsApp o correo y cuéntanos tu proyecto.',
    keywords:
      'presupuesto diseño web A Coruña, contacto agencia web Galicia, crear web A Coruña, solicitar web',
    canonical: '/contacto',
    pageType: 'ContactPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Contacto', path: '/contacto' },
    ],
  },
  '/gracias': {
    title: 'Gracias | Valeris Studio',
    description:
      'Gracias por contactar con Valeris Studio. Ya tenemos registrada tu solicitud y seguimos la conversación por el canal elegido.',
    keywords:
      'gracias valeris studio, solicitud enviada, contacto diseño web, presupuesto web enviado',
    canonical: '/gracias',
    pageType: 'WebPage',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Gracias', path: '/gracias' },
    ],
  },
}

function upsertMeta(attribute, key, content) {
  let node = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(attribute, key)
    document.head.appendChild(node)
  }

  node.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`)

  if (!node) {
    node = document.createElement('link')
    node.setAttribute('rel', rel)
    document.head.appendChild(node)
  }

  node.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let node = document.head.querySelector(`script[data-seo="${id}"]`)

  if (!node) {
    node = document.createElement('script')
    node.type = 'application/ld+json'
    node.dataset.seo = id
    document.head.appendChild(node)
  }

  node.textContent = JSON.stringify(data)
}

function buildBreadcrumbSchema(items) {
  if (!items?.length) {
    return null
  }

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

function buildRouteSchema(pathname, seo, url) {
  const baseGraph = [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: 'Valeris Studio',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/social-card.png`,
      email: 'info@valerisstudio.es',
      telephone: '+34672710040',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'A Coruña',
        addressRegion: 'Galicia',
        addressCountry: 'ES',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.3623,
        longitude: -8.4115,
      },
      areaServed: [
        { '@type': 'City', name: 'A Coruña' },
        { '@type': 'AdministrativeArea', name: 'Galicia' },
        { '@type': 'Country', name: 'España' },
      ],
      sameAs: [],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'info@valerisstudio.es',
          telephone: '+34672710040',
          availableLanguage: 'es',
          areaServed: 'ES',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Valeris Studio',
      inLanguage: 'es-ES',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
    {
      '@type': seo.pageType || 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      inLanguage: 'es-ES',
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ]

  const breadcrumbSchema = buildBreadcrumbSchema(seo.breadcrumb)

  if (breadcrumbSchema) {
    baseGraph.push(breadcrumbSchema)
  }

  if (pathname === '/servicios') {
    baseGraph.push({
      '@type': 'ItemList',
      name: 'Servicios de Valeris Studio',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: {
            '@id': `${SITE_URL}/#organization`,
          },
          areaServed: 'ES',
        },
      })),
    })

    baseGraph.push({
      '@type': 'FAQPage',
      mainEntity: serviceFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  }

  if (pathname === '/contacto') {
    baseGraph.push({
      '@type': 'ContactPage',
      name: 'Contacto Valeris Studio',
      url,
      mainEntity: {
        '@id': `${SITE_URL}/#organization`,
      },
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': baseGraph,
  }
}

function SeoHead() {
  const { pathname } = useLocation()
  const seo = routeSeo[pathname] || routeSeo['/']

  useEffect(() => {
    const canonicalPath = seo.canonical || pathname
    const url = `${SITE_URL}${canonicalPath}`

    document.title = seo.title || DEFAULT_TITLE

    upsertMeta('name', 'description', seo.description || DEFAULT_DESCRIPTION)
    upsertMeta('name', 'keywords', seo.keywords || DEFAULT_KEYWORDS)
    upsertMeta('name', 'robots', seo.robots || DEFAULT_ROBOTS)
    upsertMeta('name', 'author', 'Valeris Studio')
    upsertMeta('name', 'theme-color', '#111111')

    upsertMeta('property', 'og:title', seo.title || DEFAULT_TITLE)
    upsertMeta('property', 'og:description', seo.description || DEFAULT_DESCRIPTION)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'es_ES')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:site_name', 'Valeris Studio')
    upsertMeta('property', 'og:image', DEFAULT_IMAGE)
    upsertMeta('property', 'og:image:secure_url', DEFAULT_IMAGE)
    upsertMeta('property', 'og:image:alt', 'Logo de Valeris Studio sobre fondo blanco')
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '630')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title || DEFAULT_TITLE)
    upsertMeta('name', 'twitter:description', seo.description || DEFAULT_DESCRIPTION)
    upsertMeta('name', 'twitter:image', DEFAULT_IMAGE)
    upsertMeta('name', 'twitter:image:alt', 'Logo de Valeris Studio sobre fondo blanco')

    upsertLink('canonical', url)
    upsertJsonLd('route-schema', buildRouteSchema(pathname, seo, url))
  }, [pathname, seo])

  return null
}

export default SeoHead
