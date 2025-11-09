import { defineCollection, z } from 'astro:content'

const translationsCollection = defineCollection({
  schema: z.object({
    aboutText: z.string(),
    aboutTitle: z.string(),
    email: z.string(),
    instagram: z.string(),
    languageToggle: z.string(),
    location: z.string(),
    payment: z.string(),
    phone: z.string(),
    tiktok: z.string(),
    title: z.string()
  }),
  type: 'data'
})

export const collections = {
  translations: translationsCollection
}
