import type { NavKey } from "./types";

export const NAV_ITEMS: { key: NavKey; label: string; href: string }[] = [
  { key: "about", label: "about", href: "/" },
  { key: "projects", label: "projects", href: "/projects" },
  { key: "writings", label: "writings", href: "/writings" },
];
