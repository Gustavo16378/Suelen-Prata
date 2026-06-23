import Button from '../ui/Button'
import { waLink } from '../../data/site'
import { scenes } from '../../data/images'

export default function StatementBand() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'clamp(420px, 52vw, 560px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--ink)',
      }}
    >
      {/* Fundo decorativo: anel de prata sobre o ink */}
      <img
        src={scenes.statement}
        alt="Anel de prata"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.42 }}
      />

      {/* Véu escuro p/ legibilidade: forte na esquerda (texto), suave na direita */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(100deg, color-mix(in srgb, var(--ink) 90%, transparent) 0%, color-mix(in srgb, var(--ink) 70%, transparent) 46%, color-mix(in srgb, var(--ink) 28%, transparent) 100%)',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '1320px', margin: '0 auto', padding: 'clamp(64px, 6vw, 90px) clamp(20px, 5vw, 72px)', width: '100%' }}>
        <div style={{ maxWidth: '620px' }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '.3em', textTransform: 'uppercase', color: '#C9CED3', marginBottom: '22px' }}>
            Prata 925 de verdade
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(34px, 5.2vw, 62px)', lineHeight: 1.08, margin: '0 0 24px', color: '#fff' }}>
            O brilho que não desbota — <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>e a confiança</em> que fica
          </h2>

          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.7, color: 'rgba(255,255,255,.78)', margin: '0 0 34px', maxWidth: '480px' }}>
            Cada peça é certificada e selecionada à mão. Antialérgica, durável e pensada para acompanhar você por muito tempo — não por uma estação.
          </p>

          <Button href={waLink('Quero saber mais sobre a prata 925.')} variant="white" style={{ padding: '16px 30px', fontSize: '13.5px' }}>
            Conhecer a prata
          </Button>
        </div>
      </div>
    </section>
  )
}
