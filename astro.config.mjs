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
  site: 'https://willibaur.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
})
