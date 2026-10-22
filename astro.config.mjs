// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  base: '/',
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  redirects: {
    '/': '/es'
  },
  site: 'https://www.steel-and-soul-garage.co',
  vite: {
    plugins: [tailwindcss()]
  }
})
