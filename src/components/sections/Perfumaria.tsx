import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { perfumeFamilies } from '../../data/perfumes'
import { scenes } from '../../data/images'
import { waLink } from '../../data/site'

// 04 · Perfumaria — seção dark luxe (fundo --ink, texto branco).
export default function Perfumaria() {
  return (
    <section id="perfumaria" style={{ background: 'var(--ink)', color: '#fff' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(76px, 8vw, 120px) clamp(20px, 5vw, 72px)' }}>
        <div style={{ display: 'flex', gap: 'clamp(36px, 5vw, 80px)', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* imagem (order:2) */}
          <div style={{ flex: '1 1 320px', minWidth: '280px', order: 2 }}>
            <div
              style={{
                aspectRatio: '4 / 5',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
                background: '#1d1812',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 50px 100px -50px rgba(0,0,0,.7)',
              }}
            >
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', textAlign: 'center' }}>
                [ FOTO ] perfumaria · frasco
              </span>
              {scenes.perfumaria && (
                <img
                  src={scenes.perfumaria}
                  alt="Perfume árabe Afeef (Lattafa) — perfumaria Suelen"
                  loading="lazy"
                  className="sp-ph"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          </div>

          {/* texto + lista (order:1) */}
          <div style={{ flex: '1 1 380px', minWidth: '300px', order: 1 }}>
            <SectionLabel num="03" color="var(--gold)" numColor="#fff" style={{ marginBottom: '22px' }}>
              Perfumaria
            </SectionLabel>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(34px, 4.8vw, 58px)', lineHeight: 1.06, margin: '0 0 22px', color: '#fff' }}>
              A assinatura de <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>um aroma</em>
            </h2>

            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(15px, 1.7vw, 17.5px)', lineHeight: 1.75, color: 'rgba(255,255,255,.74)', margin: '0 0 34px', maxWidth: '460px' }}>
              Mais que joias: uma curadoria de perfumes e cosméticos selecionada pela Suelen para completar o seu ritual de elegância. Fragrâncias com presença, do casual ao marcante.
            </p>

            {/* famílias olfativas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: '36px' }}>
              {perfumeFamilies.map((f) => (
                <div key={f.name} className="perfume-family" style={{ display: 'flex', alignItems: 'baseline', gap: '18px', padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,.14)' }}>
                  <span className="pf-name" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '23px', color: '#fff', flex: 1 }}>{f.name}</span>
                  <span className="pf-note" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,.6)', flex: 1.4 }}>{f.note}</span>
                </div>
              ))}
            </div>

            <Button href={waLink('Quero conhecer a linha de perfumaria.')} variant="gold" dot style={{ padding: '16px 30px', fontSize: '13.5px' }}>
              Conhecer a perfumaria
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
