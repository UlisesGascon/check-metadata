const { printError, printInfo, printSuccess, checkMetadata } = require('../../bin/helpers')
const serializer = require('jest-serializer-ansi')

expect.addSnapshotSerializer(serializer)

const consoleOrg = console.log
const consoleError = console.error

beforeEach(() => {
  jest.clearAllMocks()
  console.log = jest.fn()
  console.error = jest.fn()
})

afterEach(() => {
  jest.clearAllMocks()
  console.log = consoleOrg
  console.error = consoleError
})

describe('General CLI helpers', () => {
  test('Terminal format helpers (colors): printError', () => {
    printError('This is an error msg')
    expect(console.error).toHaveBeenCalled()
    expect(console.error.mock.calls[0]).toMatchSnapshot()
    expect(console.error).toHaveBeenCalledTimes(1)
  })

  test('Terminal format helpers (colors): printInfo', () => {
    printInfo('This is an information msg')
    expect(console.log).toHaveBeenCalled()
    expect(console.log.mock.calls[0]).toMatchSnapshot()
    expect(console.log).toHaveBeenCalledTimes(1)
  })

  test('Terminal format helpers (colors): printSuccess', () => {
    printSuccess('This is a success msg')
    expect(console.log).toHaveBeenCalled()
    expect(console.log.mock.calls[0]).toMatchSnapshot()
    expect(console.log).toHaveBeenCalledTimes(1)
  })
})

describe('General CLI Reporting', () => {
  test('Should generate a valid report with a valid URL)', async () => {
    const report = await checkMetadata('https://github.com')
    expect(report).toMatchSnapshot()
  })

  test('Should generate a valid report with a valid PATH)', async () => {
    const report = await checkMetadata('img/my_picture.png')
    expect(report).toMatchSnapshot()
  })

  test('Should generate an error if argument is not a PATH or URL)', () => {
    const nonValid = '*'
    return checkMetadata(nonValid)
      .catch(
        e => expect(e.message).toMatch(`${nonValid} is not a valid URL or PATH!`)
      )
  })
})
