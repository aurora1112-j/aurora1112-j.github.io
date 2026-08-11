# 🌿 Botanical Systems · Chenxi Huang

> Sprachen: 🇩🇪 **Deutsch** · 🇬🇧 [English](README.en.md) · 🇨🇳 [中文](README.md)

[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MDX](https://img.shields.io/badge/Content-MDX-1B1F24?logo=mdx&logoColor=white)](https://mdxjs.com/)
[![Live Site](https://img.shields.io/badge/Live-aurora1112--j.github.io-2EA44F?logo=github)](https://aurora1112-j.github.io/)

> **Ich verstehe komplexe Ideen und mache daraus Systeme, die Menschen nutzen können.**

## 👋 Über mich

Hallo, ich bin **Chenxi Huang** (Aurora), AI-Produktmanagerin und Designerin und studiere derzeit an der Nanjing University.

Ich beschäftige mich mit KI, Agents, Produkten und Wissensmanagement. Dieser Raum sammelt Konzepterklärungen, Projekte, Open-Source-Arbeit und fotografische Beobachtungen, einschließlich ihres unfertigen Wachstums.

- Rolle: AI Product Manager & Designer
- Universität: Nanjing University

## 🏗 Woran ich arbeite

[Alle Arbeiten ansehen](https://aurora1112-j.github.io/projects/) · [Fotografie ansehen](https://aurora1112-j.github.io/photography/)

- **Vesti**: Erinnerung in ein Produkt verwandeln und erkunden, wie daraus Produkt- und visuelle Systeme entstehen.
- **Vesti Design System**: das dazugehörige Designsystem und die visuelle Sprache.
- **Fotografie**: visuelle Beobachtungen von Stadt und Alltag.

## 🌱 Was dieser Garten ist

**Botanical Systems** ist ein zweisprachiger digitaler Garten. Inhalte werden hier nicht wie in einem Blog „veröffentlicht und fertig“, sondern wachsen wie Pflanzen und tragen jederzeit ein **Wachstumsstadium** (growth stage). Notizen sind über `[[Wiki-Links]]` miteinander verbunden und bilden ein Wissensnetz, durch das man wandern kann, einschließlich der unfertigen Prozesse.

Der Garten enthält:

> **Konzepte · Essays · Notizen · Muster · Projekte · Fotografie · Podcasts · Vorträge · Bücher · Anti-Bibliothek · Now · Smidgeons**

[In den Garten →](https://aurora1112-j.github.io/)

---

*Das war die Einführung zur Homepage; unten folgt die technische Dokumentation.*

## 🔧 Technische Umsetzung

Diese zweisprachige statische Website basiert auf **Astro 5**, strengem TypeScript, MDX zum Schreiben und React / Preact Islands für Interaktionen.

| Bereich | Technik |
| --- | --- |
| Framework | Astro 5 · TypeScript (strict) |
| UI | React 18 · Preact Islands · MDX |
| Visualisierung | D3 · Three.js · Motion · Scrollama · Masonry Layout |
| Inhalt | `@astrojs/mdx` · `@astrojs/rss` · `@astrojs/sitemap` |
| Sonstiges | Astro Icon · Astro SEO · Astro Embed · Satori (OG-Bilder) · Sharp |

### Erste Schritte

```bash
npm install
npm run dev
npm run build:local
npm run preview
```

### npm-Skripte

| Befehl | Beschreibung |
| --- | --- |
| `npm run dev` | Link- und Themendaten erzeugen und den Entwicklungsserver starten |
| `npm run build` | Vollständigen Build einschließlich WebMentions-Abruf ausführen |
| `npm run build:local` | Lokal oder in CI ohne WebMentions-Abruf bauen |
| `npm run generate-links` | Backlink-Daten in `src/links.json` neu erzeugen |
| `npm run fetch-webmentions` | WebMentions nach `src/content/data/webmentions.json` schreiben |

### Inhalte verwalten

Inhalte liegen als Collections unter `src/content/`, definiert in `src/content/config.ts`. Aktuell gibt es `concepts`, `essays`, `notes`, `patterns`, `projects`, `photography`, `now`, `smidgeons`, `talks`, `podcasts`, `books`, `antibooks` und `pages`.

- `[[Wiki-Links]]` im Text werden von `src/plugins/remark-wiki-link.js` verarbeitet; `generate-links.js` erzeugt beim Build die Backlink-Daten.
- Das Frontmatter unterstützt zweisprachige `title` / `titleEn`, `growthStage`, `topics`, `draft`, `version` und weitere Felder.
- WebMentions benötigen die Umgebungsvariable `WEBMENTION_API_KEY`; `WEBMENTION_DOMAIN` ist optional.

### Bereitstellung

Ein Push auf `main` startet über `.github/workflows/deploy.yml` den Befehl `npm run build:local` und veröffentlicht die Website auf GitHub Pages. `vercel.json` enthält Einstellungen für bedarfsweise Vorschauen und Sicherheits-Header und deaktiviert die automatische Vercel-Bereitstellung von `main`.

## 📮 Kontakt

- ✉️ E-Mail: `hcx0579@qq.com`
- 🐦 X: [@Aurora736951](https://x.com/Aurora736951)
- 🐙 GitHub: [@aurora1112-j](https://github.com/aurora1112-j)

## 📄 Urheberrecht und Schriftlizenz

Sofern nicht anders angegeben, liegen die Rechte an Website-Inhalten und Quellcode bei Chenxi Huang (Aurora). Dieses Repository enthält derzeit keine allgemeine Open-Source-Lizenz. Die unter `public/fonts/` mitgelieferte Schriftart Lato wird gemäß der [SIL Open Font License](public/fonts/OFL-Lato.txt) verwendet.
