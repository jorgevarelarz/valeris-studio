import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function IntroGate({ asOverlay = false, onEnter = null }) {
  const Wrapper = asOverlay ? 'div' : 'main'
  const handleEnter = () => {
    if (onEnter) {
      onEnter()
    }
  }

  return (
    <Wrapper
      className={`relative overflow-hidden bg-black text-white ${
        asOverlay ? 'fixed inset-0 z-[120] h-[100svh]' : 'h-screen'
      }`}
    >
      <img
        src="/entry-bg.gif"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/38" />

      <div className="relative flex h-full flex-col justify-between px-5 py-5 sm:px-8 sm:py-8">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo Valeris Studio" className="h-14 w-14 object-contain" />
          <p className="border border-white/20 bg-black px-4 py-3 font-display text-3xl uppercase tracking-[0.08em] text-white sm:text-4xl">
            Valeris Studio
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-sm flex-col items-center">
            <div className="w-full border border-white/20 bg-[#EDEDED] px-4 py-4 text-center sm:px-5">
              <div className="flex items-center justify-between border-b border-white/14 pb-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-black">
                  Warning
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff2a1f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
              </div>
              <h1 className="mt-3 font-display text-sm uppercase leading-[1.02] tracking-[0.02em] text-white sm:text-base lg:text-lg">
                <span className="block text-black">ESTAS A PUNTO</span>
                <span className="block text-black">DE CONSEGUIR</span>
                <span className="block text-black">TU MEJOR WEB</span>
              </h1>
            </div>
            {asOverlay ? (
              <button type="button" className="primary-button mt-4 gap-2" onClick={handleEnter}>
                Entrar
                <ArrowRight size={16} />
              </button>
            ) : (
              <Link to="/" className="primary-button mt-4 gap-2" onClick={handleEnter}>
                Entrar
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>

        <div />
      </div>
    </Wrapper>
  )
}

export default IntroGate
