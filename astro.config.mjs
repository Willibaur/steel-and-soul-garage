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
  // No Markdown here; also silences the Shiki-vs-CSP build warning
  markdown: {
    syntaxHighlight: false
  },
  redirects: {
    '/': '/es'
  },
  security: {
    // Hashes every script/style Astro emits into a <meta> CSP (GitHub Pages can't send headers)
    csp: {
      // script-src/style-src hashes are added by Astro. frame-ancestors and
      // report-uri are ignored in <meta> CSP, so they're left out.
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        // Google Maps embed in the location card
        'frame-src https://www.google.com',
        "object-src 'none'",
        "base-uri 'self'",
        // No forms yet; switch to the payment provider's origin when the QR payment ships
        "form-action 'none'",
        'upgrade-insecure-requests'
      ]
    }
  },
  site: 'https://www.steel-and-soul-garage.co',
  vite: {
    plugins: [tailwindcss()]
  }
})
