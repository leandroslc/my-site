import { parseSchemeToCSSProperties } from '@/src/theme/helpers'

const scheme = {
  outline: '#f00',
  main: {
    back: '#000',
    text: '#fff',
  },
  menu: {
    back: '#777',
    backHover: '#0ff',
    border: '#000',
  },
}

describe('theme-helper-parseSchemeToCSSProperties', () => {
  test('Should parse scheme object to css properties', () => {
    const expected = [
      '--lb-tm-outline: #f00;',
      '--lb-tm-main-back: #000;',
      '--lb-tm-main-text: #fff;',
      '--lb-tm-menu-back: #777;',
      '--lb-tm-menu-backhover: #0ff;',
      '--lb-tm-menu-border: #000;',
    ]

    // Act
    const result = parseSchemeToCSSProperties(scheme)

    // Assert
    expect(result).toStrictEqual(expected)
  })
})
