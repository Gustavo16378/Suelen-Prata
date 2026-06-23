import { type MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { navLinks } from '../../data/nav'
import { site, waLink } from '../../data/site'
import { useScrollLock } from '../../hooks/useScrollLock'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/**
 * Menu mobile — kit padrão da casa (verbatim):
 * - createPortal direto no document.body (fora de qualquer stacking context).
 * - Estilos inline (não Tailwind) para evitar conflitos de especificidade.
 * - Scroll lock iOS-safe via useScrollLock.
 * - Painel SÓLIDO ink (#26241F) com texto off-white e acento dourado champagne.
 * - Fechado: opacity 0 + pointerEvents none no overlay (NÃO remove do DOM → transição).
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useScrollLock(open)

  // Fecha o menu e, só depois do scroll-lock destravar, rola suave até a seção.
  // (Navegar pelo href nativo brigaria com o body travado e não funcionaria.)
  const handleNav = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClose()
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  const menu = (
    <>
      {/* Overlay — anima por opacity */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          background: 'color-mix(in srgb, var(--ink) 62%, transparent)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity .35s ease',
        }}
      />

      {/* Painel — anima por transform */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          width: 'min(86vw, 380px)',
          background: '#26241F',
          color: '#FCFBF8',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .4s cubic-bezier(.2,.7,.2,1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '26px 30px 38px',
          boxShadow: '-30px 0 80px -40px rgba(0,0,0,.7)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '44px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 500, fontSize: '28px' }}>
              Suelen
            </span>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '8.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B6BBC0', marginTop: '4px' }}>
              Pratas &amp; Perfumaria
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,.2)',
              color: '#FCFBF8',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNav(link.href)}
              className="sp-link"
              style={{
                textDecoration: 'none',
                color: '#FCFBF8',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '30px',
                lineHeight: 1,
                padding: '17px 0',
                borderBottom: '1px solid rgba(255,255,255,.12)',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink('Olá! Vim pelo site e gostaria de um atendimento.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="sp-btn"
          style={{
            marginTop: 'auto',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            background: 'var(--gold)',
            color: '#fff',
            fontFamily: "'Jost', sans-serif",
            fontSize: '13.5px',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            padding: '16px 28px',
            borderRadius: '100px',
          }}
        >
          <span style={{ width: '10px', height: '10px', borderRadius: '50% 50% 50% 2px', background: '#fff', display: 'inline-block' }} />
          Falar no WhatsApp
        </a>

        <div style={{ marginTop: '22px', display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: "'Jost', sans-serif", fontSize: '12px', color: '#B6BBC0' }}>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="sp-link" style={{ color: 'var(--gold-soft)', textDecoration: 'none', letterSpacing: '.06em' }}>
            {site.instagramHandle}
          </a>
          <span style={{ letterSpacing: '.06em' }}>{site.phone}</span>
        </div>
      </aside>
    </>
  )

  return createPortal(menu, document.body)
}
