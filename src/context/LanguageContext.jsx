import { createContext, useContext, useState, useCallback } from 'react'
import en from '../i18n/en'
import zh from '../i18n/zh'

const translations = { en, zh }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en'
    } catch {
      return 'en'
    }
  })

  const t = translations[lang] || translations.en

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'zh' : 'en'
      try { localStorage.setItem('lang', next) } catch {}
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
