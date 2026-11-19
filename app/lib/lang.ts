export const LANG_KEY = "sk_lang";

export type Lang = "auto" | "en" | "tr";
export type ActiveLang = "en" | "tr";

const langs: readonly Lang[] = ["auto", "en", "tr"];

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

export function readStoredLang(): Lang {
  const stored = localStorage.getItem(LANG_KEY);
  return stored !== null && isLang(stored) ? stored : "auto";
}

export function effectiveLang(lang: Lang, navigatorLanguage: string): ActiveLang {
  if (lang !== "auto") return lang;
  return navigatorLanguage.toLowerCase().startsWith("tr") ? "tr" : "en";
}

// ── External store ──
// localStorage is the source of truth, not React state, so the provider
// subscribes to it through useSyncExternalStore instead of copying it into
// state from an effect.

const listeners = new Set<() => void>();

export function subscribeLang(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function storeLang(next: Lang): void {
  localStorage.setItem(LANG_KEY, next);
  // Content visibility is keyed off html[lang] in base.css.
  document.documentElement.lang = effectiveLang(next, navigator.language);
  for (const listener of listeners) listener();
}

// Prerender has no localStorage; this matches the <html lang="en"> baked
// into the static markup, so hydration starts from the served values.
export function serverLang(): Lang {
  return "auto";
}

/**
 * Inlined into <head> as a blocking script (see app/root.tsx) so the chosen
 * language applies before first paint. Plain JS, not TS: it runs before any
 * bundle loads, so it can't import from this module — keep it in sync with
 * the logic above by hand. Only touches <html>; <body> does not exist yet.
 */
export const langBootScript = `(function () {
  var lang = localStorage.getItem(${JSON.stringify(LANG_KEY)}) || "auto";
  var effective = lang === "auto" ? (navigator.language.toLowerCase().indexOf("tr") === 0 ? "tr" : "en") : lang;
  document.documentElement.lang = effective;
})();`;
