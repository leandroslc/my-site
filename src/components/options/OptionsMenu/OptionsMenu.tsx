import { Dropdown } from '@/src/components/base/Dropdown'
import { ThemeOptions } from '../ThemeOptions'
import { CodeOptions } from '../CodeOptions'

export const OptionsMenu = () => {
  return (
    <Dropdown id="options-menu" label="Options">
      <ThemeOptions />
      <CodeOptions />
    </Dropdown>
  )
}
