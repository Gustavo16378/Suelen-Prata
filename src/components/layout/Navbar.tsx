import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { navLinks } from '../../data/nav'
import { waLink } from '../../data/site'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useActiveSection } from '../../hooks/useActiveSection'
import MobileMenu from './MobileMenu'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

/**
 * Navbar — kit padrão da casa, cores adaptadas ao tema claro Suelen:
 * - hide-on-scroll: translateY(-100%) ao descer, translateY(0) ao subir.
 * - No topo: fundo transparente. Ao rolar: off-white translúcido + blur.
 * - border-b sempre presente, border-color transparent → ink/8% (sem flash no retorno).
 * - Transição APENAS de [transform, background-color, backdrop-filter, border-color].
 */
export default function Navbar() {
  const { direction, atTop } = useScrollDirection()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  const hidden = direction === 'down' && !atTop && !open

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b transition-[transform,background-color,backdrop-filter,border-color] duration-300 ease-out"
        style={{
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          background: atTop ? 'transparent' : 'color-mix(in srgb, var(--bg) 86%, transparent)',
          backdropFilter: atTop ? 'none' : 'blur(14px)',
          WebkitBackdropFilter: atTop ? 'none' : 'blur(14px)',
          borderBottomColor: atTop ? 'transparent' : 'color-mix(in srgb, var(--ink) 8%, transparent)',
        }}
      >
        <nav
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '16px clamp(20px, 5vw, 72px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          {/* Logo */}
          <a href="#top" style={{ textDecoration: 'none', color: 'var(--ink)', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(24px, 3.2vw, 32px)', letterSpacing: '.01em' }}>
              Suelen
            </span>
            <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: '9.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--silver-deep)', marginTop: '3px' }}>
              Pratas &amp; Perfumaria
            </span>
          </a>

          {/* Links desktop */}
          <div
            className="hidden md:flex"
            style={{
              gap: 'clamp(16px, 2.4vw, 34px)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontFamily: "'Jost', sans-serif",
              fontSize: '12.5px',
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
            }}
          >
            {navLinks.map((link) => {
              const isActive = link.href === `#${active}`
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="sp-link"
                  aria-current={isActive ? 'true' : undefined}
                  style={{ textDecoration: 'none', color: isActive ? 'var(--gold-deep)' : 'inherit', position: 'relative', paddingBottom: '4px' }}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: '1px',
                      background: 'var(--gold)',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform .3s ease',
                    }}
                  />
                </a>
              )
            })}
          </div>

          {/* Ações à direita */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={waLink('Olá! Vim pelo site e gostaria de um atendimento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-btn hidden sm:inline-flex"
              style={{
                textDecoration: 'none',
                alignItems: 'center',
                gap: '9px',
                background: 'var(--gold)',
                color: '#fff',
                fontFamily: "'Jost', sans-serif",
                fontSize: '12.5px',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '11px 20px',
                borderRadius: '100px',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ width: '9px', height: '9px', borderRadius: '50% 50% 50% 2px', background: '#fff', display: 'inline-block' }} />
              WhatsApp
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="inline-flex md:hidden"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                background: 'transparent',
                border: '1px solid var(--line)',
                borderRadius: '50%',
                color: 'var(--ink)',
                cursor: 'pointer',
              }}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
