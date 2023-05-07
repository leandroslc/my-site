import { Dropdown } from '@/src/components/base/Dropdown'
import { useTranslation } from '@/src/hooks/useTranslation'
import { ThemeOptions } from '../ThemeOptions'
import { CodeOptions } from '../CodeOptions'
import { LanguageOptions } from '../LanguageOptions'

export const OptionsMenu = () => {
  const { translate } = useTranslation()
  return (
    <Dropdown id="options-menu" label={translate('options.menu')}>
      <ThemeOptions />
      <CodeOptions />
      <LanguageOptions />
    </Dropdown>
  )
}
