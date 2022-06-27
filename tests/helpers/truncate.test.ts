import { truncate } from '@/src/lib/helpers'

describe('helper: trucate', () => {
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
      // Act
      const result = truncate(value, maxLength)

      // Assert
      expect(result).toBe(expected)
    }
  )
})
