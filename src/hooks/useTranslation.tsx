import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Locales, translations } from '@/src/config/i18n'
import {
  findTranslationAndReplaceAsReactNodes,
  findTranslationAndReplaceAsString,
} from '@/src/helpers/FindTranslationHelpers'

type GetTranslationFunctions = Record<
  string,
  (key: string, ...params: string[]) => string
>

type GetTranslationWithReplaceFunctions = Record<
  string,
  (key: string, ...params: ReactNode[]) => ReactNode[]
>

const stringTranslationFunctions = Object.keys(translations).reduce(
  (result, locale) => {
    result[locale] = (key, ...params) =>
      findTranslationAndReplaceAsString(
        key,
        translations[locale as Locales],
        ...params
      )

    return result
  },
  {} as GetTranslationFunctions
)

const reactNodeTranslationFunctions = Object.keys(translations).reduce(
  (result, locale) => {
    result[locale] = (key, ...params) =>
      findTranslationAndReplaceAsReactNodes(
        key,
        translations[locale as Locales],
        ...params
      )

    return result
  },
  {} as GetTranslationWithReplaceFunctions
)

export const useTranslation = () => {
  const { locale } = useRouter()

  return {
    translate: stringTranslationFunctions[locale!],
    translateWithElements: reactNodeTranslationFunctions[locale!],
  }
}
