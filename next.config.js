/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en']
  }
}

module.exports = nextConfig
