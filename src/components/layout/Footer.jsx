import Reveal from '../ui/Reveal'

function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#111111] py-12 text-white">
      <Reveal className="section-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo Valeris Studio" className="h-16 w-auto object-contain" />
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.2em] text-white sm:text-3xl">
              Valeris Studio
            </p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/[0.68]">
            Diseño y desarrollo web para marcas que necesitan una presencia digital más cuidada,
            más estratégica y más alineada con su valor real.
          </p>
        </div>

        <div className="grid gap-2 text-sm text-white/[0.72]">
          <a href="mailto:info@valerisstudio.es" className="transition hover:text-white">
            info@valerisstudio.es
          </a>
          <a href="tel:+34672710040" className="transition hover:text-white">
            +34 672 710 040
          </a>
          <a href="https://instagram.com/valerisstudio" className="transition hover:text-white">
            Instagram / @valerisstudio
          </a>
          <p className="pt-3 text-white/[0.42]">
            © 2026 Valeris Studio. Todos los derechos reservados.
          </p>
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer
