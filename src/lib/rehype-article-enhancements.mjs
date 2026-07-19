import { visit } from "unist-util-visit";

// Two small, unrelated tweaks to the rendered HTML, bundled into one plugin
// so the tree only gets walked once:
//   1. Every <pre> (code block) gets a "Copy" button as its last child.
//      It's plain, inert HTML - see public/scripts/article.js for the click
//      handler that actually copies the code.
//   2. Every <img> gets loading="lazy" so off-screen images in long articles
//      don't slow down the initial page load.
//
// Note: plain markdown images (`![alt](src)`) get both. Images wrapped in
// raw HTML (our <figure>/<figcaption> captions) are resolved into real
// elements by Astro's pipeline *after* this plugin runs, so this plugin
// never sees them and rule 2 doesn't apply there. Not worth chasing for a
// handful of small local SVGs - noted here so it isn't a surprise later.
export function rehypeArticleEnhancements() {
  return function (tree) {
    visit(tree, "element", (node) => {
      if (node.tagName === "pre") {
        node.children.push({
          type: "element",
          tagName: "button",
          properties: {
            type: "button",
            className: ["copy-button"],
            "aria-label": "Copy code",
          },
          children: [{ type: "text", value: "Copy" }],
        });
      }

      if (node.tagName === "img") {
        node.properties.loading = "lazy";
        node.properties.decoding = "async";
      }
    });
  };
}
