import { CSS_THEME_PROPS_PREFIX } from '@/src/config/constants'

export const parseSchemeToCSSProperties = (
  scheme: Record<string, string | object>,
  properties: string[] = [],
  prefix?: string,
) => {
  let innerProperties: string[] = []

  Object.keys(scheme).forEach((prop) => {
    if (typeof scheme[prop] === 'string') {
      const property = `${
        prefix ?? CSS_THEME_PROPS_PREFIX
      }-${prop.toLowerCase()}: ${scheme[prop]};`

      properties.push(property)
    }

    if (typeof scheme[prop] === 'object') {
      innerProperties = parseSchemeToCSSProperties(
        scheme[prop] as Record<string, string | object>,
        properties,
        prefix
          ? `${prefix}-${prop.toLowerCase()}`
          : `${CSS_THEME_PROPS_PREFIX}-${prop.toLowerCase()}`,
      )

      innerProperties.forEach((prop) => {
        properties.push(prop)
      })
    }
  })

  return prefix ? innerProperties : properties
}
