import { useEffect } from 'react'

/**
 * Scroll lock iOS-safe: usa position:fixed + top:-scrollY no body
 * (NUNCA apenas overflow:hidden — não funciona no iOS Safari).
 * Ao destravar, restaura a posição exata de scroll.
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const scrollY = window.scrollY
    const body = document.body
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    }

    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.left = prev.left
      body.style.right = prev.right
      body.style.width = prev.width
      // Restaura instantâneo: o scroll-behavior:smooth global faria a página
      // animar do topo até a posição (efeito de "reset") ao fechar o menu.
      const html = document.documentElement
      const prevBehavior = html.style.scrollBehavior
      html.style.scrollBehavior = 'auto'
      window.scrollTo(0, scrollY)
      html.style.scrollBehavior = prevBehavior
    }
  }, [locked])
}
