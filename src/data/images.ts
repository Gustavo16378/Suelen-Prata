// Imagens stock (Unsplash) com foco em PRATA, herdadas do design-fonte.
// ⚠️ Substituir pelas fotos reais do catálogo / campanha quando disponíveis.

export const IMG = {
  chain: 'https://images.unsplash.com/photo-1680068098871-f196518eb6c4', // corrente de prata no pescoço
  ring: 'https://images.unsplash.com/photo-1656010280156-fa8c1793c235', // anel de prata (close)
  bracelet: 'https://images.unsplash.com/photo-1609361608045-5331e9e6fdcf', // pulseira de prata (mão, editorial)
  chainP: 'https://plus.unsplash.com/premium_photo-1757489874995-2f7c64b921ea', // corrente de prata (produto)
  perfumeB: 'https://images.unsplash.com/photo-1618436917143-548beebc58e5', // perfume vidro claro
  perfumeC: 'https://plus.unsplash.com/premium_photo-1757489875582-12520c2f417f', // perfume close
  splash: 'https://plus.unsplash.com/premium_photo-1757489874987-6eb696e79b43', // body splash
  oil: 'https://plus.unsplash.com/premium_photo-1757489875059-a90271cba8a2', // óleo / dropper
  cosmetic: 'https://plus.unsplash.com/premium_photo-1757489875010-d85f0f26eecc', // cosméticos
} as const

/** Constrói a URL com parâmetros de crop/resize do Unsplash. */
export function img(base: string, w: number, h: number): string {
  return `${base}?auto=format&fit=crop&q=74&w=${w}&h=${h}`
}

/** Imagens de cena usadas pelas seções editoriais (não-card). */
export const scenes = {
  hero: img(IMG.chain, 760, 950), // modelo usando colar de prata
  statement: img(IMG.ring, 1600, 900), // anel de prata (fundo escuro)
  bannerEveryday: img(IMG.bracelet, 800, 600), // joias do dia a dia
  bannerGift: img(IMG.chain, 800, 600), // peça statement · pescoço
  perfumaria: img(IMG.perfumeB, 760, 950), // perfumaria · frasco
} as const
