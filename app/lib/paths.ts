// Every internal path is built here, trailing slash included. GitHub Pages
// serves each route as a folder + index.html; a path without the trailing
// slash costs every visitor one extra 301 redirect.

export const homePath = "/";

// In-page sections of the home page; the nav links to them by hash.
export const homeSectionId = {
  about: "about",
  work: "work",
  contact: "contact",
} as const;
export type HomeSection = keyof typeof homeSectionId;

export function homeSectionPath(section: HomeSection): string {
  return `${homePath}#${homeSectionId[section]}`;
}

// Every real, indexable page. react-router.config.ts prerenders exactly
// these (plus /404). New pages are added here and to app/routes.ts as
// literal routes — never a catch-all dynamic segment, which would also
// match every unknown URL and break the 404 page.
export function contentPaths(): string[] {
  return [homePath];
}

// Deployed custom domain — see public/CNAME.
export const siteUrl = "https://saitkaplan.com";

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}

// The skip link's target: every route's top-level <main> carries this id
// plus tabIndex={-1} so the skip link actually moves focus there.
export const mainContentId = "main_content";
