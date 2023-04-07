import { useEffect, useState } from 'react'
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import {
  getCurrentTheme,
  injectTheme,
  setCurrentTheme,
} from '@/src/lib/services/theme'
import { Themes } from '@/src/lib/services/theme/types'
import { DropdownItem } from '@/src/components/base/DropdownItem'
import { DrilldownItem } from '@/src/components/base/DrilldownItem'
import { Option } from '../Option'
import { OptionItem } from '../OptionItem'

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

export const ThemeOptions = () => {
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
    <DrilldownItem
      id="option-theme"
      label={
        <Option
          name="Theme"
          selectedOptionDescription={ThemeNames[theme]}
          Icon={ThemeIcons[theme]}
        />
      }
    >
      <DropdownItem
        as="button"
        type="button"
        active={theme === Themes.Dark}
        onClick={() => handleThemeChange(Themes.Dark)}
      >
        <OptionItem Icon={FiMoon}>{ThemeNames[Themes.Dark]}</OptionItem>
      </DropdownItem>
      <DropdownItem
        as="button"
        type="button"
        active={theme === Themes.Light}
        onClick={() => handleThemeChange(Themes.Light)}
      >
        <OptionItem Icon={FiSun}>{ThemeNames[Themes.Light]}</OptionItem>
      </DropdownItem>
      <DropdownItem
        as="button"
        type="button"
        active={theme === Themes.System}
        onClick={() => handleThemeChange(Themes.System)}
      >
        <OptionItem Icon={FiMonitor}>{ThemeNames[Themes.System]}</OptionItem>
      </DropdownItem>
    </DrilldownItem>
  )
}
