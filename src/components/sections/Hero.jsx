import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HorizontalWheel from '../ui/HorizontalWheel'
import Reveal from '../ui/Reveal'

function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const horizontalLead = Math.min(scrollY * 0.35, 220)
  const horizontalTrail = Math.min(scrollY * 0.18, 120)

  return (
    <section id="inicio" className="flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 pb-6 pt-2 lg:h-full lg:items-center">
      <div className="section-shell flex w-full flex-col justify-between lg:h-full">
        <div className="pt-5">
          <Reveal delay={40}>
            <div className="flex flex-col gap-3 border-b border-white/18 pb-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-sm">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/70">
                  Estudio de diseño y desarrollo web
                </p>
                <p className="mt-3 text-sm leading-6 text-white">
                  Diseñamos, escribimos y desarrollamos webs premium para marcas, negocios y proyectos que no quieren parecer una mas.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contacto" className="primary-button w-full gap-2 sm:w-auto">
                  Solicitar presupuesto
                  <ArrowRight size={16} />
                </Link>
                <Link to="/proyectos" className="secondary-button w-full sm:w-auto">
                  Ver proyectos
                </Link>
              </div>
            </div>
          </Reveal>

        <Reveal delay={120}>
            <div className="mt-5 grid gap-0 border-y border-white/18 lg:hidden">
              <article className="relative overflow-hidden border-b border-white/12 px-4 py-5">
                <div className="absolute inset-0 overflow-hidden opacity-40">
                  <img
                    src="/impact-bg.gif"
                    alt=""
                    className="h-full w-full scale-[1.1] object-cover object-center pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </div>

                <h1 className="relative flex flex-col">
                  <span className="font-display text-[3rem] uppercase leading-[0.84] tracking-[-0.05em] text-white sm:text-[4.4rem]">
                    WEBS
                  </span>
                  <span className="font-display text-[3rem] uppercase leading-[0.84] tracking-[-0.05em] text-[#ff2a1f] sm:text-[4.4rem]">
                    CON
                  </span>
                  <span className="font-display text-[3rem] uppercase leading-[0.84] tracking-[-0.05em] text-white sm:text-[4.4rem]">
                    IMPACTO
                  </span>
                </h1>
              </article>

              <article className="relative overflow-hidden border-b border-white/12 px-4 py-5">
                <div className="absolute inset-0 overflow-hidden opacity-40">
                  <img
                    src="/direccion-creativa.gif"
                    alt=""
                    className="h-full w-full scale-[1.15] object-cover object-center pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative grid gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff2a1f]">
                    Direccion creativa
                  </p>
                  <p className="max-w-lg text-sm leading-6 text-white">
                    Menos plantilla, mas criterio. Menos relleno, mas tension visual. Menos web correcta, mas marca reconocible.
                  </p>
                </div>
                <div className="relative mt-5 grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  <span className="border border-white/18 px-3 py-2">Brand-first</span>
                  <span className="border border-white/18 px-3 py-2">Copy + diseno</span>
                  <span className="border border-white/18 px-3 py-2">Frontend limpio</span>
                </div>
              </article>

              <article className="px-4 py-5">
                <div className="overflow-hidden border border-white/18">
                  <img
                    className="h-[28vh] min-h-[180px] w-full object-cover object-center sm:h-[32vh] sm:min-h-[220px]"
                    src="/hero-loop.gif"
                    alt=""
                  />
                </div>
                <div className="mt-3 grid gap-0 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/80">
                  <div className="border-b border-white/12 px-3 py-4">Landings de conversion</div>
                  <div className="border-b border-white/12 px-3 py-4">Webs corporativas</div>
                  <div className="border-b border-white/12 px-3 py-4">Redisenos con criterio</div>
                  <div className="px-3 py-4">Soporte y evolucion</div>
                </div>
              </article>
            </div>

            <HorizontalWheel className="mt-5 hidden overflow-x-auto pb-2 scrollbar-none lg:block">
              <div className="flex min-w-max border-y border-white/18">
                <article className="relative flex w-[92vw] max-w-[1080px] shrink-0 flex-col justify-between overflow-hidden border-r border-white/18 px-4 py-5 sm:px-5 lg:w-[68vw] lg:px-6">
                  <div className="absolute inset-0 overflow-hidden opacity-40">
                    <img
                      src="/impact-bg.gif"
                      alt=""
                      className="h-full w-full scale-[1.25] object-cover object-center pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                  </div>

                  <h1 className="relative">
                    <span
                      className="font-display text-[3rem] uppercase leading-[0.84] tracking-[-0.05em] text-white transition-transform duration-75 ease-out sm:text-[5.5rem] lg:text-[8rem] xl:text-[9rem]"
                      style={{ transform: `translate3d(${horizontalTrail}px,0,0)` }}
                    >
                      WEBS
                    </span>
                    <span
                      className="font-display text-[3rem] uppercase leading-[0.84] tracking-[-0.05em] text-[#ff2a1f] transition-transform duration-75 ease-out sm:text-[5.5rem] lg:text-[8rem] xl:text-[9rem]"
                      style={{ transform: `translate3d(${-horizontalLead}px,0,0)` }}
                    >
                      CON
                    </span>
                    <span
                      className="font-display text-[3rem] uppercase leading-[0.84] tracking-[-0.05em] text-white transition-transform duration-75 ease-out sm:text-[5.5rem] lg:text-[8rem] xl:text-[9rem]"
                      style={{ transform: `translate3d(${horizontalLead}px,0,0)` }}
                    >
                      IMPACTO
                    </span>
                  </h1>
                </article>

                <article className="relative flex w-[82vw] max-w-[760px] shrink-0 flex-col justify-between overflow-hidden border-r border-white/18 px-4 py-5 sm:px-5 lg:w-[48vw] lg:px-6">
                  <div className="absolute inset-0 overflow-hidden opacity-40">
                    <img
                      src="/direccion-creativa.gif"
                      alt=""
                      className="h-full w-full scale-[1.2] object-cover object-center pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  <div className="relative grid gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff2a1f]">
                      Direccion creativa
                    </p>
                    <p className="max-w-lg text-sm leading-6 text-white">
                      Menos plantilla, mas criterio. Menos relleno, mas tension visual. Menos web correcta, mas marca reconocible.
                    </p>
                  </div>
                  <div className="relative grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    <span className="border border-white/18 px-3 py-2">Brand-first</span>
                    <span className="border border-white/18 px-3 py-2">Copy + diseno</span>
                    <span className="border border-white/18 px-3 py-2">Frontend limpio</span>
                  </div>
                </article>

                <article className="w-[88vw] max-w-[980px] shrink-0 px-4 py-5 sm:px-5 lg:w-[64vw] lg:px-6">
                  <div className="overflow-hidden border border-white/18">
                    <img
                      className="h-[28vh] min-h-[180px] w-full object-cover object-center sm:h-[32vh] sm:min-h-[220px]"
                      src="/hero-loop.gif"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 grid gap-0 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/80 lg:grid-cols-4">
                    <div className="border-b border-white/12 px-3 py-4 lg:border-b-0 lg:border-r lg:border-white/12">
                      Landings de conversion
                    </div>
                    <div className="border-b border-white/12 px-3 py-4 lg:border-b-0 lg:border-r lg:border-white/12">
                      Webs corporativas
                    </div>
                    <div className="border-b border-white/12 px-3 py-4 lg:border-b-0 lg:border-r lg:border-white/12">
                      Redisenos con criterio
                    </div>
                    <div className="px-3 py-4">Soporte y evolucion</div>
                  </div>
                </article>
              </div>
            </HorizontalWheel>
          </Reveal>
        </div>
      </div>

    </section>
  )
}

export default Hero
