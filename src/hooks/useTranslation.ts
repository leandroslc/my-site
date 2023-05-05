import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import ptBR from '@/src/locales/pt-BR.json'
import enUS from '@/src/locales/en-US.json'

enum Locales {
  enUS = 'en-US',
  ptBR = 'pt-BR',
}

const translations = {
  [Locales.enUS]: enUS,
  [Locales.ptBR]: ptBR,
}

type InnerTranslationObject = string | TranslationObject
type TranslationObject = { [k in string]: InnerTranslationObject }

type GetTranslationFunctions = Record<string, (key: string) => string>
type GetTranslationWithReplaceFunctions = Record<
  string,
  (key: string, ...params: ReactNode[]) => ReactNode[]
>

const findTranslation = (key: string, items: TranslationObject) => {
  const keys = key.split('.')

  let item: InnerTranslationObject = items
  let index = 0

  while (typeof item !== 'string' && !!item && index < keys.length) {
    item = item[keys[index++]]
  }

  return typeof item === 'string' ? item : ''
}

const findTranslationAndReplaceElements = (
  key: string,
  items: TranslationObject,
  ...params: ReactNode[]
) => {
  const nodes = [] as ReactNode[]

  const translation = findTranslation(key, items)
  const matches = Array.from(translation.matchAll(/\{(\d+)\}/g))

  let startIndex = 0

  matches.forEach((match) => {
    nodes.push(translation.substring(startIndex, match.index))

    const elementIndex = parseInt(match[1], 10)

    nodes.push(params.at(elementIndex))

    startIndex = match.index! + match.length + 1
  })

  nodes.push(translation.substring(startIndex))

  return nodes
}

const getTranslationFunctions = Object.keys(translations).reduce(
  (result, locale) => {
    result[locale] = (key) =>
      findTranslation(key, translations[locale as Locales])

    return result
  },
  {} as GetTranslationFunctions
)

const getTranslationWithReplaceFunctions = Object.keys(translations).reduce(
  (result, locale) => {
    result[locale] = (key, ...params) =>
      findTranslationAndReplaceElements(
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
    translate: getTranslationFunctions[locale!],
    translateWithElements: getTranslationWithReplaceFunctions[locale!],
  }
}
