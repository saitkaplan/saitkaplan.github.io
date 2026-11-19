import { navCopy } from "../content/site_copy";
import { homePath, homeSectionPath } from "../lib/paths";
import { LangSwitch } from "./lang_switch";
import { Localized } from "./localized";

export function Nav() {
  return (
    <header className="nav">
      <a className="nav_name" href={homePath}>
        Sait Kaplan
      </a>
      <nav className="nav_links">
        <a href={homeSectionPath("about")}>
          <Localized inline text={navCopy.about} />
        </a>
        <a href={homeSectionPath("work")}>
          <Localized inline text={navCopy.work} />
        </a>
        <a href={homeSectionPath("contact")}>
          <Localized inline text={navCopy.contact} />
        </a>
      </nav>
      <LangSwitch />
    </header>
  );
}
