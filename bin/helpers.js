const chalk = require('chalk')
const isUrl = require('is-url')
const isValid = require('is-valid-path')

const printError = (msg) => console.error(chalk.red.bold(msg))
const printInfo = (msg) => console.log(msg)
const printSuccess = (msg) => console.log(chalk.green.bold(msg))

const checkMetadata = async (ref) => {
  const urlReq = isUrl(ref)
  const pathReq = isValid(ref)

  if (urlReq) {
    return `Argument provided ${ref} is a valid URL`
  }

  if (pathReq) {
    return `Argument provided ${ref} is a valid PATH`
  }

  throw new Error(`${ref} is not a valid URL or PATH!`)
}

module.exports = {
  printError, printInfo, printSuccess, checkMetadata
}
