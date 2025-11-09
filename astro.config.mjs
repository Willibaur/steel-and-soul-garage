// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  base: '/steel-and-soul-garage',
  site: 'https://willibaur.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
})
