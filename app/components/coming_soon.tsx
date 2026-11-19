import { comingSoonCopy } from "../content/site_copy";
import { mainContentId } from "../lib/paths";
import { Localized } from "./localized";
import "../styles/coming_soon.css";

// The pre-launch page, carried over unchanged in look from the original
// index.html: the name over a dimension line from a technical drawing.
export function ComingSoon() {
  return (
    <main className="coming_soon" id={mainContentId} tabIndex={-1}>
      <div className="coming_soon_inner">
        <h1 className="coming_soon_name">Sait&nbsp;Kaplan</h1>
        <div className="dimension">
          <span className="dimension_rule" aria-hidden="true" />
          <Localized inline className="dimension_label" text={comingSoonCopy.label} />
          <span className="dimension_rule" aria-hidden="true" />
        </div>
      </div>
    </main>
  );
}
