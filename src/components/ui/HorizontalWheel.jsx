import { useEffect, useRef } from 'react'

function HorizontalWheel({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const handleWheel = (event) => {
      const canScrollHorizontally = node.scrollWidth > node.clientWidth

      if (!canScrollHorizontally || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return
      }

      const atStart = node.scrollLeft <= 0 && event.deltaY < 0
      const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 1 && event.deltaY > 0

      if (atStart || atEnd) {
        return
      }

      event.preventDefault()
      node.scrollLeft += event.deltaY
    }

    node.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      node.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default HorizontalWheel
