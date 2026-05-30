import { processSteps } from '../../data/siteData'
import HorizontalWheel from '../ui/HorizontalWheel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Process() {
  return (
    <section id="proceso" className="relative flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 py-5 lg:h-full lg:items-center lg:py-4">
      <img
        src="/process-bg.gif"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.42]"
      />
      <div className="absolute inset-0 bg-black/58" />

      <div className="section-shell relative w-full">
        <Reveal>
          <SectionHeading
            eyebrow="Proceso"
            title="EL PROYECTO AVANZA EN BLOQUES CLAROS, NO EN IDAS Y VUELTAS INUTILES."
            copy="La web se ordena en fases secas: pensar, definir, construir y lanzar."
            level={1}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-5 grid gap-0 border-y border-white/18 lg:hidden">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={index < processSteps.length - 1 ? 'border-b border-white/12 px-5 py-5' : 'px-5 py-5'}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-4xl uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white">{step.description}</p>
              </article>
            ))}
          </div>

          <HorizontalWheel className="mt-5 hidden overflow-x-auto pb-2 scrollbar-none lg:block">
            <div className="flex min-w-max border-y border-white/18">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="w-[74vw] max-w-[620px] shrink-0 border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[34vw]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                    {step.number}
                  </p>
                  <h3 className="mt-3 font-display text-4xl uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white">{step.description}</p>
                </article>
              ))}
            </div>
          </HorizontalWheel>
        </Reveal>
      </div>
    </section>
  )
}

export default Process
