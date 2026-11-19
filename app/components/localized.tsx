import type { ElementType, ReactNode } from "react";
import type { LocalizedText } from "../content/site_copy";

interface LocalizedProps {
  text: LocalizedText;
  /** Element rendered once per language. Defaults to a block-level <p>. */
  as?: ElementType;
  /** Use the inline visibility classes (en_inline/tr_inline) instead of the block ones. */
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}

// Both language variants are rendered; base.css shows only the one matching
// <html lang>, which the boot script sets before first paint.
export function Localized({ text, as, inline = false, className, children }: LocalizedProps) {
  const Tag: ElementType = as ?? (inline ? "span" : "p");
  const suffix = inline ? "inline" : "content";
  const base = className ? `${className} ` : "";
  return (
    <>
      <Tag className={`${base}en_${suffix}`}>
        {text.en}
        {children}
      </Tag>
      <Tag className={`${base}tr_${suffix}`}>
        {text.tr}
        {children}
      </Tag>
    </>
  );
}

// For attributes (aria-label, title) that can hold only one string.
export function bilingualLabel(text: LocalizedText): string {
  return `${text.en} / ${text.tr}`;
}
