import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/siteData'
import ContactOptionsModal from '../ui/ContactOptionsModal'
import Reveal from '../ui/Reveal'

function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const showMarquee = location.pathname === '/'
  const renderNavLabel = (item) => {
    if (item.href !== '/valeris-row') {
      return item.label
    }

    return (
      <>
        <span className="text-[#ff3b30]">Valeris</span>
        <span className="px-1 text-white/75">x</span>
        <span className="text-[#2d5bff]">Row</span>
      </>
    )
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <Reveal delay={60}>
          <div className="flex items-center justify-between px-1 py-1">
            <Link to="/" className="flex shrink-0 items-center gap-2 text-left sm:gap-3">
              <img src="/logo.png" alt="Logo Valeris Studio" className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
              <span className="brand-rainbow font-display text-xl font-semibold uppercase tracking-[0.06em] text-white sm:text-3xl sm:tracking-[0.08em]">
                Valeris Studio
              </span>
            </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-3 pr-2 text-[11px] uppercase tracking-[0.12em] text-white/45">
              <a href="/aviso-legal" className="transition hover:text-white">
                Aviso legal
              </a>
              <span aria-hidden="true">·</span>
              <a href="/privacidad" className="transition hover:text-white">
                Privacidad
              </a>
            </div>
            <img
              src="/phone-sticker.png"
              alt="Telefono sticker"
              className="spin-horizontal h-16 w-auto object-contain"
            />
            <button
              type="button"
              className="primary-button"
              onClick={() => setIsContactOpen(true)}
            >
              Contacta
            </button>
          </div>

            <button
              type="button"
              className="inline-flex border border-white/18 p-2.5 text-white lg:hidden"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Reveal>
      </header>

      <aside className="fixed bottom-0 left-4 right-4 z-50 hidden lg:block">
        <Reveal delay={120}>
          <div className={`relative ${showMarquee ? 'h-24' : 'h-10'}`}>
            {showMarquee ? (
              <div className="absolute bottom-28 left-0 right-0 overflow-hidden border-y border-black/20 bg-white py-2">
                <div className="marquee-track">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <span
                      key={index}
                      className="mr-24 font-display text-base font-semibold uppercase tracking-[0.18em] text-black"
                    >
                      Valeris Studio
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <nav className="absolute bottom-0 left-0 flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} className="nav-link">
                  {renderNavLabel(item)}
                </Link>
              ))}
            </nav>
          </div>
        </Reveal>
      </aside>

      {isOpen ? (
        <div className="fixed inset-x-3 bottom-3 z-50 overflow-hidden border border-white/18 bg-black lg:hidden sm:inset-x-4 sm:bottom-4">
          <Reveal delay={80}>
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  {renderNavLabel(item)}
                </Link>
              ))}
              <button
                type="button"
                className="primary-button mt-3"
                onClick={() => {
                  setIsOpen(false)
                  setIsContactOpen(true)
                }}
              >
                Contacta
              </button>
              <div className="mt-4 flex items-center gap-3 px-4 text-[11px] uppercase tracking-[0.12em] text-white/45">
                <a href="/aviso-legal" className="transition hover:text-white">
                  Aviso legal
                </a>
                <span aria-hidden="true">·</span>
                <a href="/privacidad" className="transition hover:text-white">
                  Privacidad
                </a>
              </div>
            </nav>
          </Reveal>
        </div>
      ) : null}

      <ContactOptionsModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}

export default Navbar
