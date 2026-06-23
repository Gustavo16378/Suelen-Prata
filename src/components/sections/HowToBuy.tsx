import { Search, MessageCircle, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  num: string
  Icon: LucideIcon
  title: string
  desc: string
}

const steps: Step[] = [
  { num: '01', Icon: Search, title: 'Escolha a peça', desc: 'Navegue pela vitrine e separe as joias e perfumes que mais combinam com você.' },
  { num: '02', Icon: MessageCircle, title: 'Chame no WhatsApp', desc: 'Toque em “Pedir” e fale direto com a Suelen — dúvidas, fotos e valores na hora.' },
  { num: '03', Icon: Truck, title: 'Receba em casa', desc: 'Confirme o pedido e receba com segurança: entrega para todo o Brasil.' },
]

export default function HowToBuy() {
  return (
    <section style={{ background: 'color-mix(in srgb, var(--ink) 5%, var(--bg))', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(76px, 8vw, 110px) clamp(20px, 5vw, 72px)' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 64px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '18px' }}>
            Como comprar
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(32px, 5vw, 58px)', lineHeight: 1.05, margin: '0 0 16px', color: 'var(--ink)' }}>
            Simples como uma <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>conversa</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '520px', margin: 0 }}>
            Sem carrinho e sem burocracia: do catálogo ao seu colo em três passos, com atendimento de verdade.
          </p>
        </div>

        {/* Passos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(16px, 2vw, 28px)' }}>
          {steps.map(({ num, Icon, title, desc }) => (
            <div
              key={num}
              className="sp-card"
              style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '6px', padding: 'clamp(28px, 3vw, 40px)', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '46px', lineHeight: 1, color: 'var(--gold-deep)' }}>{num}</span>
                <span style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--gold-soft)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-deep)' }}>
                  <Icon size={22} strokeWidth={1.5} />
                </span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(24px, 2.6vw, 30px)', lineHeight: 1.1, margin: 0, color: 'var(--ink)' }}>{title}</h3>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
