import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = (isoDateTime: string) => {
  const date = parseISO(isoDateTime)

  return format(date, 'PPP', { locale: ptBR })
}
