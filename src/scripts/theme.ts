// The initial theme is applied by the inline script in BaseLayout's <head>
// (before first paint); this module only keeps it in sync with OS changes.
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

darkModeQuery.addEventListener('change', (e) => {
  document.documentElement.classList.toggle('dark', e.matches)
})
