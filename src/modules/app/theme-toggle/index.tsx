import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import { Dropdown } from '@/src/modules/base/components/dropdown'
import { DropdownItem } from '@/src/modules/base/components/dropdown-item'
import { getCurrentTheme, injectTheme, setCurrentTheme } from '../services'
import { Themes } from '../types/themes'
import * as S from './styles'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(Themes.System)

  const handleThemeChange = (theme: Themes) => {
    setTheme(theme)
    setCurrentTheme(theme)
  }

  useEffect(() => {
    const currentTheme = getCurrentTheme()

    setTheme(currentTheme)
    injectTheme(currentTheme)
  }, [])

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
