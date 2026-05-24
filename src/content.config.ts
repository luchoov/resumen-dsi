import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const secciones = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/secciones" }),
  schema: z.object({
    id: z.string(),
    numero: z.number().int().min(1).max(20),
    titulo: z.string(),
    slug: z.string(),
    resumen: z.string(),
    keywords: z.array(z.string()),
    relacionadas: z.array(z.string()).default([])
  })
});

export const collections = { secciones };
