// Theme detection and persistence
function initTheme() {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function applyTheme(isDark: boolean) {
    document.documentElement.classList.toggle('dark', isDark)
  }

  // Apply initial theme
  applyTheme(darkModeQuery.matches)

  darkModeQuery.addEventListener('change', (e) => {
    applyTheme(e.matches)
  })
}

initTheme()

// Re-initialize on page navigation (View Transitions)
document.addEventListener('astro:page-load', initTheme)
