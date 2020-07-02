import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Last update: ': 'Last updaddte: ',
    },
  },
  fr: {
    translation: {
      'Last update: ': 'Der mdaj : ',
    },
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
