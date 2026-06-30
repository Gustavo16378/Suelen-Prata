import { Head } from 'vite-react-ssg'
import { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, OG_IMAGE, absUrl } from '../data/seo'

interface SeoProps {
  /** Title da página (default: SITE_TITLE). */
  title?: string
  /** Meta description (default: SITE_DESCRIPTION). */
  description?: string
  /** Caminho para o canonical/og:url (default: '/'). */
  path?: string
  /** Imagem de preview (default: OG_IMAGE). */
  image?: string
  /** Objeto JSON-LD (Schema.org) a injetar no head. */
  jsonLd?: object
}

/**
 * Cabeçalho de SEO reutilizável (renderizado no HTML estático via SSG).
 * Define title, description, canonical, robots, Open Graph, Twitter Card e
 * JSON-LD. A imagem é sempre convertida em URL absoluta (necessário no WhatsApp).
 */
export default function Seo({ title, description, path = '/', image, jsonLd }: SeoProps) {
  const t = title ?? SITE_TITLE
  const d = description ?? SITE_DESCRIPTION
  const url = absUrl(path)
  const img = absUrl(image ?? OG_IMAGE)

  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={d} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph (WhatsApp / Instagram / Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={img} />

      {/* Dados estruturados Schema.org */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  )
}
