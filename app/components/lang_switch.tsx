import { navCopy } from "../content/site_copy";
import type { ActiveLang } from "../lib/lang";
import { useLang } from "../lib/lang_context";
import { bilingualLabel } from "./localized";

const options: { value: ActiveLang; label: string }[] = [
  { value: "tr", label: "TR" },
  { value: "en", label: "EN" },
];

export function LangSwitch() {
  const { active, setLang } = useLang();
  return (
    <div className="lang_switch" role="group" aria-label={bilingualLabel(navCopy.language)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className="lang_switch_button"
          aria-pressed={active === option.value}
          onClick={() => setLang(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
