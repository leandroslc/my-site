import { Dropdown } from '~/modules/base/components/dropdown'
import { DropdownItem } from '~/modules/base/components/dropdown-item'
import { useStore } from '../data/state'
import { Themes } from '../data/types'

export const ThemeToggle = () => {
  const { theme, setTheme } = useStore()

  const handleThemeChange = (theme: Themes) => {
    setTheme(theme)
  }

  return (
    <>
      <Dropdown id="theme-toggle" label="Tema">
        <DropdownItem
          as="button"
          type="button"
          active={theme === Themes.Dark}
          onClick={() => handleThemeChange(Themes.Dark)}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          as="button"
          type="button"
          active={theme === Themes.Light}
          onClick={() => handleThemeChange(Themes.Light)}
        >
          Light
        </DropdownItem>
        <DropdownItem
          as="button"
          type="button"
          active={theme === Themes.System}
          onClick={() => handleThemeChange(Themes.System)}
        >
          System
        </DropdownItem>
      </Dropdown>
    </>
  )
}
