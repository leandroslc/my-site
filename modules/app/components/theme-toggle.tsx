import { Dropdown } from '~/modules/base/components/dropdown'
import { useStore } from '../data/state'
import { Themes } from '../data/types'

export const ThemeToggle = () => {
  const { setTheme } = useStore()

  const handleThemeChange = (theme: Themes) => {
    setTheme(theme)
  }

  return (
    <>
      <Dropdown id="theme-toggle" label="Tema">
        <button onClick={() => handleThemeChange(Themes.System)}>System</button>
        <button onClick={() => handleThemeChange(Themes.Dark)}>Dark</button>
        <button onClick={() => handleThemeChange(Themes.Light)}>Light</button>
      </Dropdown>
    </>
  )
}
