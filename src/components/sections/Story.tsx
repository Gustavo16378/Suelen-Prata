import SectionLabel from '../ui/SectionLabel'
import Slideshow from '../ui/Slideshow'
import { coupleSlides } from '../../data/images'

export default function Story() {
  return (
    <section
      id="historia"
      style={{
        background: 'color-mix(in srgb, var(--ink) 5%, var(--bg))',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: 'clamp(76px, 8vw, 120px) clamp(20px, 5vw, 72px)',
          display: 'flex',
          gap: 'clamp(32px, 5vw, 80px)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* FOTO: substituir pela foto real do casal Suelen & Wellyngton */}
        <div style={{ flex: '1 1 320px', minWidth: '280px' }}>
          <div
            style={{
              aspectRatio: '4 / 5',
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid var(--line)',
              background:
                'repeating-linear-gradient(135deg, var(--surface-2), var(--surface-2) 16px, var(--surface) 16px, var(--surface) 32px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 40px 80px -52px rgba(60,45,20,.5)',
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '11px',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--ink-soft)',
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              [ FOTO ]
              <br />
              Suelen &amp; Wellyngton
              <br />
              retrato real do casal
            </span>
            <Slideshow images={coupleSlides} alt="Suelen e Wellyngton" />
          </div>
        </div>

        <div style={{ flex: '1 1 380px', minWidth: '300px' }}>
          <SectionLabel num="02" style={{ marginBottom: '22px' }}>
            Nossa história
          </SectionLabel>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(32px, 4.6vw, 56px)',
              lineHeight: 1.08,
              margin: '0 0 26px',
              color: 'var(--ink)',
            }}
          >
            Feito por quem <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>acredita</em> em cada detalhe
          </h2>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(15px, 1.7vw, 17.5px)',
              lineHeight: 1.75,
              color: 'var(--ink-soft)',
              margin: '0 0 20px',
            }}
          >
            A Suelen Pratas &amp; Perfumaria nasceu do sonho de um casal —{' '}
            <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Suelen e Wellyngton</strong> — que transformou a
            paixão por joias em um cuidado quase artesanal com cada cliente. Cada peça é escolhida à mão, com olhar
            atento à autenticidade da prata 925 e à elegância que atravessa o tempo.
          </p>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(15px, 1.7vw, 17.5px)',
              lineHeight: 1.75,
              color: 'var(--ink-soft)',
              margin: '0 0 34px',
            }}
          >
            Aqui você não recebe só uma joia: recebe um atendimento que é só seu, uma embalagem pensada para presentear e
            a confiança de quem trata cada pedido como se fosse o primeiro.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '30px',
                color: 'var(--gold-deep)',
              }}
            >
              Suelen &amp; Wellyngton
            </span>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '11px',
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--ink-soft)',
              }}
            >
              Fundadores
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
