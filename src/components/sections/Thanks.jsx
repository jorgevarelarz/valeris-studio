import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'

function Thanks() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 py-5 lg:h-full lg:items-center lg:py-4">
      <div className="section-shell relative w-full">
        <Reveal className="overflow-hidden text-white">
          <div className="border-y border-white/18">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="border-b border-white/18 px-5 py-6 sm:px-6 lg:border-b-0 lg:border-r">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ff2a1f]">Solicitud enviada</p>
                <h1 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  HEMOS REGISTRADO
                  <span className="block text-[#ff2a1f]">TU CONTACTO.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-white sm:text-base">
                  Si has pulsado WhatsApp o Correo, ya deberías tener abierto el canal de contacto.
                  Cuando nos escribas, seguimos por ahí para plantear el proyecto.
                </p>
              </article>

              <article className="flex flex-col justify-center gap-4 px-5 py-6 sm:px-6">
                <p className="max-w-xl text-sm leading-6 text-white/88">
                  Mientras tanto, puedes volver al inicio o revisar los servicios para definir mejor
                  qué necesita tu web.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/" className="primary-button gap-2">
                    Volver al inicio
                    <ArrowLeft size={16} />
                  </Link>
                  <Link to="/servicios" className="secondary-button gap-2">
                    Ver servicios
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Thanks
