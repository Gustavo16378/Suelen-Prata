// BENEFITS STRIP — 5 selos de confiança (sem dados externos / sem primitivas)
interface Benefit {
  glyph: string
  glyphSize: string
  line1: string
  line2: string
}

const benefits: Benefit[] = [
  { glyph: '925', glyphSize: '19px', line1: 'Prata 925', line2: 'Certificada' },
  { glyph: '♢', glyphSize: '21px', line1: 'Atendimento', line2: 'Personalizado' },
  { glyph: '✿', glyphSize: '19px', line1: 'Embalagem', line2: 'Presenteável' },
  { glyph: '✈', glyphSize: '18px', line1: 'Entrega para', line2: 'todo o Brasil' },
  { glyph: '✓', glyphSize: '21px', line1: 'Garantia de', line2: 'Qualidade' },
]

export default function Benefits() {
  return (
    <section
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-9 lg:gap-10"
      style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: 'clamp(64px, 5vw, 76px) clamp(20px, 5vw, 72px)',
      }}
    >
      {benefits.map((b) => (
        <div
          key={b.line1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid var(--silver)',
              color: 'var(--silver-deep)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: b.glyphSize,
            }}
          >
            {b.glyph}
          </span>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '.05em', lineHeight: 1.5, color: 'var(--ink)' }}>
            {b.line1}
            <br />
            {b.line2}
          </div>
        </div>
      ))}
    </section>
  )
}
