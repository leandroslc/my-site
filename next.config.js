const isTest = process.env.NODE_ENV === 'test'

const defaultLocale = 'en'
const additionalLocales = ['pt-BR']
const availableLocales = [defaultLocale, ...(!isTest ? additionalLocales : [])]

/** @type import('next').NextConfig */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: availableLocales,
    defaultLocale: defaultLocale,
  },
  env: {
    BUILD_AVAILABLE_LOCALES: availableLocales.join(','),
    BUILD_DEFAULT_LOCALE: defaultLocale,
  },
}
