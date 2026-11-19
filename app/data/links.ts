// Outbound links shown in the contact section and the footer. The three
// sites (saitkaplan.com, neaweforge.com, neawe.com) link to each other.

export interface OutboundLink {
  label: string;
  href: string;
}

export const siteLinks: OutboundLink[] = [
  { label: "Neawe Forge", href: "https://neaweforge.com/" },
  { label: "Neawe", href: "https://neawe.com/" },
];

export const profileLinks: OutboundLink[] = [
  { label: "GitHub", href: "https://github.com/saitkaplan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/saitkaplan" },
  { label: "X", href: "https://x.com/neawerse" },
];
