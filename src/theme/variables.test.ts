import { vars } from './variables'

describe('theme.variables', () => {
  test('Should return theme variable given scheme item', () => {
    const result = vars.theme((scheme) => scheme.dropdown.item.backHover)

    expect(result).toStrictEqual('var(--lb-tm-dropdown-item-backhover)')
  })

  test('Should return theme variable given scheme item with spaces and special chars', () => {
    const result = vars.theme((scheme) => scheme.dropdown?.item.backHover)

    expect(result).toStrictEqual('var(--lb-tm-dropdown-item-backhover)')
  })
})
