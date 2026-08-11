// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { remarkWikiLink } from "./src/plugins/remark-wiki-link";

// https://astro.build/config
export default defineConfig({
  site: "https://aurora1112-j.github.io",
  image: {
    domains: ["res.cloudinary.com"],
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkWikiLink],
      shikiConfig: {
        theme: "night-owl",
        wrap: true,
      },
    }),
    react(),
    sitemap({
      filter: (page) => !["/drafts/", "/design-system/"].some((path) => page.endsWith(path)),
    }),
    icon(),
  ],
  vite: {
    optimizeDeps: {
      include: ["three"],
    },
  },
});
