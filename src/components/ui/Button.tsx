import type { CSSProperties, ReactNode } from 'react'

export type ButtonVariant = 'gold' | 'white' | 'outline-ink' | 'outline-gold'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  /** Mostra o "pingo" de WhatsApp (gota) à esquerda do texto. */
  dot?: boolean
  /** Abre em nova aba (default true — usado para links wa.me / instagram). */
  newTab?: boolean
  ariaLabel?: string
  className?: string
  /** Override de padding/font-size/etc. para casar exatamente com cada uso do design. */
  style?: CSSProperties
}

const VARIANTS: Record<ButtonVariant, CSSProperties> = {
  gold: { background: 'var(--gold)', color: '#fff', border: '1px solid var(--gold)' },
  white: { background: '#fff', color: 'var(--ink)', border: '1px solid #fff' },
  'outline-ink': { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)' },
  'outline-gold': { background: 'transparent', color: 'var(--gold-deep)', border: '1px solid var(--gold)' },
}

const DOT_COLOR: Record<ButtonVariant, string> = {
  gold: '#fff',
  white: 'var(--ink)',
  'outline-ink': 'var(--ink)',
  'outline-gold': 'var(--gold-deep)',
}

/**
 * CTA em pílula do design. Base compartilhada (sp-btn, raio 100px, flex, fonte Jost
 * uppercase). Padding / font-size variam por uso — passe via `style` para fidelidade.
 */
export default function Button({
  href,
  children,
  variant = 'gold',
  dot = false,
  newTab = true,
  ariaLabel,
  className = '',
  style,
}: ButtonProps) {
  const base: CSSProperties = {
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: '100px',
    fontFamily: "'Jost', sans-serif",
    fontSize: '14px',
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    padding: '16px 30px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    ...VARIANTS[variant],
    ...style,
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`sp-btn ${className}`.trim()}
      style={base}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {dot && (
        <span
          aria-hidden="true"
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50% 50% 50% 2px',
            background: DOT_COLOR[variant],
            display: 'inline-block',
            flex: 'none',
          }}
        />
      )}
      {children}
    </a>
  )
}
