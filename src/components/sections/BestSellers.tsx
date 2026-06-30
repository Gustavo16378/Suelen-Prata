import { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import ProductCard from '../ui/ProductCard'
import CategoryRow from '../ui/CategoryRow'
import PieceModal, { type Piece } from '../ui/PieceModal'
import { joiasGroups, type Product } from '../../data/products'
import { waLink } from '../../data/site'

// Selos de confiança do modal — variam por categoria. Relógios/smartwatch NÃO
// são prata 925, então têm a sua própria lista.
// TODO: revisar com a Suelen — ajustar conforme garantia/specs reais.
const SILVER_TRUST = [
  'Antialérgica / hipoalergênica',
  'Acompanha embalagem para presente',
  'Entrega para todo o Brasil',
]

const DETAILS_BY_TAG: Record<string, string[]> = {
  Relógio: [
    'Relógio original, pronta entrega',
    'Pulseira ajustável ao pulso',
    'Acompanha embalagem para presente',
    'Entrega para todo o Brasil',
  ],
  Smartwatch: [
    'Smartwatch com várias funções',
    'Pulseiras intercambiáveis',
    'Acompanha embalagem para presente',
    'Entrega para todo o Brasil',
  ],
}

/** Detalhes do modal conforme a categoria da peça. */
function detailsFor(p: Product): string[] {
  return DETAILS_BY_TAG[p.tag] ?? [`${p.tag} em Prata 925 legítima e certificada`, ...SILVER_TRUST]
}

function toPiece(p: Product): Piece {
  return {
    name: p.name,
    cap: p.cap,
    img: p.img,
    category: p.tag,
    notes: p.notes,
    stars: p.stars,
    reviews: p.reviews,
    details: detailsFor(p),
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

      {joiasGroups.map((group) => (
        <CategoryRow key={group.label} label={group.label} count={group.items.length}>
          {group.items.map((p, i) => (
            <div key={p.name} className="sp-slide">
              <ProductCard {...p} index={`Nº ${String(i + 1).padStart(2, '0')}`} onSelect={() => setSelected(p)} />
            </div>
          ))}
        </CategoryRow>
      ))}

      <PieceModal piece={selected ? toPiece(selected) : null} onClose={() => setSelected(null)} />
    </section>
  )
}
