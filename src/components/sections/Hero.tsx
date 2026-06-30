import Button from '../ui/Button'
import { waLink } from '../../data/site'
import { scenes } from '../../data/images'

interface StatProps {
  value: string
  label: string
  color: string
}

const Stat = ({ value, label, color }: StatProps) => (
  <div className="hero-stat">
    <div className="hero-stat-num" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '34px', color, lineHeight: 1 }}>{value}</div>
    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: '6px' }}>
      {label}
    </div>
  </div>
)

const Divider = () => <div className="hero-divider" style={{ width: '1px', background: 'var(--line)' }} />

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: 'clamp(44px, 5vw, 72px) clamp(20px, 5vw, 72px) clamp(64px, 7vw, 96px)',
        display: 'flex',
        gap: 'clamp(32px, 5vw, 76px)',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {/* Texto */}
      <div className="hero-copy" style={{ flex: '1 1 400px', minWidth: '300px' }}>
        <div className="hero-eyebrow" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '.34em', textTransform: 'uppercase', color: 'var(--silver-deep)', marginBottom: '26px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ width: '34px', height: '1px', background: 'var(--silver)', display: 'inline-block' }} />
          Joias em Prata 925 &amp; Perfumaria
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(46px, 7.4vw, 90px)', lineHeight: 1.0, letterSpacing: '-.018em', margin: '0 0 28px', color: 'var(--ink)' }}>
          Autenticidade
          <br />e <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>elegância</em> atemporal
        </h1>

        <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(16px, 1.9vw, 19px)', lineHeight: 1.68, color: 'var(--ink-soft)', maxWidth: '466px', margin: '0 0 40px' }}>
          Prata 925 de verdade, com o brilho que dura. Peças selecionadas à mão para quem entende que sofisticação está nos detalhes — e um atendimento que é só seu.
        </p>

        <div className="hero-actions" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Button href={waLink('Olá! Gostaria de conhecer as peças.')} variant="gold" dot style={{ padding: '17px 30px' }}>
            Falar no WhatsApp
          </Button>
          <Button href="#desejados" variant="outline-ink" newTab={false} style={{ padding: '17px 30px' }}>
            Ver coleção
          </Button>
        </div>

        <div className="hero-stats" style={{ display: 'flex', gap: 'clamp(22px, 4vw, 48px)', marginTop: '52px', flexWrap: 'wrap' }}>
          <Stat value="925" label="Prata legítima" color="var(--silver-deep)" />
          <Divider />
          <Stat value="+5mil" label="Clientes felizes" color="var(--gold-deep)" />
          <Divider />
          <Stat value="Brasil" label="Entrega nacional" color="var(--gold-deep)" />
        </div>
      </div>

      {/* HERO: modelo usando colar de PRATA · trocar pela foto da campanha */}
      <div style={{ flex: '1 1 380px', minWidth: '300px', position: 'relative' }}>
        <div
          style={{
            aspectRatio: '4 / 5',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
            background: 'var(--surface-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 50px 90px -54px rgba(40,30,15,.6)',
            border: '1px solid var(--line)',
          }}
        >
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', textAlign: 'center', maxWidth: '200px', lineHeight: 1.7 }}>
            [ FOTO ] Modelo usando
            <br />
            colar de prata 925
          </span>
          {scenes.hero && (
            <img
              src={scenes.hero}
              alt="Colar de coração em prata 925 — Suelen Pratas e Perfumaria"
              fetchPriority="high"
              className="sp-ph"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>

        <div style={{ position: 'absolute', bottom: '-22px', left: '-22px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '4px', padding: '15px 20px', boxShadow: '0 24px 44px -28px rgba(60,45,20,.5)', zIndex: 2 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: 'var(--ink)' }}>Prata que dura</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '10.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--silver-deep)', marginTop: '3px' }}>925 · Antialérgica</div>
        </div>
      </div>
    </section>
  )
}
