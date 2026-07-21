import { toNumber } from '../../utils/helpers'

describe('Test toNumber(input, fallback)', () => {
  it('returns a number if we pass a number', () => {
    const resultStr = toNumber(1)

    expect(resultStr).toBe(1)
  })

  it('returns a number if we pass a string-number', () => {
    const resultStr = toNumber('1')

    expect(resultStr).toBe(1)
  })

  it('returns the fallback (default 0) if we pass an object', () => {
    const resultStr = toNumber({})

    expect(resultStr).toBe(0)
  })

  it('returns the fallback (default 0) if we pass a boolean', () => {
    const resultStr = toNumber(false)

    expect(resultStr).toBe(0)
  })

  it('returns the fallback (default 0) if we pass a non-numeric string', () => {
    const resultStr = toNumber('abc')

    expect(resultStr).toBe(0)
  })

  it('returns the provided fallback for invalid input', () => {
    const resultStr = toNumber('abc', 40)

    expect(resultStr).toBe(40)
  })
})
