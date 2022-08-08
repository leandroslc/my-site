import { vars } from '@/src/theme'

describe('theme-helper-variables', () => {
  test('Should return theme variable given scheme item', () => {
    // Act
    const result = vars.theme((scheme) => scheme.dropdown.item.backHover)

    // Assert
    expect(result).toStrictEqual('var(--lb-tm-dropdown-item-backhover)')
  })

  test('Should return theme variable given scheme item with spaces and special chars', () => {
    // Act

    /* eslint-disable prettier/prettier */
    const result = vars.theme((scheme) => scheme
      .dropdown?.item  .backHover
    )
    /* eslint-enable prettier/prettier */

    // Assert
    expect(result).toStrictEqual('var(--lb-tm-dropdown-item-backhover)')
  })
})
