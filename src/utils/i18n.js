import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
/// #if USEDUMMY
import settings from 'Settings/dummy'
/// #else
import settings from 'Settings'
/// #endif

const resources = {}

const start = async () => {
  await Promise.all(
    settings.langs.map(async ({ code }) => {
      const langImport = await import(`../../i18n/${code}/common.json`)
      resources[code] = {
        common: langImport,
      }
    }),
  )

  i18n.use(initReactI18next).init({
    ns: ['common'],
    defaultNS: ['common'],
    lowerCaseLng: true,
    resources,
    lng: settings.default_lang,
    fallbackLng: {
      default: ['en'],
    },
    debug: process.env.NODE_ENV === 'development',
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

  const langChangeMiddleware = ({ getState }) => {
    return (next) => (action) => {
      const previousLang = getState().lang
      const ret = next(action)
      const currentLang = getState().lang
      if (previousLang !== currentLang) {
        i18n.changeLanguage(currentLang)
      }
      return ret
    }
  }

  return langChangeMiddleware
}

export default start
