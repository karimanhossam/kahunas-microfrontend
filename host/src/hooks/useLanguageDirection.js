import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguageDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {

    const setDirection = (lang) => {
      const direction = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
    };

    setDirection(i18n.language);

  }, [i18n.language]);

  // Return current direction if needed elsewhere
  return i18n.language === 'ar' ? 'rtl' : 'ltr';
};

export default useLanguageDirection;
