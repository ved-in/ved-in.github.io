import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { rehypeArticleEnhancements } from "./src/lib/rehype-article-enhancements.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://ved-in.github.io",
  integrations: [
    tailwind({
      // We ship our own base/reset alongside Tailwind, applied in
      // src/styles/global.css, so we turn off Tailwind's injected
      // base import here and import global.css ourselves instead.
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    smartypants: false,
    // GitHub Flavored Markdown: tables, strikethrough, task lists,
    // autolinks, and footnotes.
    gfm: true,
    remarkPlugins: [
      remarkMath, // parse $inline$ and $$block$$ math
    ],
    rehypePlugins: [
      rehypeKatex, // render math to static HTML/CSS (no client JS)
      rehypeArticleEnhancements, // copy buttons + lazy-loaded images
    ],
    shikiConfig: {
      // "css-variables" hands us plain --astro-code-* custom properties
      // instead of a hardcoded theme, so syntax colors are defined once in
      // src/styles/global.css alongside the rest of the design instead of
      // fighting a theme's own opinions about background/text color.
      theme: "css-variables",
      wrap: false, // no line wrapping - code blocks scroll horizontally instead
    },
  },
});

