import { siteLinks } from "../data/links";

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer_mark">© Sait Kaplan</span>
      <span className="footer_links">
        {siteLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </span>
    </footer>
  );
}
