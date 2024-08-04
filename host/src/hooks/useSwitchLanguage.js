import useSwitchClientsLanguage from "clients/hooks/useSwitchClientsLanguage";
import useSwitchLibraryLanguage from "library/hooks/useSwitchLibraryLanguage";

import hostInstance from "../i18n";
import useLanguageDirection from "./useLanguageDirection";

const useSwitchLanguage = () => {
  const switchClientsLanguageHook = useSwitchClientsLanguage();
  const switchLibraryLanguageHook = useSwitchLibraryLanguage();
  useLanguageDirection();

  //Host
  const switchHostLanguage = (languageKey) => {
    hostInstance.changeLanguage(languageKey);
  }
  //Clients
  const switchClientsLanguage = (languageKey) =>
    switchClientsLanguageHook(languageKey);

  //Library
  const switchLibraryLanguage = (languageKey) =>
    switchLibraryLanguageHook(languageKey);

  //All Apps
  const switchAllLanguages = (languageKey) => {
    switchHostLanguage(languageKey);
    switchClientsLanguage(languageKey);
    switchLibraryLanguage(languageKey);
  };

  return {
    switchHostLanguage,
    switchClientsLanguage,
    switchLibraryLanguage,
    switchAllLanguages,
  };
};

export default useSwitchLanguage;
