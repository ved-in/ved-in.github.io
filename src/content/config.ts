import { defineCollection, z } from "astro:content";

const link = z.object({
  label: z.string(),
  href: z.string(),
});

// Fields shared by every collection. `archiveTitle` lets a collection show
// a shorter name in the archive list than the full title used on the
// detail page (projects do this: "Sieve" in the list, "Sieve: An
// Evaluation Harness for RAG Pipelines" on the page). When omitted, the
// archive list falls back to `title`.
const base = {
  title: z.string(),
  archiveTitle: z.string().optional(),
  date: z.date(),
  description: z.string(),
  readingTime: z.string().optional(), // e.g. "6 min read" - written by hand, not computed
  draft: z.boolean().default(false),
  links: z
  .array(z.object({ label: z.string(), href: z.string(), bold: z.boolean().optional() }))
  .optional(),
};

const projects = defineCollection({
  type: "content",
  schema: z.object({ ...base }),
});

const writings = defineCollection({
  type: "content",
  schema: z.object({ ...base }),
});


export const collections = { projects, writings };
