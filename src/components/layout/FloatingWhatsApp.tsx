import { waLink } from '../../data/site'

/** Botão flutuante de WhatsApp, com leve animação de flutuação. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink('Olá! Vim pelo site.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 60,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'var(--gold)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 16px 34px -12px var(--gold)',
        animation: 'floaty 3.4s ease-in-out infinite',
        textDecoration: 'none',
      }}
    >
      <span style={{ width: '26px', height: '24px', borderRadius: '50% 50% 50% 4px', background: '#fff', display: 'inline-block' }} />
    </a>
  )
}
