# Suelen Pratas e Perfumaria

Site institucional / vitrine premium (catálogo + WhatsApp, **sem checkout**) da marca
**Suelen Pratas e Perfumaria** — joias em **Prata 925** e perfumaria. Estética editorial,
clara e luminosa, com dourado champagne como acento. *"Autenticidade e elegância atemporal."*

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (tokens via CSS variables)
- Fontes: Cormorant Garamond (títulos) + Jost (corpo)
- Ícones: [lucide-react](https://lucide.dev/)

## Comandos

```bash
npm install      # instala dependências
npm run dev      # ambiente local
npm run build    # build de produção (dist/)
npm run preview  # preview do build
npm run lint     # ESLint
```

## Estrutura

```
src/
  data/         # conteúdo tipado (produtos, perfumes, faq, categorias, contato)
  hooks/        # useScrollDirection, useScrollLock, useActiveSection
  components/
    layout/     # AnnouncementBar, Navbar, MobileMenu, Footer, FloatingWhatsApp, ScrollProgress
    sections/   # Hero, BestSellers, Story, Perfumaria, FAQ, HowToBuy, ...
    ui/         # Button, SectionLabel, ProductCard, PerfumeCard
```

## Pendências

- Trocar o número de WhatsApp placeholder pelo real em `src/data/site.ts`.
- Substituir as imagens stock pelas fotos reais (produtos + casal).

---

Desenvolvido por [Gustavo Dev](https://gustavodev.dev/).
