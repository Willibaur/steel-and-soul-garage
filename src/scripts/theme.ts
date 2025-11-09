// Theme detection and persistence
function initTheme() {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function applyTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Apply initial theme
  applyTheme(darkModeQuery.matches)

  // Listen for changes
  darkModeQuery.addEventListener('change', (e) => {
    applyTheme(e.matches)
  })
}

// Initialize theme on page load
initTheme()

// Re-initialize on page navigation (View Transitions)
document.addEventListener('astro:page-load', initTheme)
