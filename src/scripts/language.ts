// Language switching functionality
const LANG_KEY = 'preferred-language'

export function getCurrentLanguage(): 'en' | 'es' {
  if (typeof localStorage === 'undefined') return 'en'
  return (localStorage.getItem(LANG_KEY) as 'en' | 'es') || 'en'
}

export function setLanguage(lang: 'en' | 'es') {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(LANG_KEY, lang)
}

export function toggleLanguage() {
  const current = getCurrentLanguage()
  const next = current === 'en' ? 'es' : 'en'
  setLanguage(next)

  // Reload page to apply new language
  window.location.reload()
}

// Attach to window for easy access from inline handlers
declare global {
  interface Window {
    toggleLanguage: () => void
  }
}

if (typeof window !== 'undefined') {
  window.toggleLanguage = toggleLanguage
}
