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

// Fotos de stock (Unsplash) usadas SÓ como placeholder nas cenas — nos pontos
// onde ainda não temos foto real (modelo na capa, anel de close, etc.).
// TODO: revisar com a Suelen — substituir pelas fotos reais de campanha.
const STOCK = {
  modelChain: 'https://images.unsplash.com/photo-1680068098871-f196518eb6c4', // modelo · colar de prata
  ring: 'https://images.unsplash.com/photo-1656010280156-fa8c1793c235', // anel de prata (close)
  bracelet: 'https://images.unsplash.com/photo-1609361608045-5331e9e6fdcf', // pulseira (editorial)
}

/**
 * Cenas editoriais (hero, banners e fundos das seções).
 * Hero/statement/banners ainda usam o stock acima como PLACEHOLDER (faltam as
 * fotos de modelo). A perfumaria já usa uma FOTO REAL da loja.
 * Para ativar uma cena real, troque o caminho — ex.: img('arquivo.webp').
 * Os componentes têm guarda: se uma cena ficar vazia (''), mostram o box "[ FOTO ]".
 */
export const scenes: Record<'hero' | 'statement' | 'bannerEveryday' | 'bannerGift' | 'perfumaria', string> = {
  hero: img(STOCK.modelChain, 760, 950),
  statement: img(STOCK.ring, 1600, 900),
  bannerEveryday: img(STOCK.bracelet, 800, 600),
  bannerGift: img(STOCK.modelChain, 800, 600),
  perfumaria: img('frasco-perfume-dourado-ornamentado-1.webp'), // foto real · frasco dourado
}
