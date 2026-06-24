import { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import ProductCard from '../ui/ProductCard'
import PieceModal, { type Piece } from '../ui/PieceModal'
import { bestSellers, type Product } from '../../data/products'
import { waLink } from '../../data/site'

const JEWELRY_DETAILS = [
  'Prata 925 legítima e certificada',
  'Antialérgica / hipoalergênica',
  'Acompanha embalagem para presente',
  'Entrega para todo o Brasil',
]

function toPiece(p: Product): Piece {
  return {
    name: p.name,
    cap: p.cap,
    img: p.img,
    category: p.tag,
    notes: p.notes,
    stars: p.stars,
    reviews: p.reviews,
    details: JEWELRY_DETAILS,
  }
}

export default function BestSellers() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section
      id="desejados"
      style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: 'clamp(76px, 8vw, 118px) clamp(20px, 5vw, 72px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: 'clamp(32px, 4vw, 56px)',
        }}
      >
        <div>
          <SectionLabel num="01" style={{ marginBottom: '18px' }}>
            Mais desejados
          </SectionLabel>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.04, margin: 0, color: 'var(--ink)' }}>
            Os queridinhos da <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>vitrine</em>
          </h2>
        </div>
        <a
          href={waLink('Quero ver os mais vendidos.')}
          target="_blank"
          rel="noopener noreferrer"
          className="sp-link"
          style={{ textDecoration: 'none', fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--gold)', paddingBottom: '6px' }}
        >
          Ver todos →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {bestSellers.map((p, i) => (
          <ProductCard key={p.name} {...p} index={`Nº 0${i + 1}`} onSelect={() => setSelected(p)} />
        ))}
      </div>

      <PieceModal piece={selected ? toPiece(selected) : null} onClose={() => setSelected(null)} />
    </section>
  )
}
