// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
 module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath: typeof window === 'undefined' ?
    require('path').resolve('./public/assets/locales') : '/assets/locales',


  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}