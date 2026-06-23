import type { CSSProperties, ReactNode } from 'react'

interface SectionLabelProps {
  /** Número editorial em serifa itálica (ex.: "01"). Omitir para rótulo sem número. */
  num?: string
  children: ReactNode
  /** Cor do texto/rótulo (default gold-deep; na seção dark use 'var(--gold)'). */
  color?: string
  /** Cor do número (default silver-deep; na seção dark use '#fff'). */
  numColor?: string
  style?: CSSProperties
}

/**
 * Rótulo editorial de seção: "01 · — Categorias".
 * Número serifa itálico + traço + texto uppercase espaçado.
 */
export default function SectionLabel({
  num,
  children,
  color = 'var(--gold-deep)',
  numColor = 'var(--silver-deep)',
  style,
}: SectionLabelProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        fontFamily: "'Jost', sans-serif",
        fontSize: '12px',
        letterSpacing: '.3em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      {num && (
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: '17px',
            letterSpacing: 0,
            color: numColor,
          }}
        >
          {num}
        </span>
      )}
      <span style={{ width: '24px', height: '1px', background: 'var(--silver)' }} />
      {children}
    </div>
  )
}
