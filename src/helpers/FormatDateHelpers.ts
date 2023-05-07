import { parseISO, format } from 'date-fns'
import { Locales, dateFormats } from '@/src/config/i18n'

export const formatDate = (isoDateTime: string, locale: string) => {
  const date = parseISO(isoDateTime)

  return format(date, 'PPP', { locale: dateFormats[locale as Locales] })
}
