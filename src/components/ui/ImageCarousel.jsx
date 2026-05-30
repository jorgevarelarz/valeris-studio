import { useEffect, useState } from 'react'

const images = [
  new URL('../../../Tiger.jpg', import.meta.url).href,
  new URL('../../../hq720.jpg', import.meta.url).href,
  new URL('../../../pavel-keyzik-lWAzPslrano-unsplash.jpg', import.meta.url).href,
  new URL('../../../Pratone Grass Lounge Chillin.jpg', import.meta.url).href,
  new URL('../../../wild horses tattoo.jpg', import.meta.url).href,
  new URL('../../../ -2.jpg', import.meta.url).href,
]

function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 300)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full min-h-[520px] overflow-hidden border border-white/10 bg-[#111111]">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-200 ${
            index === activeIndex
              ? 'scale-100 opacity-100 saturate-150'
              : 'scale-110 opacity-0 saturate-50'
          }`}
        />
      ))}
      <div className="noise-grid absolute inset-0 mix-blend-overlay opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.46))]" />
      <div className="absolute left-5 top-5 border border-white/20 bg-black/25 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white">
        300ms image switch
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-white/15 bg-black/25 px-5 py-4 backdrop-blur-md">
        <p className="font-display text-3xl leading-none tracking-[-0.06em] text-white">
          High-stimulus visual feed
        </p>
        <div className="flex gap-2">
          {images.map((image, index) => (
            <span
              key={`${image}-dot`}
              className={`h-2.5 w-2.5 transition-all ${
                index === activeIndex ? 'bg-acid shadow-[0_0_14px_rgba(216,255,62,0.9)]' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
