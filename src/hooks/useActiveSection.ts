import { useEffect, useState } from 'react'

/**
 * Scrollspy: retorna o id da seção atualmente em foco.
 * Uma seção fica ativa quando seu topo cruza a "linha de ativação" (30% da
 * viewport) — escolhemos a seção mais recentemente cruzada. Antes de chegar na
 * primeira seção (ainda no hero), nenhuma fica ativa (retorna '').
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const line = window.innerHeight * 0.3
      let current = ''
      let closest = -Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        // topo já passou da linha e é o mais próximo dela (seção mais recente)
        if (top <= line && top > closest) {
          current = id
          closest = top
        }
      }
      setActive(current)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return active
}
