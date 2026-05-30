import { testimonials } from '../../data/siteData'
import HorizontalWheel from '../ui/HorizontalWheel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Testimonials() {
  return (
    <section id="testimonios" className="flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 py-5 lg:h-full lg:items-center lg:py-4">
      <div className="section-shell w-full">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonios"
            title="LO QUE CAMBIA NO ES SOLO LA WEB. CAMBIA COMO SE PERCIBE LA MARCA."
            copy="Cuando la direccion visual esta bien planteada, el proyecto se entiende antes y se recuerda mas."
            level={1}
          />
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-5 grid gap-0 border-y border-white/18 lg:hidden">
            <article className="border-b border-white/12 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[#ff2a1f]">Comentario principal</p>
              <p className="mt-5 max-w-4xl font-display text-4xl uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl">
                &ldquo;Necesitábamos una web que dejara de parecer un proveedor más y empezara a sentirse como una marca con criterio.&rdquo;
              </p>
              <div className="mt-6 border-t border-white/14 pt-4">
                <p className="font-semibold text-white">Marta Rivas</p>
                <p className="mt-1 text-sm text-white">Directora, Rivas & Co.</p>
              </div>
            </article>

            {testimonials.map((item, index) => (
              <article
                key={item.author}
                className={index < testimonials.length - 1 ? 'border-b border-white/12 px-5 py-5' : 'px-5 py-5'}
              >
                <p className="text-sm leading-6 text-white">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-5 border-t border-white/14 pt-4">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="mt-1 text-sm text-white">{item.role}</p>
                </div>
              </article>
            ))}
          </div>

          <HorizontalWheel className="mt-5 hidden overflow-x-auto pb-2 scrollbar-none lg:block">
            <div className="flex min-w-max border-y border-white/18">
              <article className="w-[92vw] max-w-[980px] shrink-0 border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[64vw]">
                <p className="text-xs uppercase tracking-[0.26em] text-[#ff2a1f]">Comentario principal</p>
                <p className="mt-5 max-w-4xl font-display text-4xl uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  &ldquo;Necesitábamos una web que dejara de parecer un proveedor más y empezara a sentirse como una marca con criterio.&rdquo;
                </p>
                <div className="mt-6 border-t border-white/14 pt-4">
                  <p className="font-semibold text-white">Marta Rivas</p>
                  <p className="mt-1 text-sm text-white">Directora, Rivas & Co.</p>
                </div>
              </article>

              {testimonials.map((item) => (
                <article
                  key={item.author}
                  className="flex w-[72vw] max-w-[620px] shrink-0 flex-col justify-between border-r border-white/18 px-5 py-5 sm:px-6 lg:w-[34vw]"
                >
                  <p className="text-sm leading-6 text-white">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-5 border-t border-white/14 pt-4">
                    <p className="font-semibold text-white">{item.author}</p>
                    <p className="mt-1 text-sm text-white">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </HorizontalWheel>
        </Reveal>
      </div>
    </section>
  )
}

export default Testimonials
