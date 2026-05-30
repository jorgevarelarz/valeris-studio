import { benefits } from '../../data/siteData'
import HorizontalWheel from '../ui/HorizontalWheel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Benefits() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 py-5 lg:h-full lg:items-center lg:py-4">
      <img
        src="/benefits-bg.gif"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.42]"
      />
      <div className="absolute inset-0 bg-black/58" />

      <div className="section-shell relative w-full">
        <Reveal>
          <SectionHeading
            eyebrow="Por qué Valeris"
            title="NO HACEMOS WEBS BONITAS. HACEMOS WEBS QUE EMPUJAN."
            copy="La diferencia no esta en poner una capa de estilo. Esta en construir una marca que se note desde el primer scroll."
            level={1}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-5 grid gap-0 border-y border-white/18 lg:hidden">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className={index < benefits.length - 1 ? 'border-b border-white/12 px-5 py-5' : 'px-5 py-5'}
              >
                <h3 className="font-display text-3xl uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-4xl">
                  {benefit.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white">{benefit.description}</p>
              </article>
            ))}
          </div>

          <HorizontalWheel className="mt-5 hidden overflow-x-auto pb-2 scrollbar-none lg:block">
            <div className="flex min-w-max border-y border-white/18">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="flex w-[72vw] max-w-[620px] shrink-0 flex-col justify-between border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[36vw]"
                >
                  <h3 className="font-display text-3xl uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-4xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white">{benefit.description}</p>
                </article>
              ))}
            </div>
          </HorizontalWheel>
        </Reveal>
      </div>
    </section>
  )
}

export default Benefits
