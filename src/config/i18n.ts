import ptBR from '@/src/locales/pt-BR.json'
import en from '@/src/locales/en.json'
import { enGB as enGBDate, ptBR as ptBRDate } from 'date-fns/locale'

export const defaultLocale = process.env.BUILD_DEFAULT_LOCALE!
export const availableLocales = process.env.BUILD_AVAILABLE_LOCALES!.split(',')

export enum Locales {
  en = 'en',
  ptBR = 'pt-BR',
}

export const translations = {
  [Locales.en]: en,
  [Locales.ptBR]: ptBR,
}

export const dateFormats = {
  [Locales.en]: enGBDate,
  [Locales.ptBR]: ptBRDate,
}
