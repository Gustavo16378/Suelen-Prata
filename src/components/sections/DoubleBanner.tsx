import Button from '../ui/Button'
import { waLink } from '../../data/site'
import { scenes } from '../../data/images'

// Dois banners editoriais lado a lado (grid auto-fit). Cada card: imagem cover +
// caption "[ FOTO ]" atrás, overlay em gradiente, label, h3 com <em> e CTA branco.
const banners = [
  {
    img: scenes.bannerEveryday,
    alt: 'Para todo dia',
    caption: '[ FOTO ] joias do dia a dia',
    label: 'Para todo dia',
    href: waLink('Quero ver as peças do dia a dia.'),
    h3: (
      <>
        Leves &amp; <em style={{ fontStyle: 'italic' }}>essenciais</em>
      </>
    ),
  },
  {
    img: scenes.bannerGift,
    alt: 'Para presentear',
    caption: '[ FOTO ] peça statement · pescoço',
    label: 'Para presentear',
    href: waLink('Quero uma peça para presente.'),
    h3: (
      <>
        Peças com <em style={{ fontStyle: 'italic' }}>presença</em>
      </>
    ),
  },
]

export default function DoubleBanner() {
  return (
    <section
      style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '0 clamp(20px, 5vw, 72px) clamp(76px, 8vw, 118px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(16px, 2vw, 28px)',
      }}
    >
      {banners.map((b) => (
        <div
          key={b.label}
          style={{
            position: 'relative',
            borderRadius: '4px',
            overflow: 'hidden',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'flex-end',
            background: 'var(--surface-2)',
            border: '1px solid var(--line)',
          }}
        >
          <span
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Jost', sans-serif",
              fontSize: '10px',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
            }}
          >
            {b.caption}
          </span>
          <img
            src={b.img}
            alt={b.alt}
            loading="lazy"
            className="sp-ph"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'relative',
              padding: 'clamp(28px, 3vw, 44px)',
              background: 'linear-gradient(to top, rgba(20,15,8,.66), transparent)',
              width: '100%',
            }}
          >
            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '11px',
                letterSpacing: '.28em',
                textTransform: 'uppercase',
                color: '#F0E4CC',
                marginBottom: '10px',
              }}
            >
              {b.label}
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(28px, 3.4vw, 42px)',
                margin: '0 0 18px',
                color: '#fff',
              }}
            >
              {b.h3}
            </h3>
            <Button href={b.href} variant="white" style={{ fontSize: '12.5px', letterSpacing: '.12em', padding: '13px 26px' }}>
              Explorar
            </Button>
          </div>
        </div>
      ))}
    </section>
  )
}
