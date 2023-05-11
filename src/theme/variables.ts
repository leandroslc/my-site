import { CSS_THEME_PROPS_PREFIX } from '@/src/config/constants'
import { type ColorScheme } from './ColorScheme'

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

  return `var(${CSS_THEME_PROPS_PREFIX}${expression})`
}

export const vars = {
  theme,
}
