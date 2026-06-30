// Pós-build: gera dist/robots.txt e dist/sitemap.xml a partir do SITE_URL
// definido em src/data/seo.ts (fonte única — troque o domínio só lá).
// Roda fora do tsc, então não esbarra na fronteira de projeto do tsconfig.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

const seoSrc = readFileSync(resolve(root, 'src/data/seo.ts'), 'utf8')
const match = seoSrc.match(/SITE_URL\s*=\s*['"`]([^'"`]+)['"`]/)
const SITE_URL = (match ? match[1] : 'https://SEU-DOMINIO.com.br').replace(/\/$/, '')

if (!existsSync(dist)) {
  console.error('[seo] pasta dist/ não encontrada — rode o build antes.')
  process.exit(1)
}

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `  <url>\n` +
  `    <loc>${SITE_URL}/</loc>\n` +
  `    <changefreq>weekly</changefreq>\n` +
  `    <priority>1.0</priority>\n` +
  `  </url>\n` +
  `</urlset>\n`

writeFileSync(resolve(dist, 'robots.txt'), robots)
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)
console.log(`[seo] robots.txt + sitemap.xml gerados (SITE_URL = ${SITE_URL})`)
