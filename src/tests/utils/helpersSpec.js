import { toNumber } from '../../utils/helpers'

describe('Test toNumber(input)', () => {
  it('returns a number if we pass a number', () => {
    const resultStr = toNumber(1)

    expect(resultStr).toBe(1)
  })

  it('returns a number if we pass a string-number', () => {
    const resultStr = toNumber('1')

    expect(resultStr).toBe(1)
  })

  it('returns an empty string if we pass an object', () => {
    const resultStr = toNumber({})

    expect(resultStr).toBe('')
  })

  it('returns an empty string if we pass a boolean', () => {
    const resultStr = toNumber(false)

    expect(resultStr).toBe('')
  })

  it('returns an empty string if we pass a string', () => {
    const resultStr = toNumber('abc')

    expect(resultStr).toBe('')
  })
})
