import libraryInstance from "../i18n";
import useLanguageDirection from "host/hooks/useLanguageDirection";


const useSwitchLanguage = () => {
  useLanguageDirection();
  return (languageKey) => libraryInstance.changeLanguage(languageKey);
};

export default useSwitchLanguage;