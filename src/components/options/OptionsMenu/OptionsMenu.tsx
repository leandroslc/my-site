import { Dropdown } from '@/src/components/base/Dropdown'
import { ThemeOptions } from '../ThemeOptions'

export const OptionsMenu = () => {
  return (
    <Dropdown id="options-menu" label="Options">
      <ThemeOptions />
    </Dropdown>
  )
}
