import { navCopy } from "../content/site_copy";
import { mainContentId } from "../lib/paths";
import { Localized } from "./localized";

// First focusable element on every page: keyboard users jump past the nav.
export function SkipLink() {
  return (
    <a className="skip_link" href={`#${mainContentId}`}>
      <Localized inline text={navCopy.skip} />
    </a>
  );
}
