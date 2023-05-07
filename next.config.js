/** @type import('next').NextConfig */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'en',
  },
}
