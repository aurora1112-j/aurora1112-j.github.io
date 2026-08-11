# 🌿 Botanical Systems · Chenxi Huang

> 语言：🇨🇳 **中文** · 🇬🇧 [English](README.en.md) · 🇩🇪 [Deutsch](README.de.md)

[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MDX](https://img.shields.io/badge/Content-MDX-1B1F24?logo=mdx&logoColor=white)](https://mdxjs.com/)
[![Live Site](https://img.shields.io/badge/在线预览-aurora1112--j.github.io-2EA44F?logo=github)](https://aurora1112-j.github.io/)

> **我理解复杂概念，也把它们做成可以使用的系统。**

## 👋 关于我

你好，我是 **Chenxi Huang**（Aurora），一名 AI 产品经理与设计师，目前在南京大学学习。

我持续探索 AI、Agent、产品与知识管理。这里保存概念解释、项目、开源实践和摄影观察，也保留它们尚未完成的生长过程。

- 定位：AI 产品经理与设计师 · AI PM & Designer
- 学校：南京大学 · Nanjing University

## 🏗 我在做什么

[查看全部作品](https://aurora1112-j.github.io/projects/) · [浏览摄影](https://aurora1112-j.github.io/photography/)

- **Vesti**：把记忆做成产品，探索记忆与产品、视觉系统的结合。
- **Vesti Design System**：与 Vesti 配套的设计系统与视觉规范。
- **摄影项目**：以视觉观察记录城市与日常。

## 🌱 这座花园是什么

**Botanical Systems** 是一座中英双语的数字花园。这里的内容不像博客那样“发布即定稿”，而是像植物一样带着**成长阶段**（growth stage）持续生长。内容通过 `[[维基链接]]` 彼此相连，形成一张可以漫游的知识网络，也保留尚未完成的过程。

花园包含：

> **概念 · 文章 · 笔记 · 模式 · 项目 · 摄影 · 播客 · 演讲 · 书籍 · 反图书馆 · Now · Smidgeons**

[进入花园 →](https://aurora1112-j.github.io/)

---

*以上是我的主页简介，以下是网站的实现说明。*

## 🔧 网站实现

这是一个基于 **Astro 5** 的中英双语静态站点，使用 TypeScript 严格模式、MDX 写作，并通过 React / Preact islands 承载交互。

| 类别 | 技术 |
| --- | --- |
| 框架 | Astro 5 · TypeScript（strict） |
| UI | React 18 · Preact islands · MDX |
| 可视化 | D3 · Three.js · Motion · Scrollama · Masonry Layout |
| 内容 | `@astrojs/mdx` · `@astrojs/rss` · `@astrojs/sitemap` |
| 其他 | Astro Icon · Astro SEO · Astro Embed · Satori（OG 图）· Sharp |

### 快速开始

```bash
npm install
npm run dev
npm run build:local
npm run preview
```

### npm 脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 生成链接与主题数据后启动开发服务器 |
| `npm run build` | 完整构建，包括获取 WebMentions |
| `npm run build:local` | 本地与 CI 构建，跳过 WebMentions |
| `npm run generate-links` | 重新生成反向链接数据 `src/links.json` |
| `npm run fetch-webmentions` | 将 WebMentions 写入 `src/content/data/webmentions.json` |

### 内容管理

内容以 collection 形式存放在 `src/content/`，定义见 `src/content/config.ts`。当前包含 `concepts`、`essays`、`notes`、`patterns`、`projects`、`photography`、`now`、`smidgeons`、`talks`、`podcasts`、`books`、`antibooks` 和 `pages`。

- 正文中的 `[[维基链接]]` 由 `src/plugins/remark-wiki-link.js` 解析，构建时由 `generate-links.js` 生成反向链接数据。
- Frontmatter 支持中英双语 `title` / `titleEn`、`growthStage`、`topics`、`draft`、`version` 等字段。
- WebMentions 需要环境变量 `WEBMENTION_API_KEY`，也可选配 `WEBMENTION_DOMAIN`。

### 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会运行 `npm run build:local`，并自动发布到 GitHub Pages。`vercel.json` 提供按需预览配置及安全响应头，同时关闭 `main` 分支的 Vercel 自动部署。

## 📮 联系我

- ✉️ 邮箱：`hcx0579@qq.com`
- 🐦 X：[@Aurora736951](https://x.com/Aurora736951)
- 🐙 GitHub：[@aurora1112-j](https://github.com/aurora1112-j)

## 📄 版权与字体许可

除另有说明外，站点内容与源代码版权归 Chenxi Huang（Aurora）所有；本仓库暂未提供通用的开源许可证。`public/fonts/` 中随附的 Lato 字体按 [SIL Open Font License](public/fonts/OFL-Lato.txt) 使用。
