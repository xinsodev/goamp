import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { Language } from './enums';
import { getLanguage } from './utils/config';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: getLanguage(),
    fallbackLng: Language.English,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
