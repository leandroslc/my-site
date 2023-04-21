import { useEffect, useState } from 'react'
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import {
  getCurrentTheme,
  injectTheme,
  setCurrentTheme,
  Themes,
} from '@/src/services/ThemeService'
import { DropdownItem } from '@/src/components/base/DropdownItem'
import { DrilldownItem } from '@/src/components/base/DrilldownItem'
import { Option } from '../Option'
import * as S from './ThemeOptions.styles'

const ThemeNames = {
  [Themes.Dark]: 'Dark',
  [Themes.Light]: 'Light',
  [Themes.System]: 'System',
}

const ThemeIcons = {
  [Themes.Dark]: FiMoon,
  [Themes.Light]: FiSun,
  [Themes.System]: FiMonitor,
}

const ThemeColors = {
  [Themes.Dark]: '#2ed0f1',
  [Themes.Light]: '#ffe9ac',
  [Themes.System]: '#bfffb5',
}

export const ThemeOptions = () => {
  const [theme, setTheme] = useState(Themes.System)

  const handleThemeChange = (theme: Themes) => {
    setTheme(theme)
    setCurrentTheme(theme)
  }

  const isActive = (currentTheme: Themes) => {
    return theme === currentTheme
  }

  const getIconColor = (theme: Themes) => {
    return isActive(theme) ? undefined : ThemeColors[theme]
  }

  const getIcon = (theme: Themes) => {
    const Icon = ThemeIcons[theme]

    return <Icon color={ThemeColors[theme]} />
  }

  useEffect(() => {
    const currentTheme = getCurrentTheme()

    setTheme(currentTheme)
    injectTheme(currentTheme)
  }, [])

  return (
    <DrilldownItem
      id="option-theme"
      label={
        <Option
          name="Theme"
          description={ThemeNames[theme]}
          icon={getIcon(theme)}
        />
      }
    >
      <DropdownItem
        as="button"
        type="button"
        active={isActive(Themes.Dark)}
        onClick={() => handleThemeChange(Themes.Dark)}
      >
        <S.OptionItem>
          <S.OptionIcon
            as={FiMoon}
            aria-hidden="true"
            color={getIconColor(Themes.Dark)}
          />
          {ThemeNames[Themes.Dark]}
        </S.OptionItem>
      </DropdownItem>
      <DropdownItem
        as="button"
        type="button"
        active={isActive(Themes.Light)}
        onClick={() => handleThemeChange(Themes.Light)}
      >
        <S.OptionItem>
          <S.OptionIcon
            as={FiSun}
            aria-hidden="true"
            color={getIconColor(Themes.Light)}
          />
          {ThemeNames[Themes.Light]}
        </S.OptionItem>
      </DropdownItem>
      <DropdownItem
        as="button"
        type="button"
        active={isActive(Themes.System)}
        onClick={() => handleThemeChange(Themes.System)}
      >
        <S.OptionItem>
          <S.OptionIcon
            as={FiMonitor}
            aria-hidden="true"
            color={getIconColor(Themes.System)}
          />
          {ThemeNames[Themes.System]}
        </S.OptionItem>
      </DropdownItem>
    </DrilldownItem>
  )
}
