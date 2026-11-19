import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

// fonts.css loads the type the tokens name, from the site itself — no
// Google Fonts request, so no visitor IP address goes to Google.
import "./styles/fonts.css";
import "./styles/tokens.css";
import "./styles/base.css";

import { langBootScript } from "./lib/lang";
import { LangProvider } from "./lib/lang_context";
import { showFullSite } from "./lib/site_config";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { SkipLink } from "./components/skip_link";

export function Layout({ children }: { children: ReactNode }) {
  return (
    // The boot script sets lang on this element before React hydrates;
    // suppressHydrationWarning lets the DOM's value win.
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: langBootScript }} />
      </head>
      <body>
        <SkipLink />
        <LangProvider>
          {/* Before launch the live site is the single coming-soon card:
              no nav, no footer (app/lib/site_config.ts). */}
          {showFullSite && <Nav />}
          {children}
          {showFullSite && <Footer />}
        </LangProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
