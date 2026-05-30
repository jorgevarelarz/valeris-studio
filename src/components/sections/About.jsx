import HorizontalWheel from '../ui/HorizontalWheel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function About() {
  return (
    <section id="estudio" className="flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 py-5 lg:h-full lg:items-center lg:py-4">
      <div className="section-shell w-full">
        <Reveal className="overflow-hidden">
          <SectionHeading
            eyebrow="Sobre Valeris Studio"
            title="DISENO, ESTRATEGIA Y DESARROLLO DENTRO DE UNA MISMA DIRECCION."
            copy="Valeris Studio crea webs para negocios que necesitan dar una mejor impresion, transmitir mas actualidad y ordenar su presencia digital con criterio."
            level={1}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-5 grid gap-0 border-y border-white/18 lg:hidden">
            <article className="border-b border-white/12 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[#ff2a1f]">Enfoque</p>
              <p className="mt-3 max-w-xl font-display text-4xl uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl">
                WEBS CON MAS PERSONALIDAD PARA POSICIONAR MEJOR A NEGOCIOS REALES.
              </p>
            </article>

            <article className="border-b border-white/12 px-5 py-5">
              <p className="text-sm uppercase tracking-[0.24em] text-white">Marca</p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white">
                Refinamos la percepcion visual para transmitir una identidad mas solida y mas coherente.
              </p>
            </article>

            <article className="px-5 py-5">
              <p className="text-sm uppercase tracking-[0.24em] text-white">Negocio</p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white">
                Cada decision de estructura y contenido responde a objetivos concretos de captacion, confianza o venta.
              </p>
            </article>
          </div>

          <HorizontalWheel className="mt-5 hidden overflow-x-auto pb-2 scrollbar-none lg:block">
            <div className="flex min-w-max border-y border-white/18">
              <article className="w-[84vw] max-w-[820px] shrink-0 border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[48vw]">
                <p className="text-xs uppercase tracking-[0.26em] text-[#ff2a1f]">Enfoque</p>
                <p className="mt-3 max-w-xl font-display text-4xl uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl">
                  WEBS CON MAS PERSONALIDAD PARA POSICIONAR MEJOR A NEGOCIOS REALES.
                </p>
              </article>

              <article className="w-[70vw] max-w-[560px] shrink-0 border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[30vw]">
                <p className="text-sm uppercase tracking-[0.24em] text-white">Marca</p>
                <p className="mt-3 max-w-md text-sm leading-6 text-white">
                  Refinamos la percepcion visual para transmitir una identidad mas solida y mas coherente.
                </p>
              </article>

              <article className="w-[70vw] max-w-[560px] shrink-0 border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[30vw]">
                <p className="text-sm uppercase tracking-[0.24em] text-white">Negocio</p>
                <p className="mt-3 max-w-md text-sm leading-6 text-white">
                  Cada decision de estructura y contenido responde a objetivos concretos de captacion, confianza o venta.
                </p>
              </article>
            </div>
          </HorizontalWheel>
        </Reveal>
      </div>
    </section>
  )
}

export default About
