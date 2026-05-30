import { serviceFaqs, services } from '../../data/siteData'
import HorizontalWheel from '../ui/HorizontalWheel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Services() {
  return (
    <section id="servicios" className="relative flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 py-5 lg:h-full lg:items-center lg:py-4">
      <img
        src="/services-bg.gif"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.42]"
      />
      <div className="absolute inset-0 bg-black/58" />

      <div className="section-shell relative w-full">
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="SERVICIOS PENSADOS PARA QUE LA MARCA ENTRE FUERTE Y SE QUEDE."
            copy="Diseccionamos lo que la web tiene que hacer y lo convertimos en estructura, ritmo, copy y presencia visual."
            level={1}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-5 grid gap-0 border-y border-white/18 lg:hidden">
            <article className="border-b border-white/12 px-5 py-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ff2a1f]">
                Nucleo
              </p>
              <p className="mt-3 max-w-md font-display text-4xl uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl">
                WEBS A MEDIDA CON DIRECCION VISUAL REAL.
              </p>
              <p className="mt-4 max-w-md text-sm leading-6 text-white">
                No trabajamos como catalogo de bloques. Definimos una logica visual, una narrativa y una estructura que hagan que la web se perciba propia.
              </p>
              <div className="mt-5 grid gap-0 border-y border-white/18 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                <p className="border-b border-white/12 px-0 py-3">Direccion de arte digital</p>
                <p className="border-b border-white/12 px-0 py-3">Arquitectura de contenidos</p>
                <p className="px-0 py-3">Desarrollo frontend premium</p>
              </div>
            </article>

            {services.map((service, index) => (
              <article
                key={service.title}
                className={index < services.length - 1 || serviceFaqs.length ? 'border-b border-white/12 px-5 py-5' : 'px-5 py-5'}
              >
                <div className="grid gap-3">
                  <p className="font-display text-4xl leading-none tracking-[-0.08em] text-white/60">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.04em] text-white sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-6 text-white">{service.description}</p>
                  {service.subservices ? (
                    <div className="mt-2 grid gap-0 border-y border-white/18 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white">
                      {service.subservices.map((item, itemIndex) => (
                        <p
                          key={item}
                          className={itemIndex < service.subservices.length - 1 ? 'border-b border-white/12 px-0 py-3' : 'px-0 py-3'}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}

            <article className="px-5 py-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ff2a1f]">
                Preguntas frecuentes
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-4xl">
                RESPUESTAS CLARAS PARA QUIEN ESTA BUSCANDO UNA WEB CON CRITERIO.
              </h2>
              <div className="mt-5 grid gap-0 border-y border-white/18">
                {serviceFaqs.map((faq, index) => (
                  <article
                    key={faq.question}
                    className={index < serviceFaqs.length - 1 ? 'border-b border-white/12 py-4' : 'py-4'}
                  >
                    <h3 className="max-w-3xl font-display text-[1.05rem] uppercase leading-[1.02] tracking-[-0.02em] text-white sm:text-[1.15rem]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-white sm:text-[0.98rem]">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </article>
          </div>

          <HorizontalWheel className="mt-5 hidden overflow-x-auto pb-2 scrollbar-none lg:block">
            <div className="flex min-w-max border-y border-white/18">
              <article className="w-[80vw] max-w-[760px] shrink-0 border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[46vw]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ff2a1f]">
                  Nucleo
                </p>
                <p className="mt-3 max-w-md font-display text-4xl uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl">
                  WEBS A MEDIDA CON DIRECCION VISUAL REAL.
                </p>
                <p className="mt-4 max-w-md text-sm leading-6 text-white">
                  No trabajamos como catalogo de bloques. Definimos una logica visual, una narrativa y una estructura que hagan que la web se perciba propia.
                </p>
                <div className="mt-5 grid gap-0 border-y border-white/18 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  <p className="border-b border-white/12 px-0 py-3">Direccion de arte digital</p>
                  <p className="border-b border-white/12 px-0 py-3">Arquitectura de contenidos</p>
                  <p className="px-0 py-3">Desarrollo frontend premium</p>
                </div>
              </article>

              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="w-[74vw] max-w-[660px] shrink-0 border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[38vw]"
                >
                  <div className="grid gap-3">
                    <p className="font-display text-4xl leading-none tracking-[-0.08em] text-white/60">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.04em] text-white sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-6 text-white">{service.description}</p>
                    {service.subservices ? (
                      <div className="mt-2 grid gap-0 border-y border-white/18 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white">
                        {service.subservices.map((item, itemIndex) => (
                          <p
                            key={item}
                            className={itemIndex < service.subservices.length - 1 ? 'border-b border-white/12 px-0 py-3' : 'px-0 py-3'}
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}

              <article className="w-[96vw] max-w-[1240px] shrink-0 border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[72vw]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ff2a1f]">
                  Preguntas frecuentes
                </p>
                <h2 className="mt-3 max-w-3xl font-display text-3xl uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-4xl">
                  RESPUESTAS CLARAS PARA QUIEN ESTA BUSCANDO UNA WEB CON CRITERIO.
                </h2>
                <div className="mt-5 grid gap-0 border-y border-white/18 lg:grid-cols-2 lg:gap-x-8">
                  {serviceFaqs.map((faq, index) => (
                    <article
                      key={faq.question}
                      className={`py-4 ${index < serviceFaqs.length - 1 ? 'border-b border-white/12' : ''} ${
                        index % 2 === 0 ? 'lg:pr-6' : 'lg:pl-6'
                      } ${index < serviceFaqs.length - 2 ? 'lg:border-b lg:border-white/12' : ''}`}
                    >
                      <h3 className="max-w-3xl font-display text-[1.05rem] uppercase leading-[1.02] tracking-[-0.02em] text-white sm:text-[1.15rem]">
                        {faq.question}
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-white sm:text-[0.98rem]">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </HorizontalWheel>
        </Reveal>
      </div>
    </section>
  )
}

export default Services
