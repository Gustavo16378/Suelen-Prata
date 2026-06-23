import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/faq'
import { waLink } from '../../data/site'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: 'clamp(76px, 8vw, 118px) clamp(20px, 5vw, 72px)',
          display: 'flex',
          gap: 'clamp(32px, 5vw, 80px)',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {/* Intro */}
        <div style={{ flex: '1 1 320px', minWidth: '280px' }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '20px' }}>
            Dúvidas frequentes
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(32px, 4.6vw, 56px)', lineHeight: 1.05, margin: '0 0 18px', color: 'var(--ink)' }}>
            Prata 925 <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>sem mistério</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 'clamp(15px, 1.7vw, 17px)', lineHeight: 1.7, color: 'var(--ink-soft)', margin: '0 0 24px', maxWidth: '380px' }}>
            As perguntas que mais ouvimos antes da compra — respondidas com sinceridade. Ficou com outra? É só chamar.
          </p>
          <a
            href={waLink('Oi Suelen! Tenho uma dúvida antes de comprar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="sp-link"
            style={{ textDecoration: 'none', fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--gold)', paddingBottom: '6px', display: 'inline-block' }}
          >
            Tirar dúvida no WhatsApp →
          </a>
        </div>

        {/* Acordeão */}
        <div style={{ flex: '1 1 480px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 'clamp(18px, 2.2vw, 24px)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(19px, 2.2vw, 23px)',
                    lineHeight: 1.2,
                    color: 'var(--ink)',
                  }}
                >
                  {item.q}
                  <ChevronDown
                    size={20}
                    strokeWidth={1.6}
                    style={{ flex: 'none', color: 'var(--gold-deep)', transition: 'transform .3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 clamp(18px, 2.2vw, 24px) clamp(20px, 2.4vw, 26px)' }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: 1.72, color: 'var(--ink-soft)', margin: '0 0 14px' }}>
                      {item.a}
                    </p>
                    <a
                      href={waLink(`Oi Suelen! ${item.q}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sp-link"
                      style={{ textDecoration: 'none', fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold-deep)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <span style={{ width: '8px', height: '8px', borderRadius: '50% 50% 50% 2px', background: 'var(--gold-deep)', display: 'inline-block' }} />
                      Perguntar no WhatsApp
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
