import { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const Component = as

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={`${className} reveal ${isVisible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}

export default Reveal
