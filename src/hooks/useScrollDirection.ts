import { useEffect, useState } from 'react'

export type ScrollDirection = 'up' | 'down'

/**
 * Compara a posição de scroll atual com a anterior.
 * Retorna a direção ('up' | 'down') e se estamos no topo da página.
 * Usado para esconder/mostrar a navbar (hide-on-scroll) — kit padrão da casa.
 */
export function useScrollDirection(threshold = 6) {
  const [direction, setDirection] = useState<ScrollDirection>('up')
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    let last = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      setAtTop(y < 8)
      if (Math.abs(y - last) >= threshold) {
        setDirection(y > last ? 'down' : 'up')
        last = y
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { direction, atTop }
}
