import { site } from './site'
import type { Product } from './products'
import type { Perfume } from './perfumes'

// ============================================================================
//  Configuração central de SEO. Mude o domínio AQUI (um lugar só).
// ============================================================================

// ⚠️ TODO: trocar pelo domínio real quando ele for definido.
//   Ex.: 'https://suelenprataseperfumaria.com.br'
//   Tudo (canonical, Open Graph, sitemap, JSON-LD) usa essa constante.
export const SITE_URL = 'https://SEU-DOMINIO.com.br'

export const SITE_NAME = 'Suelen Pratas e Perfumaria'

/** Title padrão da home (~58 caracteres). */
export const SITE_TITLE = 'Joias de Prata 925 & Perfumaria | Suelen Pratas'

/** Description padrão (~155 caracteres). */
export const SITE_DESCRIPTION =
  'Joias em prata 925 legítima e perfumaria: correntes, colares, pulseiras, anéis e perfumes importados. Atendimento pelo WhatsApp e entrega para todo o Brasil.'

// Imagem de preview (WhatsApp/Instagram/Google).
// ⚠️ TODO: idealmente trocar por uma capa dedicada 1200×630px.
export const OG_IMAGE = '/photos/img-convertidas/colar-cordao-rosa-coracao-1.webp'

/** Monta uma URL absoluta a partir de um caminho relativo. */
export const absUrl = (path: string): string =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

const phone = `+${site.whatsapp}`
const sameAs = [site.instagramUrl, `https://wa.me/${site.whatsapp}`]

// ---- Blocos de JSON-LD (Schema.org) ---------------------------------------

function organizationLd() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absUrl('/photos/logo-preta-completa-com-contato.png'),
    image: absUrl(OG_IMAGE),
    sameAs,
  }
}

function storeLd() {
  return {
    '@type': 'JewelryStore',
    '@id': `${SITE_URL}/#store`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: absUrl(OG_IMAGE),
    telephone: phone,
    sameAs,
    areaServed: { '@type': 'Country', name: 'Brasil' },
    // Sem preço por opção da loja — não incluímos `offers` nem `priceRange`.
  }
}

/** Product sem `offers`/preço (a loja não expõe valor), mas indexável. */
function productLd(name: string, description: string, image: string, category: string) {
  return {
    '@type': 'Product',
    name,
    description,
    image: absUrl(image),
    brand: { '@type': 'Brand', name: SITE_NAME },
    category,
  }
}

function catalogLd(joias: Product[], perfumes: Perfume[]) {
  const products = [
    ...joias.map((p) => productLd(p.name, p.notes, p.img, `Joias em prata 925 · ${p.tag}`)),
    ...perfumes.map((p) => productLd(p.name, p.notes, p.img, `Perfumaria · ${p.group}`)),
  ]
  return {
    '@type': 'ItemList',
    name: `Catálogo · ${SITE_NAME}`,
    numberOfItems: products.length,
    itemListElement: products.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item,
    })),
  }
}

/** JSON-LD da home: Organization + JewelryStore + catálogo (Products). */
export function homeJsonLd(joias: Product[], perfumes: Perfume[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationLd(), storeLd(), catalogLd(joias, perfumes)],
  }
}
