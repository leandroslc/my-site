import { truncate } from './TruncateHelper'

describe('helpers.TruncateHelper', () => {
  test.each`
    value        | maxLength | expected
    ${'Testing'} | ${6}      | ${'Tes...'}
    ${'Test'}    | ${4}      | ${'Test'}
    ${'Test'}    | ${5}      | ${'Test'}
    ${''}        | ${4}      | ${''}
    ${'Te'}      | ${1}      | ${''}
  `(
    'Given value "$value" and "$maxLength" should return "$expected"',
    ({ value, maxLength, expected }) => {
      const result = truncate(value, maxLength)

      expect(result).toBe(expected)
    }
  )
})
