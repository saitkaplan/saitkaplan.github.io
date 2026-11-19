// While the site is not launched, every build and the dev server serve only
// the "coming soon" page (and the 404). The full layout stays in the code but
// is never shown. Flip siteLaunched once real content is in.
export const siteLaunched = false;

/** The full site (nav, sections, footer) instead of the coming-soon card. */
export const showFullSite = siteLaunched;
