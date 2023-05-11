import React, { ReactNode } from 'react'

type InnerTranslationObject = string | TranslationObject
type TranslationObject = { [k in string]: InnerTranslationObject }

const findTranslation = (key: string, items: TranslationObject) => {
  const keys = key.split('.')

  let item: InnerTranslationObject = items
  let index = 0

  while (typeof item !== 'string' && !!item && index < keys.length) {
    item = item[keys[index++]]
  }

  return typeof item === 'string' ? item : ''
}

const findTranslationAndReplace = <T extends unknown>(
  key: string,
  items: TranslationObject,
  ...params: unknown[]
) => {
  const parts = []

  const translation = findTranslation(key, items)
  const matches = Array.from(translation.matchAll(/\{(\d+)\}/g))

  let startIndex = 0

  matches.forEach((match) => {
    parts.push(translation.substring(startIndex, match.index))

    const elementIndex = parseInt(match[1], 10)

    parts.push(params.at(elementIndex))

    startIndex = match.index! + match.length + 1
  })

  parts.push(translation.substring(startIndex))

  return parts as unknown as T[]
}

export const findTranslationAndReplaceAsString = (
  key: string,
  items: TranslationObject,
  ...params: string[]
) => {
  const parts = findTranslationAndReplace<string>(key, items, ...params)

  return parts.join('')
}

export const findTranslationAndReplaceAsReactNodes = (
  key: string,
  items: TranslationObject,
  ...params: ReactNode[]
) => {
  const parts = findTranslationAndReplace<ReactNode>(key, items, ...params)

  return parts.map((node, index) => (
    <React.Fragment key={index}>{node}</React.Fragment>
  ))
}
