import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Check } from 'lucide-react'
import Button from './Button'
import { useScrollLock } from '../../hooks/useScrollLock'
import { waLink } from '../../data/site'

export interface Piece {
  name: string
  cap: string
  img?: string
  category?: string
  notes?: string
  stars?: string
  reviews?: string
  details: string[]
}

interface PieceModalProps {
  piece: Piece | null
  onClose: () => void
}

/**
 * Modal de detalhes da peça (joia/perfume). Abre ao clicar num card.
 * Portal + scroll lock + ESC. Como não há preço no site, o CTA leva ao
 * WhatsApp para consultar valor e disponibilidade.
 */
export default function PieceModal({ piece, onClose }: PieceModalProps) {
  const open = piece !== null
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!piece) return null

  const node = (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          background: 'color-mix(in srgb, var(--ink) 64%, transparent)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          animation: 'sp-modal-overlay .25s ease',
        }}
      />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(16px, 4vw, 40px)',
          pointerEvents: 'none',
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={piece.name}
          style={{
            pointerEvents: 'auto',
            width: 'min(760px, 100%)',
            maxHeight: '88vh',
            overflowY: 'auto',
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: '8px',
            boxShadow: '0 50px 100px -40px rgba(40,30,15,.5)',
            display: 'flex',
            flexWrap: 'wrap',
            animation: 'sp-modal-panel .3s cubic-bezier(.2,.7,.2,1)',
          }}
        >
          {/* imagem */}
          <div
            style={{
              flex: '1 1 280px',
              minWidth: '240px',
              position: 'relative',
              minHeight: 'clamp(240px, 40vw, 420px)',
              background: 'linear-gradient(160deg, var(--gold-soft), var(--surface-2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', textAlign: 'center', padding: '12px' }}>
              {piece.cap}
            </span>
            {piece.img && (
              <img
                src={piece.img}
                alt={piece.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
            {piece.category && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '16px',
                  background: 'color-mix(in srgb, var(--bg) 90%, transparent)',
                  color: 'var(--gold-deep)',
                  border: '1px solid var(--gold-soft)',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  borderRadius: '100px',
                }}
              >
                {piece.category}
              </span>
            )}
          </div>

          {/* info */}
          <div style={{ flex: '1 1 320px', minWidth: '260px', padding: 'clamp(24px, 3vw, 40px)', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
            <button
              onClick={onClose}
              aria-label="Fechar"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--line)',
                background: 'var(--surface)',
                color: 'var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} strokeWidth={1.6} />
            </button>

            {piece.stars && (
              <div style={{ color: 'var(--gold)', fontSize: '14px', letterSpacing: '.1em', paddingRight: '44px' }}>
                {piece.stars} <span style={{ color: 'var(--ink-soft)', fontSize: '12px' }}>{piece.reviews}</span>
              </div>
            )}

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(28px, 3.6vw, 40px)', lineHeight: 1.08, margin: 0, color: 'var(--ink)', paddingRight: piece.stars ? 0 : '44px' }}>
              {piece.name}
            </h3>

            {piece.notes && (
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0 }}>
                {piece.notes}.
              </p>
            )}

            <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {piece.details.map((d) => (
                <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '14px', color: 'var(--ink)' }}>
                  <Check size={16} strokeWidth={1.8} style={{ flex: 'none', marginTop: '2px', color: 'var(--gold-deep)' }} />
                  {d}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
              <Button
                href={waLink(`Olá! Tenho interesse na peça: ${piece.name}. Pode me passar valor e disponibilidade?`)}
                variant="gold"
                dot
                style={{ padding: '15px 28px', fontSize: '13.5px', width: '100%' }}
              >
                Tenho interesse
              </Button>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11.5px', color: 'var(--ink-soft)', textAlign: 'center', margin: '10px 0 0' }}>
                Valores e fotos reais pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return createPortal(node, document.body)
}
