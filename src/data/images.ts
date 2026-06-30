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

/**
 * Cenas editoriais (hero, banners e fundos das seções) — agora com FOTOS REAIS
 * (sem mais stock do Unsplash).
 * - hero e banners: fotos do casal (Suelen & Wellyngton);
 * - statement: correntes sobre fundo escuro;
 * - perfumaria: Afeef (frasco dourado).
 * Para trocar uma cena, basta mudar o arquivo aqui. Os componentes têm guarda:
 * se uma cena ficar vazia (''), mostram o box "[ FOTO ]".
 */
export const scenes: Record<'hero' | 'statement' | 'bannerEveryday' | 'bannerGift' | 'perfumaria', string> = {
  hero: img('casal-em-festa-1.webp'), // casal · capa
  statement: img('correntes-prata-expostas-1.webp'), // correntes sobre fundo escuro
  bannerEveryday: img('casal-sorrindo-carro-1.webp'), // casal · dia a dia
  bannerGift: img('casal-sorrindo-oculos-escuros-1.webp'), // casal · celebrando
  perfumaria: img('frasco-perfume-dourado-ornamentado-1.webp'), // Afeef · frasco dourado
}
