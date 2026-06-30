// Catálogo de imagens reais da loja.
// As fotos ficam em /public/photos/img-convertidas/*.webp e são referenciadas
// pelos arrays de dados (products.ts / perfumes.ts).
// As antigas URLs de stock (Unsplash) foram removidas.

/** Pasta pública onde estão as fotos do catálogo. */
export const IMG_DIR = '/photos/img-convertidas'

/**
 * Resolve o caminho de uma imagem. Mantém a assinatura `img(base, w, h)` usada
 * pelos arrays para não quebrar chamadas existentes.
 * - Nome de arquivo local (ex.: "corrente-prata-groumet-1.webp") → vira
 *   `${IMG_DIR}/arquivo`. w/h são ignorados (o `object-fit: cover` do CSS já
 *   faz o recorte).
 * - Caminho que já começa com "/" → retorna direto.
 * - URL remota (legado) → aplica os parâmetros de crop/resize.
 */
export function img(base: string, w?: number, h?: number): string {
  if (!base) return ''
  if (base.startsWith('http')) return `${base}?auto=format&fit=crop&q=74&w=${w}&h=${h}`
  if (base.startsWith('/')) return base
  return `${IMG_DIR}/${base}`
}

/** Fotos do casal que passam no carrossel/slideshow do hero (capa). */
export const heroSlides: string[] = [
  img('casal-em-festa-1.webp'),
  img('casal-sorrindo-carro-1.webp'),
  img('casal-sorrindo-oculos-escuros-1.webp'),
]

/**
 * Cenas editoriais (banners e fundos das seções) — FOTOS REAIS (sem stock).
 * O hero usa o slideshow `heroSlides` acima (fotos do casal).
 * Componentes têm guarda: cena vazia ('') mostra o box "[ FOTO ]".
 */
export const scenes: Record<'statement' | 'bannerEveryday' | 'bannerGift' | 'perfumaria', string> = {
  statement: img('correntes-prata-expostas-1.webp'), // correntes sobre fundo escuro
  bannerEveryday: img('pulseiras-prata-empilhadas-1.webp'), // joias do dia a dia
  bannerGift: img('conjunto-joia-azul-presente-1.webp'), // peça para presente
  perfumaria: img('frasco-perfume-dourado-ornamentado-1.webp'), // Afeef · frasco dourado
}
