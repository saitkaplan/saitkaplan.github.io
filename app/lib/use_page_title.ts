import { useEffect } from "react";
import type { LocalizedText } from "../content/site_copy";
import { useLang } from "./lang_context";

// Keeps the tab title and the description meta tag in step with the active
// language after hydration. The served versions (seo.ts) stay English —
// that is what crawlers and share previews see.
export function usePageTitle(title: LocalizedText, description: LocalizedText): void {
  const { active } = useLang();
  const { en: titleEn, tr: titleTr } = title;
  const { en: descriptionEn, tr: descriptionTr } = description;

  useEffect(() => {
    document.title = active === "tr" ? titleTr : titleEn;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", active === "tr" ? descriptionTr : descriptionEn);
  }, [active, titleEn, titleTr, descriptionEn, descriptionTr]);
}
