import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// robots.txt e sitemap.xml são gerados no pós-build por scripts/gen-seo-files.mjs
// (lê o SITE_URL de src/data/seo.ts — fonte única).
export default defineConfig({
  plugins: [react()],
})
