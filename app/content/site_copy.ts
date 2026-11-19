// Every visible string lives here as an {en, tr} pair. Real content is not
// written yet: the home sections have titles only, their bodies come with
// the content (see app/lib/site_config.ts).

export interface LocalizedText {
  en: string;
  tr: string;
}

export const metaCopy = {
  title: { en: "Sait Kaplan", tr: "Sait Kaplan" },
  description: {
    en: "Sait Kaplan — personal website.",
    tr: "Sait Kaplan — kişisel site.",
  },
  notFoundTitle: { en: "404 — Sait Kaplan", tr: "404 — Sait Kaplan" },
  notFoundDescription: {
    en: "The page you're looking for doesn't exist.",
    tr: "Aradığın sayfa bulunamadı.",
  },
} satisfies Record<string, LocalizedText>;

export const comingSoonCopy = {
  label: { en: "Coming soon", tr: "Yakında" },
} satisfies Record<string, LocalizedText>;

export const navCopy = {
  about: { en: "About", tr: "Hakkımda" },
  work: { en: "Work", tr: "Projeler" },
  contact: { en: "Contact", tr: "İletişim" },
  skip: { en: "Skip to content", tr: "İçeriğe geç" },
  language: { en: "Language", tr: "Dil" },
} satisfies Record<string, LocalizedText>;

export const homeCopy = {
  aboutTitle: { en: "About", tr: "Hakkımda" },
  workTitle: { en: "Work", tr: "Projeler" },
  contactTitle: { en: "Contact", tr: "İletişim" },
} satisfies Record<string, LocalizedText>;

export const notFoundCopy = {
  heading: { en: "404 — Page not found", tr: "404 — Sayfa bulunamadı" },
  back: { en: "Home page", tr: "Ana sayfa" },
} satisfies Record<string, LocalizedText>;
