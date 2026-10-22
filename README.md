# 🏍️ Steel & Soul Garage

> Latin American Garage specializing in LowRider and custom bike paint

**Live Site**: http://localhost:4321/steel-and-soul-garage (dev server)

## ✨ Features

- 🎨 Modern, gradient-based design with dark/light mode
- 🌍 Bilingual support (English/Spanish)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Lightning-fast Astro static site
- ♿ Accessible and SEO-optimized
- 🎯 Zero JavaScript by default (only where needed)

## � Documentation

- **[SUMMARY.md](./SUMMARY.md)** - Quick overview of the project
- **[CONVERSION_NOTES.md](./CONVERSION_NOTES.md)** - Technical details of the Astro conversion
- **[CHECKLIST.md](./CHECKLIST.md)** - Post-conversion tasks and deployment checklist

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
