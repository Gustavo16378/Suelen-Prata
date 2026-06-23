import type { Config } from 'tailwindcss'

// Os tokens apontam para CSS vars definidas em src/index.css (:root),
// permitindo trocar a paleta inteira num só lugar. Paleta default = "Off-white clean".
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        line: 'var(--line)',
        gold: 'var(--gold)',
        'gold-deep': 'var(--gold-deep)',
        'gold-soft': 'var(--gold-soft)',
        silver: 'var(--silver)',
        'silver-deep': 'var(--silver-deep)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Jost', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
} satisfies Config
