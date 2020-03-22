#!/usr/bin/env node

(async () => {
  const { printInfo } = require('./helpers')
  const pkg = require('../package.json')
  printInfo(`👋  Welcome to ${pkg.name}@${pkg.version}`)
})()
