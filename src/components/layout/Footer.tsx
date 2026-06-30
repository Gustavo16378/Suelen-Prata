import { site, waLink } from '../../data/site'

// Cores e medidas portadas verbatim do design (linhas 812-856).
const linkCol = {
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  fontFamily: "'Jost', sans-serif",
  fontSize: '14px',
  color: 'color-mix(in srgb, var(--bg) 72%, transparent)',
} as const

const heading = {
  fontFamily: "'Jost', sans-serif",
  fontSize: '11px',
  letterSpacing: '.22em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  marginBottom: '18px',
} as const

const linkStyle = { textDecoration: 'none', color: 'inherit' } as const

const bottomSpan = {
  fontFamily: "'Jost', sans-serif",
  fontSize: '11.5px',
  letterSpacing: '.06em',
  color: 'color-mix(in srgb, var(--bg) 55%, transparent)',
} as const

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 84px) clamp(20px, 5vw, 72px) clamp(28px, 3vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(168px, 1fr))',
          gap: 'clamp(28px, 4vw, 56px)',
          alignItems: 'start',
        }}
      >
        {/* Marca */}
        <div style={{ maxWidth: '330px', minWidth: '200px' }}>
          <img
            src="/photos/logo-preta-transparente.png"
            alt="Suelen Pratas e Perfumaria"
            style={{ height: '96px', width: 'auto', display: 'block', marginLeft: '-6px' }}
          />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '20px', color: 'color-mix(in srgb, var(--bg) 75%, transparent)', margin: '18px 0 0', lineHeight: 1.4 }}>
            Autenticidade e elegância atemporal.
          </p>
        </div>

        {/* Contato */}
        <div>
          <div style={heading}>Contato</div>
          <div style={linkCol}>
            <a href={waLink('Olá! Vim pelo site.')} target="_blank" rel="noopener" className="sp-link" style={linkStyle}>WhatsApp</a>
            <a href={site.instagramUrl} target="_blank" rel="noopener" className="sp-link" style={linkStyle}>Instagram</a>
            <a href={waLink('Olá! Vim pelo site.')} target="_blank" rel="noopener" className="sp-link" style={linkStyle}>{site.phone}</a>
          </div>
        </div>

        {/* Atendimento */}
        <div>
          <div style={heading}>Atendimento</div>
          <div style={linkCol}>
            <span>{site.hours}</span>
            <span>Entrega para todo o Brasil</span>
            <span>Prata 925 certificada</span>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div
        style={{
          borderTop: '1px solid color-mix(in srgb, var(--bg) 18%, transparent)',
          padding: '22px clamp(20px, 5vw, 72px)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        <span style={bottomSpan}>© 2026 Suelen Pratas &amp; Perfumaria · Prata 925 legítima</span>
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={bottomSpan}>Feito com cuidado por Suelen &amp; Wellyngton</span>
          <a
            href="https://gustavodev.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="sp-link"
            style={{ ...bottomSpan, textDecoration: 'none' }}
          >
            Desenvolvido por{' '}
            <strong style={{ fontWeight: 500, color: 'color-mix(in srgb, var(--bg) 82%, transparent)' }}>Gustavo Dev</strong>
          </a>
        </div>
      </div>
    </footer>
  )
}
