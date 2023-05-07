import { Locales } from '@/src/config/i18n'
import { DropdownItem } from '@/src/components/base/DropdownItem'
import { DrilldownItem } from '@/src/components/base/DrilldownItem'
import { useTranslation } from '@/src/hooks/useTranslation'
import { Option } from '../Option'
import { OptionItem } from '../OptionItem'
import { useRouter } from 'next/router'
import * as S from './LanguageOptions.styles'

const flags = {
  [Locales.en]: '/assets/site/flags/gb.svg',
  [Locales.ptBR]: '/assets/site/flags/br.svg',
}

export const LanguageOptions = () => {
  const router = useRouter()
  const { locale, locales, asPath, pathname, query } = router
  const { translate } = useTranslation()

  const isActive = (currentLocale: string) => {
    return locale === currentLocale
  }

  const handleLocaleChange = (currentLocale: string) => {
    document.cookie = `NEXT_LOCALE=${currentLocale}`

    router.push({ pathname, query }, asPath, { locale: currentLocale })
  }

  return (
    <DrilldownItem
      id="option-theme"
      label={
        <Option
          name={translate('options.language-item')}
          description={translate(`options.language-${locale}`)}
          icon={
            <S.Flag
              src={flags[locale! as Locales]}
              alt={translate(`options.language-flag-${locale}`)}
            />
          }
        />
      }
    >
      {locales!.map((currentLocale) => (
        <DropdownItem
          key={currentLocale}
          as="button"
          type="button"
          active={isActive(currentLocale)}
          onClick={() => handleLocaleChange(currentLocale)}
        >
          <OptionItem>
            <S.OptionItemFlag
              src={flags[currentLocale! as Locales]}
              alt={translate(`options.language-flag-${currentLocale}`)}
            />
            {translate(`options.language-${currentLocale}`)}
          </OptionItem>
        </DropdownItem>
      ))}
    </DrilldownItem>
  )
}
