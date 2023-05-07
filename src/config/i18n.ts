import ptBR from '@/src/locales/pt-BR.json'
import enUS from '@/src/locales/en-US.json'
import { enUS as enUSDate, ptBR as ptBRDate } from 'date-fns/locale'

export enum Locales {
  enUS = 'en-US',
  ptBR = 'pt-BR',
}

export const translations = {
  [Locales.enUS]: enUS,
  [Locales.ptBR]: ptBR,
}

export const dateFormats = {
  [Locales.enUS]: enUSDate,
  [Locales.ptBR]: ptBRDate,
}
