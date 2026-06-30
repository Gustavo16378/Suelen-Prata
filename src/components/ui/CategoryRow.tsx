import type { ReactNode } from 'react'
import Carousel from './Carousel'

interface CategoryRowProps {
  /** Nome da categoria (ex.: "Colares"). */
  label: string
  /** Quantidade de itens — exibida ao lado do título. */
  count: number
  children: ReactNode
}

/**
 * Fileira de categoria: um cabeçalho discreto (nome + contagem) seguido de um
 * carrossel horizontal com os cards daquela categoria.
 */
export default function CategoryRow({ label, count, children }: CategoryRowProps) {
  return (
    <div style={{ marginTop: 'clamp(30px, 4vw, 52px)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '16px' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(23px, 3vw, 33px)', lineHeight: 1.1, color: 'var(--ink)', margin: 0 }}>
          {label}
        </h3>
        <span style={{ flex: 1, height: '1px', background: 'var(--line)' }} />
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}>
          {count} {count === 1 ? 'modelo' : 'modelos'}
        </span>
      </div>
      <Carousel label={label}>{children}</Carousel>
    </div>
  )
}
