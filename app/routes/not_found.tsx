import { Localized } from "../components/localized";
import { metaCopy, notFoundCopy } from "../content/site_copy";
import { homePath, mainContentId } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/layout.css";

export function meta() {
  return buildMeta({
    path: "/404",
    title: metaCopy.notFoundTitle.en,
    description: metaCopy.notFoundDescription.en,
    noindex: true,
  });
}

export default function NotFound() {
  usePageTitle(metaCopy.notFoundTitle, metaCopy.notFoundDescription);
  return (
    <main className="page page_centered" id={mainContentId} tabIndex={-1}>
      <Localized as="h1" className="not_found_title" text={notFoundCopy.heading} />
      <a className="back_link" href={homePath}>
        <span aria-hidden="true">← </span>
        <Localized inline text={notFoundCopy.back} />
      </a>
    </main>
  );
}
