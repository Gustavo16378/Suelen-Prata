const Diamond = ({ hideMobile }: { hideMobile?: boolean }) => (
  <span className={hideMobile ? 'ab-hide-mobile' : undefined} style={{ color: 'var(--silver)', opacity: 0.85 }}>
    ◆
  </span>
)

/** Faixa superior de avisos — fundo ink, texto dourado suave. */
export default function AnnouncementBar() {
  return (
    <div
      className="announcement-bar"
      style={{
        background: 'var(--ink)',
        color: 'var(--gold-soft)',
        fontFamily: "'Jost', sans-serif",
        fontSize: 'clamp(10px, 1.4vw, 12px)',
        letterSpacing: '.24em',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '10px 16px',
        display: 'flex',
        gap: 'clamp(14px, 4vw, 40px)',
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontWeight: 300,
      }}
    >
      <span>Prata 925 legítima</span>
      <Diamond hideMobile />
      <span className="ab-hide-mobile">Atendimento personalizado</span>
      <Diamond />
      <span>Entrega para todo o Brasil</span>
    </div>
  )
}
