import { Instagram } from 'lucide-react'
import Button from '../ui/Button'
import { waLink, site } from '../../data/site'

export default function FinalCTA() {
  return (
    <section style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(80px, 9vw, 130px) clamp(20px, 5vw, 72px)', textAlign: 'center' }}>
      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '22px' }}>
        Fale com a gente
      </div>

      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(38px, 7vw, 84px)', lineHeight: 1.04, margin: '0 0 28px', color: 'var(--ink)' }}>
        Sua próxima joia
        <br />
        começa com um <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>oi</em>
      </h2>

      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(16px, 2vw, 19px)', color: 'var(--ink-soft)', maxWidth: '480px', margin: '0 auto 38px' }}>
        Atendimento personalizado, do primeiro contato à entrega. Chame no WhatsApp e descubra a peça perfeita para você.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <Button
          href={waLink('Olá! Vim pelo site e quero um atendimento.')}
          variant="gold"
          dot
          style={{ padding: '19px 40px', fontSize: '15px', boxShadow: '0 20px 44px -20px var(--gold)' }}
        >
          Falar no WhatsApp
        </Button>
        <Button
          href={site.instagramUrl}
          variant="outline-gold"
          ariaLabel="Seguir no Instagram"
          style={{ padding: '19px 36px', fontSize: '15px' }}
        >
          <Instagram size={18} strokeWidth={1.6} />
          Seguir no Instagram
        </Button>
      </div>
    </section>
  )
}
