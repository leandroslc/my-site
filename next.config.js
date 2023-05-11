const isTest = process.env.NODE_ENV === 'test'

const defaultLocale = 'en'
const additionalLocales = ['pt-BR']

/** @type import('next').NextConfig */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: [defaultLocale, ...(!isTest ? additionalLocales : [])],
    defaultLocale: defaultLocale,
  },
}
