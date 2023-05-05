import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import {
  getCurrentTheme,
  injectTheme,
  setCurrentTheme,
  Themes,
} from '@/src/services/ThemeService'
import { DropdownItem } from '@/src/components/base/DropdownItem'
import { DrilldownItem } from '@/src/components/base/DrilldownItem'
import { useTranslation } from '@/src/hooks/useTranslation'
import { Option } from '../Option'
import * as S from './ThemeOptions.styles'

const ThemeIcons = {
  [Themes.Dark]: FiMoon,
  [Themes.Light]: FiSun,
  [Themes.None]: () => null,
}

const ThemeColors = {
  [Themes.Dark]: '#2ed0f1',
  [Themes.Light]: '#ffe9ac',
  [Themes.None]: '#fff',
}

export const ThemeOptions = () => {
  const { translate } = useTranslation()
  const [theme, setTheme] = useState(Themes.None)

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
          name={translate('options.site-theme-item')}
          description={translate(`options.site-theme-${theme}`)}
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
          {translate(`options.site-theme-${Themes.Dark}`)}
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
          {translate(`options.site-theme-${Themes.Light}`)}
        </S.OptionItem>
      </DropdownItem>
    </DrilldownItem>
  )
}
