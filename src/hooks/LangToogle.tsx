import { useState, useEffect } from "react"
import { useLang } from "./LangContext"

import './LangToogle.css'

export function LangToggle() {
   const { lang, setLang } = useLang()
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFaded(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleSelect = (selected: "de" | "en") => {
    setLang(selected)
    setFaded(false)
    setTimeout(() => setFaded(true), 4000)
  }

  return (
    <div
      className={`lang-toggle ${faded ? "faded" : ""}`}
    >
      <button
        className={`lang-option ${lang === "de" ? "active" : ""}`}
        onClick={() => handleSelect("de")}
      >
        Deutsch
      </button>
      <button
        className={`lang-option ${lang === "en" ? "active" : ""}`}
        onClick={() => handleSelect("en")}
      >
        English
      </button>
    </div>
  )
}