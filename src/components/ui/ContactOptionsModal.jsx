import { useNavigate } from 'react-router-dom'

function ContactOptionsModal({ isOpen, onClose }) {
  const navigate = useNavigate()

  if (!isOpen) {
    return null
  }

  const handleWhatsappClick = () => {
    window.open('https://wa.me/34672710040', '_blank', 'noopener,noreferrer')
    onClose()
    navigate('/gracias')
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@valerisstudio.es'
    onClose()
    window.setTimeout(() => {
      navigate('/gracias')
    }, 150)
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/78 px-4"
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-xl flex-col gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="ml-auto w-fit border border-white/18 bg-[#7a7a7a] px-4 py-3 text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-black">
            Elige canal
          </p>
          <p className="mt-1 font-display text-lg uppercase leading-none tracking-[0.04em] text-black sm:text-xl">
            CONTACTANOS
          </p>
        </div>

        <button
          type="button"
          className="mr-auto flex w-full max-w-md flex-col border border-[#ff2a1f]/70 bg-[#ff2a1f] px-5 py-4 text-left text-white transition hover:-translate-y-1"
          onClick={handleWhatsappClick}
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/68">
            Mensaje 01
          </span>
          <span className="mt-2 font-display text-2xl uppercase leading-none tracking-[0.02em]">
            WhatsApp
          </span>
          <span className="mt-2 text-sm leading-5 text-white/82">
            Abrir chat directo al 672 710 040
          </span>
        </button>

        <button
          type="button"
          className="ml-auto flex w-full max-w-md flex-col border border-[#ff2a1f]/70 bg-[#ff2a1f] px-5 py-4 text-left text-white transition hover:-translate-y-1"
          onClick={handleEmailClick}
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/68">
            Mensaje 02
          </span>
          <span className="mt-2 font-display text-2xl uppercase leading-none tracking-[0.02em]">
            Correo
          </span>
          <span className="mt-2 text-sm leading-5 text-white/82">
            Escribir a info@valerisstudio.es
          </span>
        </button>

        <button
          type="button"
          className="mx-auto mt-2 border border-white/18 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default ContactOptionsModal
