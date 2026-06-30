import type { Perfume } from '../../data/perfumes'

interface PerfumeCardProps extends Perfume {
  /** Índice editorial exibido sobre a imagem (ex.: "Nº 02"). */
  index?: string
  /** Abre o modal de detalhes da peça. */
  onSelect: () => void
}

/**
 * Card de perfumaria — clicável: abre o modal de detalhes (sem preço, a pedido
 * da loja). Fundo champanhe, índice, família olfativa e notas.
 */
export default function PerfumeCard({ name, type, cap, img, family, notes, index, onSelect }: PerfumeCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      className="sp-card"
      style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', height: '100%' }}
    >
      <div
        style={{
          aspectRatio: '4 / 5',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(160deg, var(--gold-soft), var(--surface-2))',
        }}
      >
        {index && (
          <span style={{ position: 'absolute', top: '12px', left: '14px', zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '15px', color: 'var(--silver-deep)' }}>
            {index}
          </span>
        )}
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '9px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', textAlign: 'center', padding: '8px' }}>
          {cap}
        </span>
        {img && (
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="sp-ph"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        {family && (
          <span
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '14px',
              background: 'color-mix(in srgb, var(--bg) 90%, transparent)',
              color: 'var(--gold-deep)',
              border: '1px solid var(--gold-soft)',
              fontFamily: "'Jost', sans-serif",
              fontSize: '9.5px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              padding: '5px 10px',
              borderRadius: '100px',
            }}
          >
            {family}
          </span>
        )}
      </div>

      <div className="sp-card-body" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '10.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold-deep)' }}>
          {type}
        </div>
        <div className="sp-card-title" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', lineHeight: 1.12, color: 'var(--ink)' }}>
          {name}
        </div>
        {notes && (
          <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '12.5px', lineHeight: 1.5, color: 'var(--ink-soft)' }}>
            {notes}
          </div>
        )}
        <div style={{ height: '1px', background: 'var(--line)', margin: '6px 0 2px' }} />
        <span
          style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Jost', sans-serif", fontSize: '11.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold-deep)' }}
        >
          Ver detalhes <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  )
}
