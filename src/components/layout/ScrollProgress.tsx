import { useEffect, useState } from 'react'

/**
 * Indicador de progresso de leitura — uma linha fina na borda direita que
 * preenche em dourado conforme a página rola. Substitui a scrollbar padrão.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '2px',
        zIndex: 55,
        background: 'color-mix(in srgb, var(--ink) 7%, transparent)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${progress * 100}%`,
          background: 'var(--gold)',
          transition: 'height .12s linear',
        }}
      />
    </div>
  )
}
