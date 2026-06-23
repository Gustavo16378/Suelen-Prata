import Button from './Button'
import type { Product } from '../../data/products'

interface ProductCardProps extends Product {
  /** Índice editorial exibido sobre a imagem (ex.: "Nº 02"). */
  index?: string
}

/**
 * Card de joia — mesmo formato editorial do PerfumeCard (fundo champanhe em
 * gradiente, pílula de categoria, nome serifa, descrição e divisor), com a
 * avaliação em estrelas que é exclusiva das peças.
 */
export default function ProductCard({ name, price, cap, href, img, tag, stars, reviews, notes, index }: ProductCardProps) {
  return (
    <div
      className="sp-card"
      style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
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
        {tag && (
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
            {tag}
          </span>
        )}
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {stars && (
          <div style={{ color: 'var(--gold)', fontSize: '13px', letterSpacing: '.1em' }}>
            {stars} <span style={{ color: 'var(--ink-soft)', fontSize: '11px' }}>{reviews}</span>
          </div>
        )}
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', lineHeight: 1.12, color: 'var(--ink)' }}>
          {name}
        </div>
        {notes && (
          <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '12.5px', lineHeight: 1.5, color: 'var(--ink-soft)' }}>
            {notes}
          </div>
        )}
        <div style={{ height: '1px', background: 'var(--line)', margin: '6px 0 2px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: 'auto', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '18px', fontWeight: 500, color: 'var(--ink)' }}>{price}</span>
          <Button href={href} variant="outline-gold" dot style={{ padding: '10px 16px', fontSize: '11.5px', gap: '7px' }}>
            Pedir
          </Button>
        </div>
      </div>
    </div>
  )
}
