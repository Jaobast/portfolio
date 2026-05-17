import { createContext, useContext, useState } from "react"

type Lang = "de" | "en"

type LangContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LangContext = createContext<LangContextType>({
  lang: "de",
  setLang: () => {}
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem("lang") as Lang) ?? "de"
  )

  const handleSetLang = (newLang: Lang) => {
    localStorage.setItem("lang", newLang)
    setLang(newLang)
  }

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)