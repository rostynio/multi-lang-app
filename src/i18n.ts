import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import backEnd from 'i18next-xhr-backend'

i18n
  .use(backEnd)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: ['en', 'ar'],
    // react: {
    //   useSuspense: false
    // },
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
