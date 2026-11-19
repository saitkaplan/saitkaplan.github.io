import { ComingSoon } from "../components/coming_soon";
import { Localized } from "../components/localized";
import { homeCopy, metaCopy } from "../content/site_copy";
import { profileLinks, siteLinks } from "../data/links";
import { homePath, homeSectionId, mainContentId } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { showFullSite } from "../lib/site_config";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/layout.css";

export function meta() {
  return buildMeta({ path: homePath, title: metaCopy.title.en, description: metaCopy.description.en });
}

export default function Home() {
  usePageTitle(metaCopy.title, metaCopy.description);
  if (!showFullSite) return <ComingSoon />;

  // Skeleton only: the sections have no body until real content is written
  // (app/content/site_copy.ts); never shown before launch.
  return (
    <main className="page" id={mainContentId} tabIndex={-1}>
      <section className="section" id={homeSectionId.about}>
        <Localized as="h2" className="section_title" text={homeCopy.aboutTitle} />
      </section>
      <section className="section" id={homeSectionId.work}>
        <Localized as="h2" className="section_title" text={homeCopy.workTitle} />
        <ul className="link_list">
          {siteLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="section" id={homeSectionId.contact}>
        <Localized as="h2" className="section_title" text={homeCopy.contactTitle} />
        <ul className="link_list">
          {profileLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
