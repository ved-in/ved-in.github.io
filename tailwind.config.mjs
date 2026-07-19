/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm, paper-like palette - a quiet off-white rather than pure
        // white, near-black (not pure black) text, muted warm grays.
        bg: "#F5F4F1",
        ink: "#23201B",
        body: "#3A362F",
        muted: "#6B6558",
        faint: "#A39C8C",
        border: "#E3DFD4",
        "border-dotted": "#D6D1C3",
        link: "#3C5A73",
        code: {
          bg: "#EFEBE1",
          border: "#DED8C9",
        },
      },
      fontFamily: {
        // UI chrome: nav, meta rows, buttons, the section navigator.
        sans: [
          "Atkinson Hyperlegible",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        // Reading content: body copy, headings, blockquotes.
        serif: [
          "Newsreader Variable",
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
        mono: [
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "Menlo",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
