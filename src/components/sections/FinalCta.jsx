import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import HorizontalWheel from '../ui/HorizontalWheel'
import ContactOptionsModal from '../ui/ContactOptionsModal'
import Reveal from '../ui/Reveal'

function FinalCta() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <section id="contacto" className="relative flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 py-5 lg:h-full lg:items-center lg:py-4">
        <img
          src="/contact-bg.gif"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.42]"
        />
        <div className="absolute inset-0 bg-black/58" />

        <div className="section-shell relative w-full">
          <Reveal className="overflow-hidden text-white">
            <div className="grid gap-0 border-y border-white/18 lg:hidden">
              <article className="border-b border-white/12 px-5 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ff2a1f]">Cierre</p>
                <h1 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl">
                  TU MARCA NO NECESITA UNA WEB CORRECTA.
                  <span className="block text-[#ff2a1f]">NECESITA UNA WEB QUE SE RECUERDE.</span>
                </h1>
              </article>

              <article className="px-5 py-6">
                <p className="max-w-xl text-sm leading-6 text-white/82">
                  Si quieres dar un salto en imagen, claridad y presencia digital, podemos plantear una propuesta con una direccion visual menos estandar y una base lista para convertir.
                </p>
                <button
                  type="button"
                  className="primary-button mt-8 gap-2 self-start"
                  onClick={() => setIsContactOpen(true)}
                >
                  Contactanos
                  <ArrowRight size={16} />
                </button>
              </article>
            </div>

            <HorizontalWheel className="hidden overflow-x-auto pb-2 scrollbar-none lg:block">
              <div className="flex min-w-max border-y border-white/18">
                <article className="w-[88vw] max-w-[920px] shrink-0 border-r border-white/18 px-5 py-6 sm:px-6 lg:w-[58vw]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#ff2a1f]">Cierre</p>
                  <h1 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                    TU MARCA NO NECESITA UNA WEB CORRECTA.
                    <span className="block text-[#ff2a1f]">NECESITA UNA WEB QUE SE RECUERDE.</span>
                  </h1>
                </article>

                <article className="flex w-[72vw] max-w-[560px] shrink-0 flex-col justify-center border-r border-white/18 px-5 py-6 sm:px-6 lg:w-[30vw]">
                  <p className="max-w-xl text-sm leading-6 text-white/82">
                    Si quieres dar un salto en imagen, claridad y presencia digital, podemos plantear una propuesta con una direccion visual menos estandar y una base lista para convertir.
                  </p>
                  <button
                    type="button"
                    className="primary-button mt-8 gap-2 self-start"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Contactanos
                    <ArrowRight size={16} />
                  </button>
                </article>
              </div>
            </HorizontalWheel>
          </Reveal>
        </div>
      </section>

      <ContactOptionsModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}

export default FinalCta
