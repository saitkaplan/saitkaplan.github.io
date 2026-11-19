import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import {
  effectiveLang,
  readStoredLang,
  serverLang,
  storeLang,
  subscribeLang,
  type ActiveLang,
  type Lang,
} from "./lang";

interface LangContextValue {
  /** The stored choice ("auto" follows the browser). */
  lang: Lang;
  /** The language actually shown. */
  active: ActiveLang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

function readActiveLang(): ActiveLang {
  return effectiveLang(readStoredLang(), navigator.language);
}

// The prerendered markup is English (<html lang="en">), so hydration starts
// from "en" and only then picks up the visitor's real language — reading
// navigator during the first render would make server and client disagree.
function serverActiveLang(): ActiveLang {
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, readStoredLang, serverLang);
  const active = useSyncExternalStore(subscribeLang, readActiveLang, serverActiveLang);
  return <LangContext.Provider value={{ lang, active, setLang: storeLang }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (ctx === null) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return ctx;
}
