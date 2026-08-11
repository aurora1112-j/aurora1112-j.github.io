import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { file } from "astro/loaders";

const notesCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/notes" }),
  schema: () =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string().optional(),
      descriptionEn: z.string().optional(),
      aliases: z.array(z.string()).optional(),
      startDate: z.coerce.date(),
      updated: z.coerce.date(),
      type: z.literal("note"),
      topics: z.array(z.string()).optional(),
      growthStage: z.string(),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),
      version: z.number().optional(),
      versionSummary: z.string().optional(),
    }),
});

const essaysCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/essays" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string(),
      descriptionEn: z.string(),
      updated: z.coerce.date(),
      startDate: z.coerce.date(),
      type: z.literal("essay"),
      cover: image(),
      topics: z.array(z.string()).optional(),
      growthStage: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),
      aliases: z.array(z.string()).optional(),
      version: z.number().optional(),
      versionSummary: z.string().optional(),
    }),
});

const patternsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/patterns" }),
  schema: () =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string(),
      descriptionEn: z.string(),
      updated: z.coerce.date(),
      startDate: z.coerce.date(),
      type: z.literal("pattern"),
      topics: z.array(z.string()).optional(),
      growthStage: z.string(),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),
      version: z.number().optional(),
      versionSummary: z.string().optional(),
    }),
});

const talksCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/talks" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string(),
      descriptionEn: z.string(),
      startDate: z.coerce.date(),
      updated: z.coerce.date(),
      type: z.literal("talk"),
      topics: z.array(z.string()),
      growthStage: z.string(),
      conferences: z.array(
        z.object({
          name: z.string(),
          nameEn: z.string(),
          date: z.string(),
          location: z.string(),
          locationEn: z.string(),
        }),
      ),
      cover: image(),
      draft: z.boolean().optional(),
      version: z.number().optional(),
      versionSummary: z.string().optional(),
    }),
});

const podcastsCollection = defineCollection({
  loader: file("src/content/podcasts.json"),
  schema: ({ image }) =>
    z.object({
      podcastName: z.string(),
      podcastNameEn: z.string(),
      episodeName: z.string(),
      episodeNameEn: z.string(),
      updated: z.coerce.date(),
      url: z.string().url(),
      coverImage: image(),
      topics: z.array(z.string()).optional(),
      id: z.number(),
      growthStage: z.string().default("evergreen"),
    }),
});

const booksCollection = defineCollection({
  loader: file("src/content/books.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      subtitle: z.string().optional(),
      subtitleEn: z.string().optional(),
      author: z.string(),
      authorEn: z.string(),
      cover: image(),
      link: z.string().url(),
      id: z.number(),
    }),
});

const antibooksCollection = defineCollection({
  loader: file("src/content/antibooks.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      subtitle: z.string().optional(),
      subtitleEn: z.string().optional(),
      author: z.string(),
      authorEn: z.string(),
      cover: image(),
      link: z.string().url(),
      id: z.number(),
    }),
});

const nowCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/now" }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    description: z.string().optional(),
    descriptionEn: z.string().optional(),
    startDate: z.coerce.date(),
    type: z.literal("now"),
    topics: z.array(z.string()).optional(),
    growthStage: z.string().default("evergreen"),
    draft: z.boolean().default(false),
  }),
});

const smidgeonsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/smidgeons" }),
  schema: () =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string().optional(),
      descriptionEn: z.string().optional(),
      startDate: z.coerce.date(),
      type: z.literal("smidgeon"),
      topics: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
      external: z
        .object({
          title: z.string(),
          url: z.string().url(),
          author: z.string().optional(),
        })
        .optional(),
      citation: z
        .object({
          title: z.string(),
          authors: z.array(z.string()),
          journal: z.string(),
          year: z.number(),
          url: z.string().optional(),
        })
        .optional(),
    }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/pages" }),
  schema: () =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string().optional(),
      descriptionEn: z.string().optional(),
      updated: z.coerce.date().optional(),
      startDate: z.coerce.date().optional(),
      type: z.literal("page"),
    }),
});

const conceptsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/concepts" }),
  schema: () =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string(),
      descriptionEn: z.string(),
      startDate: z.coerce.date(),
      updated: z.coerce.date(),
      type: z.literal("concept"),
      topics: z.array(z.string()).optional(),
      growthStage: z.string(),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),
      aliases: z.array(z.string()).optional(),
      version: z.number().optional(),
      versionSummary: z.string().optional(),
      connections: z
        .array(
          z.object({
            slug: z.string(),
            relationship: z.string(),
            labelZh: z.string(),
            labelEn: z.string(),
          }),
        )
        .optional(),
    }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string(),
      descriptionEn: z.string(),
      startDate: z.coerce.date(),
      updated: z.coerce.date(),
      type: z.literal("project"),
      projectKind: z.enum(["product", "open-source", "experiment", "design-system"]),
      cover: image(),
      topics: z.array(z.string()).optional(),
      growthStage: z.string(),
      roleZh: z.string().optional(),
      roleEn: z.string().optional(),
      featured: z.boolean().optional(),
      url: z.string().url().optional(),
      github: z.string().url().optional(),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),
      aliases: z.array(z.string()).optional(),
      version: z.number().optional(),
      versionSummary: z.string().optional(),
    }),
});

const photographyCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/photography" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string(),
      description: z.string(),
      descriptionEn: z.string(),
      startDate: z.coerce.date(),
      updated: z.coerce.date(),
      type: z.literal("photography"),
      cover: image(),
      topics: z.array(z.string()).optional(),
      growthStage: z.string(),
      locationZh: z.string().optional(),
      locationEn: z.string().optional(),
      imageCount: z.number().optional(),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),
      aliases: z.array(z.string()).optional(),
      version: z.number().optional(),
      versionSummary: z.string().optional(),
    }),
});

// This key should match your collection directory name in "src/content"
export const collections = {
  concepts: conceptsCollection,
  projects: projectsCollection,
  photography: photographyCollection,
  now: nowCollection,
  notes: notesCollection,
  essays: essaysCollection,
  patterns: patternsCollection,
  talks: talksCollection,
  podcasts: podcastsCollection,
  books: booksCollection,
  antibooks: antibooksCollection,
  smidgeons: smidgeonsCollection,
  pages: pagesCollection,
};
