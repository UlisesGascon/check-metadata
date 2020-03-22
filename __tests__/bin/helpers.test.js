const { printError, printInfo, printSuccess } = require('../../bin/helpers')
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
