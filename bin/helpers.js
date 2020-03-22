const chalk = require('chalk')

const printError = (msg) => console.error(chalk.red.bold(msg))
const printInfo = (msg) => console.log(msg)
const printSuccess = (msg) => console.log(chalk.green.bold(msg))

const checkMetadata = (ref) => `Argument provided: ${ref}`

module.exports = {
  printError, printInfo, printSuccess, checkMetadata
}
