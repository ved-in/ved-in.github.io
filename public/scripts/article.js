// Progressive enhancements for article pages. None of this is required to
// read an article - it only adds:
//   1. Working "Copy" buttons on code blocks
//   2. A click-to-expand lightbox for images
//   3. Highlighting the current section in the Section Navigator
//
// This site uses Astro's View Transitions, so navigating between pages
// swaps content in via the History API instead of a full browser reload -
// that's what removes the tab's loading/refresh spinner on internal links.
// The tradeoff: `DOMContentLoaded` only ever fires once, on the very first
// page. `astro:page-load` fires both on that first load AND after every
// later transition, so it's the correct hook to re-run this setup each
// time the page content changes.

let sectionObserver;

document.addEventListener("astro:page-load", () => {
  setUpCodeCopyButtons();
  setUpImageLightbox();
  setUpSectionHighlighting();
});

function setUpCodeCopyButtons() {
  document.querySelectorAll(".copy-button").forEach((button) => {
    const code = button.closest("pre")?.querySelector("code");
    if (!code) return;

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.textContent ?? "");
        const original = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = original;
        }, 1500);
      } catch {
        // Clipboard access can fail (permissions, older browsers, etc).
        // There's nothing useful to do here besides leaving the button as-is.
      }
    });
  });
}

function setUpImageLightbox() {
  const dialog = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = dialog?.querySelector(".lightbox-close");
  if (!dialog || !lightboxImage) return;

  document.querySelectorAll(".content img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", () => dialog.close());

  // Clicking the dark backdrop (not the image or close button) also closes it.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function setUpSectionHighlighting() {
  // Each page load gets a fresh set of headings; stop watching the
  // previous page's (now-detached) ones before observing the new page.
  sectionObserver?.disconnect();

  const links = Array.from(document.querySelectorAll(".section-navigator a"));
  if (links.length === 0) return;

  const linksByHeadingId = new Map(
    links.map((link) => [link.getAttribute("href").slice(1), link])
  );

  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((link) => link.classList.remove("active"));
        linksByHeadingId.get(entry.target.id)?.classList.add("active");
      }
    },
    // Treat a heading as "current" once it crosses into the top 30% of the
    // viewport, rather than waiting for it to reach the very top.
    { rootMargin: "0px 0px -70% 0px" }
  );

  for (const id of linksByHeadingId.keys()) {
    const heading = document.getElementById(id);
    if (heading) sectionObserver.observe(heading);
  }
}
