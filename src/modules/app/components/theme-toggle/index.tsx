import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import { Dropdown } from '@/src/modules/base/components/dropdown'
import { DropdownItem } from '@/src/modules/base/components/dropdown-item'
import { useStore } from '../../data/state'
import { Themes } from '../../data/types'
import * as S from './styles'

export const ThemeToggle = () => {
  const { theme, setTheme } = useStore()

  const handleThemeChange = (theme: Themes) => {
    setTheme(theme)
  }

  return (
    <>
      <Dropdown id="theme-toggle" label="Theme">
        <DropdownItem
          as="button"
          type="button"
          active={theme === Themes.Dark}
          onClick={() => handleThemeChange(Themes.Dark)}
        >
          <S.OptionIcon as={FiMoon} /> Dark
        </DropdownItem>
        <DropdownItem
          as="button"
          type="button"
          active={theme === Themes.Light}
          onClick={() => handleThemeChange(Themes.Light)}
        >
          <S.OptionIcon as={FiSun} /> Light
        </DropdownItem>
        <DropdownItem
          as="button"
          type="button"
          active={theme === Themes.System}
          onClick={() => handleThemeChange(Themes.System)}
        >
          <S.OptionIcon as={FiMonitor} /> System
        </DropdownItem>
      </Dropdown>
    </>
  )
}
