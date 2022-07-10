import { type ColorScheme } from '../color-scheme'
import { cssThemePropsPrefix } from '@/src/lib/config'

const FUNCTION_PARSE_EXPRESSION = new RegExp(/[^0-9A-Za-z\.]*/gm)

const parseFunction = (fn: Function) => {
  const body = fn.toString()

  return body
    .slice(body.indexOf('.'))
    .replace(FUNCTION_PARSE_EXPRESSION, '')
    .replaceAll('.', '-')
    .toLowerCase()
}

const theme = (selector: (scheme: ColorScheme) => string) => {
  const expression = parseFunction(selector)

  return `var(${cssThemePropsPrefix}${expression})`
}

export const vars = {
  theme,
}
