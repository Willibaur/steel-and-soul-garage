const toolsVersionsRequired = {
  bun: '1.3.3',
  node: '24.11.0'
}

for (const [tool, requiredVersion] of Object.entries(toolsVersionsRequired)) {
  try {
    const versionOutput = Bun.spawnSync([tool, '--version'])
      .stdout.toString()
      .trim()
    const installedVersion = (
      versionOutput.split(' ')[1] || versionOutput
    ).replace(/^[vV]/, '')

    if (installedVersion !== requiredVersion) {
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
