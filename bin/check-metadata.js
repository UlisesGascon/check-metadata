#!/usr/bin/env node

(async () => {
  const { printError, printInfo, printSuccess, checkMetadata } = require('./helpers')
  const pkg = require('../package.json')
  printInfo(`👋  Welcome to ${pkg.name}@${pkg.version}`)

  const ref = process.argv[2]
  if (!ref) {
    printError('😬  Missing argument URL or PATH!')
    printInfo('👉  Example File: check-metadata my_picture.png')
    printInfo('👉  Example URL: check-metadata https://demo.com/cool-pic.png')
    process.exit(1)
  }

  printInfo(`🚀  The analysis has started for ${ref}...`)

  try {
    const report = await checkMetadata(ref)
    printInfo(report)
    printSuccess(`😄  Thanks for use ${pkg.name}!`)
    process.exit(0)
  } catch (err) {
    printError('😱  CRITICAL ERROR:')
    printError(err)
    process.exit(1)
  }
})()
