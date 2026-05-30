import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'

function ValerisRow() {
  return (
    <section className="flex min-h-[calc(100svh-5rem)] items-start overflow-hidden bg-[#050505] px-4 py-5 lg:h-full lg:items-center lg:py-4">
      <div className="w-full px-5 md:px-6">
        <Reveal className="h-full">
          <div className="relative grid h-full overflow-hidden border border-[#1f1f1f] bg-[#050505] text-[#f3f3f3] lg:grid-cols-[1.1fr_0.9fr]">
            <img
              src="/valeris-row-bg.gif"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.22]"
            />
            <div className="absolute inset-0 bg-[#050505]/82" />

            <div className="relative flex flex-col justify-between border-b border-[#1f1f1f] px-5 py-6 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-8">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/58">
                  Collaborative format
                </p>

                <h1 className="mt-5 font-display text-[3rem] uppercase leading-[0.86] tracking-[-0.06em] sm:text-[4.25rem] lg:text-[6.5rem]">
                  <span className="text-[#ff3b30]">Valeris</span>
                  <span className="px-2 text-[#f3f3f3]">x</span>
                  <span className="text-[#2d5bff]">Row</span>
                </h1>

                <div className="mt-5 h-px w-full bg-[#1f1f1f]">
                  <div className="h-full w-full bg-gradient-to-r from-[#ff3b30] via-[#f3f3f3] to-[#2d5bff]" />
                </div>

                <h2 className="mt-6 max-w-3xl font-display text-2xl uppercase leading-[0.94] tracking-[-0.04em] text-[#f3f3f3] sm:text-3xl lg:text-[2.7rem]">
                  Identidad visual y experiencia digital dentro de una misma direccion
                </h2>

                <div className="mt-6 max-w-3xl space-y-4 text-sm leading-6 text-[#f3f3f3] sm:text-base">
                  <p>Algunos proyectos necesitan algo mas que una web.</p>
                  <p>Necesitan una identidad solida detras y una presencia digital a la altura.</p>
                  <p>
                    Para esos casos, Valeris y Row colaboran en una direccion compartida: Row trabaja la identidad visual y el sistema de marca; Valeris la traduce a estructura, experiencia y desarrollo web.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/contacto"
                  className="secondary-button gap-2 border-[#1f1f1f] bg-transparent text-[#f3f3f3] hover:border-white hover:bg-white hover:text-black"
                >
                  Explorar colaboracion
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative grid content-center gap-4 px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
              <article className="border border-[#1f1f1f] bg-black px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-[#2d5bff]/60">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#2d5bff]">
                  Row
                </p>
                <div className="mt-5 grid gap-0 border-y border-[#1f1f1f] text-sm font-semibold uppercase tracking-[0.14em] text-[#f3f3f3]">
                  <p className="border-b border-[#1f1f1f] py-3">Identidad visual</p>
                  <p className="border-b border-[#1f1f1f] py-3">Sistema grafico</p>
                  <p className="py-3">Direccion de marca</p>
                </div>
              </article>

              <article className="border border-[#1f1f1f] bg-black px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff3b30]/60">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ff3b30]">
                  Valeris
                </p>
                <div className="mt-5 grid gap-0 border-y border-[#1f1f1f] text-sm font-semibold uppercase tracking-[0.14em] text-[#f3f3f3]">
                  <p className="border-b border-[#1f1f1f] py-3">Estructura digital</p>
                  <p className="border-b border-[#1f1f1f] py-3">Diseño web</p>
                  <p className="py-3">Desarrollo y lanzamiento</p>
                </div>
              </article>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ValerisRow
