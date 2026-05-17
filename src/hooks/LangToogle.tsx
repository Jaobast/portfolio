import { useLang } from "./LangContext"

export function LangToggle() {
  const { lang, setLang } = useLang()

  const toggle = () => {
    setLang(lang === "de" ? "en" : "de")
  }

  return (
    <button className="lang-toggle" onClick={toggle}>
      {lang === "de" ? "Deutsch" : "English"}
    </button>
  )
}