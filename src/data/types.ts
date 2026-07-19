export type NavKey = "about" | "projects" | "writings";

export interface ArchiveEntry {
  name: string;
  href: string;
  date: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
