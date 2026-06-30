import { useState } from 'react'
import { Gift } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import PerfumeCard from '../ui/PerfumeCard'
import CategoryRow from '../ui/CategoryRow'
import PieceModal, { type Piece } from '../ui/PieceModal'
import Button from '../ui/Button'
import { perfumes, perfumeGroups, type Perfume } from '../../data/perfumes'
import { waLink } from '../../data/site'

const PERFUME_DETAILS = ['Curadoria pessoal da Suelen', 'Entrega para todo o Brasil']

function toPiece(p: Perfume): Piece {
  return {
    name: p.name,
    cap: p.cap,
    img: p.img,
    category: p.type,
    notes: p.notes,
    details: [`Família: ${p.family}`, ...PERFUME_DETAILS],
  }
}

export default function PerfumariaVitrine() {
  const featured = perfumes[0]
  const [selected, setSelected] = useState<Perfume | null>(null)

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, var(--bg) 0%, color-mix(in srgb, var(--gold-soft) 50%, var(--bg)) 100%)',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(76px, 8vw, 118px) clamp(20px, 5vw, 72px)' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
          <div style={{ maxWidth: '560px' }}>
            <SectionLabel style={{ marginBottom: '18px' }}>Vitrine · Perfumaria</SectionLabel>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.04, margin: '0 0 14px', color: 'var(--ink)' }}>
              Perfumes &amp; <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>cosméticos</em>
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
              Fragrâncias e cosméticos selecionados a dedo pela Suelen para completar o seu ritual de elegância.
            </p>
          </div>
          <a
            href={waLink('Quero ver toda a perfumaria.')}
            target="_blank"
            rel="noopener noreferrer"
            className="sp-link"
            style={{ textDecoration: 'none', fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--gold)', paddingBottom: '6px', whiteSpace: 'nowrap' }}
          >
            Ver tudo →
          </a>
        </div>

        {/* Destaque da curadoria */}
        <article
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px -56px rgba(60,45,20,.45)',
            marginBottom: 'clamp(18px, 2.5vw, 30px)',
          }}
        >
          {/* imagem */}
          <div
            style={{
              flex: '1 1 320px',
              minWidth: '280px',
              position: 'relative',
              minHeight: 'clamp(300px, 36vw, 440px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              background: 'linear-gradient(160deg, var(--gold-soft), var(--surface-2))',
            }}
          >
            <span style={{ position: 'absolute', top: '18px', left: '20px', zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '17px', color: 'var(--silver-deep)' }}>
              Nº 01
            </span>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', textAlign: 'center', padding: '12px' }}>
              {featured.cap}
            </span>
            <img
              src={featured.img}
              alt={featured.name}
              loading="lazy"
              className="sp-ph"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '20px',
                background: 'color-mix(in srgb, var(--bg) 90%, transparent)',
                color: 'var(--gold-deep)',
                border: '1px solid var(--gold-soft)',
                fontFamily: "'Jost', sans-serif",
                fontSize: '10px',
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                padding: '6px 12px',
                borderRadius: '100px',
              }}
            >
              {featured.family}
            </span>
          </div>

          {/* conteúdo */}
          <div style={{ flex: '1 1 380px', minWidth: '280px', padding: 'clamp(28px, 4vw, 52px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'Jost', sans-serif", fontSize: '11.5px', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gold-deep)' }}>
              Destaque da curadoria
              <span style={{ flex: 1, height: '1px', background: 'var(--line)' }} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(30px, 4.2vw, 50px)', lineHeight: 1.04, margin: 0, color: 'var(--ink)' }}>
              {featured.name}
            </h3>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(14px, 1.7vw, 16.5px)', lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0, maxWidth: '380px' }}>
              {featured.notes}.
            </p>
            <div style={{ marginTop: '4px' }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--silver-deep)' }}>{featured.type}</span>
            </div>
            <div style={{ marginTop: '6px' }}>
              <Button href={featured.href} variant="gold" dot style={{ padding: '15px 28px', fontSize: '13.5px' }}>
                Pedir no WhatsApp
              </Button>
            </div>
          </div>
        </article>

        {/* Fileiras por categoria (o destaque acima sai da sua fileira) */}
        {perfumeGroups.map((group) => {
          const items = group.items.filter((p) => p.name !== featured.name)
          if (items.length === 0) return null
          return (
            <CategoryRow key={group.label} label={group.label} count={items.length}>
              {items.map((p, i) => (
                <div key={p.name} className="sp-slide">
                  <PerfumeCard {...p} index={`Nº ${String(i + 1).padStart(2, '0')}`} onSelect={() => setSelected(p)} />
                </div>
              ))}
            </CategoryRow>
          )
        })}

        {/* Banner "Monte seu kit" */}
        <a
          href={waLink('Quero montar um kit presente (joia + perfume).')}
          target="_blank"
          rel="noopener noreferrer"
          className="sp-btn"
          style={{
            marginTop: 'clamp(18px, 2.5vw, 30px)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(18px, 3vw, 40px)',
            background: 'linear-gradient(120deg, var(--gold-soft), color-mix(in srgb, var(--gold-soft) 45%, var(--surface)))',
            border: '1px solid var(--gold)',
            borderRadius: '6px',
            padding: 'clamp(24px, 3vw, 40px)',
            textDecoration: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 2vw, 26px)', minWidth: '260px' }}>
            <span style={{ flex: 'none', width: '56px', height: '56px', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-deep)' }}>
              <Gift size={24} strokeWidth={1.4} />
            </span>
            <div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '7px' }}>Presente</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3.2vw, 36px)', lineHeight: 1.04, color: 'var(--ink)' }}>
                Monte seu <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>kit</em> — joia + perfume
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '14px', lineHeight: 1.55, color: 'var(--ink-soft)', margin: '8px 0 0', maxWidth: '420px' }}>
                Combine uma peça em prata com a fragrância certa e ganhe uma embalagem especial para presentear.
              </p>
            </div>
          </div>
          <span
            style={{
              flex: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--gold)',
              color: '#fff',
              fontFamily: "'Jost', sans-serif",
              fontSize: '13px',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              padding: '15px 28px',
              borderRadius: '100px',
            }}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50% 50% 50% 2px', background: '#fff', display: 'inline-block' }} />
            Montar no WhatsApp →
          </span>
        </a>

        <PieceModal piece={selected ? toPiece(selected) : null} onClose={() => setSelected(null)} />
      </div>
    </section>
  )
}
