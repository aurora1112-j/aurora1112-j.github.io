# 🌿 Botanical Systems · Chenxi Huang

> Languages: 🇬🇧 **English** · 🇨🇳 [中文](README.md) · 🇩🇪 [Deutsch](README.de.md)

[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MDX](https://img.shields.io/badge/Content-MDX-1B1F24?logo=mdx&logoColor=white)](https://mdxjs.com/)
[![Live Site](https://img.shields.io/badge/Live-aurora1112--j.github.io-2EA44F?logo=github)](https://aurora1112-j.github.io/)

> **I understand difficult ideas and turn them into systems people can use.**

## 👋 About Me

Hi, I'm **Chenxi Huang** (Aurora), an AI product manager and designer currently studying at Nanjing University.

I explore AI, agents, products, and knowledge management. This space holds concept explanations, projects, open-source work, and photographic observations, including their unfinished growth.

- Role: AI Product Manager & Designer
- School: Nanjing University

## 🏗 What I'm Working On

[View all work](https://aurora1112-j.github.io/projects/) · [Browse photography](https://aurora1112-j.github.io/photography/)

- **Vesti**: turning memory into a product and exploring how memory becomes product and visual systems.
- **Vesti Design System**: the design system and visual language built alongside Vesti.
- **Photography**: visual observations of the city and everyday life.

## 🌱 What This Garden Is

**Botanical Systems** is a bilingual digital garden. Content here is not “published and done” like a blog; it grows like a plant and carries a **growth stage** at all times. Notes connect through `[[wiki links]]`, forming a knowledge network you can wander through, unfinished process included.

The garden contains:

> **Concepts · Essays · Notes · Patterns · Projects · Photography · Podcasts · Talks · Books · Antilibrary · Now · Smidgeons**

[Enter the Garden →](https://aurora1112-j.github.io/)

---

*That was the homepage introduction; below is the implementation guide.*

## 🔧 Site Implementation

This bilingual static site is built with **Astro 5**, strict TypeScript, MDX for writing, and React / Preact islands for interactivity.

| Area | Technology |
| --- | --- |
| Framework | Astro 5 · TypeScript (strict) |
| UI | React 18 · Preact islands · MDX |
| Visualization | D3 · Three.js · Motion · Scrollama · Masonry Layout |
| Content | `@astrojs/mdx` · `@astrojs/rss` · `@astrojs/sitemap` |
| Other | Astro Icon · Astro SEO · Astro Embed · Satori (OG images) · Sharp |

### Getting Started

```bash
npm install
npm run dev
npm run build:local
npm run preview
```

### npm Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Generate link and topic data, then start the development server |
| `npm run build` | Run the complete build, including fetching WebMentions |
| `npm run build:local` | Build locally or in CI without fetching WebMentions |
| `npm run generate-links` | Regenerate backlink data in `src/links.json` |
| `npm run fetch-webmentions` | Write WebMentions to `src/content/data/webmentions.json` |

### Writing Content

Content lives in collections under `src/content/`, defined in `src/content/config.ts`. Current collections are `concepts`, `essays`, `notes`, `patterns`, `projects`, `photography`, `now`, `smidgeons`, `talks`, `podcasts`, `books`, `antibooks`, and `pages`.

- `[[Wiki links]]` in the body are parsed by `src/plugins/remark-wiki-link.js`; `generate-links.js` builds backlink data during the build.
- Frontmatter supports bilingual `title` / `titleEn`, `growthStage`, `topics`, `draft`, `version`, and related fields.
- WebMentions require the `WEBMENTION_API_KEY` environment variable; `WEBMENTION_DOMAIN` is optional.

### Deployment

A push to `main` runs `npm run build:local` through `.github/workflows/deploy.yml` and publishes the site to GitHub Pages. `vercel.json` provides on-demand preview settings and security headers while disabling automatic Vercel deployment from `main`.

## 📮 Contact

- ✉️ Email: `hcx0579@qq.com`
- 🐦 X: [@Aurora736951](https://x.com/Aurora736951)
- 🐙 GitHub: [@aurora1112-j](https://github.com/aurora1112-j)

## 📄 Copyright and Font License

Unless otherwise stated, the site content and source code are © Chenxi Huang (Aurora). This repository does not currently provide a general open-source license. The bundled Lato font under `public/fonts/` is used under the [SIL Open Font License](public/fonts/OFL-Lato.txt).
