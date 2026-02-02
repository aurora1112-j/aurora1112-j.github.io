import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    abstract: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    pdfUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
        caseStudy: z.string().url().optional(),
      })
      .default({}),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const photography = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    location: z.string().optional(),
    camera: z.string().optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const dataviz = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tools: z.array(z.string()).default([]),
    demoUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = {
  articles,
  projects,
  photography,
  dataviz,
};
