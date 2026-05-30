import { portfolioProjects } from '../../data/siteData'
import HorizontalWheel from '../ui/HorizontalWheel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Portfolio() {
  return (
    <section id="proyectos" className="flex min-h-[calc(100svh-5rem)] items-start overflow-hidden px-4 py-5 lg:h-full lg:items-center lg:py-8">
      <div className="section-shell w-full">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos"
            title="PROYECTOS QUE SE LEEN COMO CAMPAÑA, NO COMO PORTFOLIO DE PLANTILLA."
            copy="Cada caso se presenta como una pieza con tono, peso visual y una razón clara para existir."
            level={1}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid gap-0 border-y border-white/18 lg:hidden">
            {portfolioProjects.map((project, index) => (
              <article
                key={project.name}
                className={index < portfolioProjects.length - 1 ? 'border-b border-white/12 px-5 py-6' : 'px-5 py-6'}
              >
                <p className="font-display text-5xl leading-none tracking-[-0.06em] text-white/24">
                  0{index + 1}
                </p>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#ff2a1f]">{project.category}</p>
                  <p className="mt-4 font-display text-4xl uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl">
                    {project.name}
                  </p>
                </div>
                {project.logo && (
                  <div className="mt-4">
                    <img
                      src={project.logo}
                      alt={`Logo ${project.name}`}
                      className="h-10 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                )}
                <div className="mt-5 grid gap-4">
                  <p className="max-w-xl text-sm leading-6 text-white">{project.description}</p>
                  <p className="max-w-lg text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                    {project.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <HorizontalWheel className="mt-8 hidden overflow-x-auto pb-4 scrollbar-none lg:block">
            <div className="flex min-w-max gap-0 border-y border-white/18">
              {portfolioProjects.map((project, index) => (
                <article
                  key={project.name}
                  className="flex w-[88vw] max-w-[1100px] shrink-0 flex-col justify-between border-r border-white/18 px-6 py-8 sm:px-8 lg:w-[72vw] lg:px-10"
                >
                  <div className="grid gap-10 lg:grid-cols-[0.14fr_0.38fr_0.48fr] lg:items-start">
                    <p className="font-display text-6xl leading-none tracking-[-0.06em] text-white/24">
                      0{index + 1}
                    </p>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#ff2a1f]">{project.category}</p>
                      <p className="mt-4 font-display text-6xl uppercase leading-[0.86] tracking-[-0.05em] text-white sm:text-7xl lg:text-[5.5rem]">
                        {project.name}
                      </p>
                    </div>
                    <div className="grid gap-6">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt={`Logo ${project.name}`}
                          className="h-10 w-auto object-contain brightness-0 invert"
                        />
                      )}
                      <p className="max-w-xl text-base leading-7 text-white">{project.description}</p>
                      <p className="max-w-lg text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                        {project.impact}
                      </p>
                    </div>
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

export default Portfolio
