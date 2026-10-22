const toolsVersionsRequired = {
  bun: '1.4.4',
  node: '24.22.1'
}

// Exact-match policy: keep these pins in sync with deploy.yml (bun + node-version)
const isVersionAccepted = (installed: string, required: string): boolean =>
  installed === required

for (const [tool, requiredVersion] of Object.entries(toolsVersionsRequired)) {
  try {
    const versionOutput = Bun.spawnSync([tool, '--version'])
      .stdout.toString()
      .trim()
    const installedVersion = (
      versionOutput.split(' ')[1] || versionOutput
    ).replace(/^[vV]/, '')

    if (!isVersionAccepted(installedVersion, requiredVersion)) {
      console.error(
        `🚨 Error: ${tool} version ${requiredVersion} is required, but version ${installedVersion} is installed.`
      )
      process.exit(1)
    }
  } catch (_error) {
    console.error(`🚨 Error: ${tool} is not installed or not found in PATH.`)
    process.exit(1)
  }
}

console.log('🚀 All required tools are installed with the correct versions.')
