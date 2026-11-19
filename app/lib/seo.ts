import type { MetaDescriptor } from "react-router";
import { absoluteUrl } from "./paths";

interface PageMetaInput {
  path: string;
  title: string;
  description: string;
  /** Set on pages that shouldn't be indexed (the 404). */
  noindex?: boolean;
}

// Single source for every route's <title>, description, canonical link and
// Open Graph tags. The served HTML is always the English render; the
// language switch only changes what a visitor's browser shows afterwards.
export function buildMeta({ path, title, description, noindex }: PageMetaInput): MetaDescriptor[] {
  const url = absoluteUrl(path);
  const tags: MetaDescriptor[] = [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Sait Kaplan" },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "tr_TR" },
  ];
  if (noindex) {
    tags.push({ name: "robots", content: "noindex" });
  }
  return tags;
}
