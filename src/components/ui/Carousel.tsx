import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  children: ReactNode
  /** Rótulo acessível do carrossel. */
  label?: string
}

/**
 * Carrossel horizontal com scroll-snap. Swipe nativo no mobile, setas no
 * desktop. As setas só aparecem quando há conteúdo pra rolar — se tudo cabe na
 * tela (ex.: poucos cards) elas somem, em vez de ficar boiando no vazio.
 * Cada filho deve usar a classe `sp-slide` (largura fixa + scroll-snap).
 */
export default function Carousel({ children, label }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const measure = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setCanLeft(el.scrollLeft > 1)
    setCanRight(el.scrollLeft < max - 1)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', measure)
      ro.disconnect()
    }
  }, [measure])

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <div style={{ position: 'relative' }}>
      <div ref={trackRef} className="sp-carousel" role="group" aria-label={label}>
        {children}
      </div>

      {canLeft && (
        <button type="button" className="sp-carousel-nav sp-carousel-prev" aria-label="Ver anteriores" onClick={() => nudge(-1)}>
          <ChevronLeft size={20} strokeWidth={1.6} />
        </button>
      )}
      {canRight && (
        <button type="button" className="sp-carousel-nav sp-carousel-next" aria-label="Ver próximos" onClick={() => nudge(1)}>
          <ChevronRight size={20} strokeWidth={1.6} />
        </button>
      )}
    </div>
  )
}
