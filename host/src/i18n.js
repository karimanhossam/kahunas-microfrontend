import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './assets/locales/en/translation.json';
import arTranslation from './assets/locales/ar/translation.json';

// Translation resources
const resources = {
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
};

// Initialize i18next instance for App A
const hostInstance = i18n.createInstance();
hostInstance.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: true },
});

export default hostInstance;

