#!/usr/bin/env node

(async () => {
  const pkg = require('../package.json')
  console.log(`👋  Welcome to ${pkg.name}@${pkg.version}`)
})()
