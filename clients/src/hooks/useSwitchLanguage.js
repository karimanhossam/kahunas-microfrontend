import clientsInstance from "../i18n";
import useLanguageDirection from "host/hooks/useLanguageDirection";


const useSwitchLanguage = () => {
  useLanguageDirection();
  return (languageKey) => clientsInstance.changeLanguage(languageKey);
};

export default useSwitchLanguage;