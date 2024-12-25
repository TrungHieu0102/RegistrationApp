import { useEffect, useState } from "react";
import i18n from "i18next";
import { getTranslatedServices, Services } from "../Data/Services";

export const useServices = (): Services[] => {
  const [translatedServices, setTranslatedServices] = useState<Services[]>(getTranslatedServices());

  useEffect(() => {
    const handleLanguageChange = () => {
      setTranslatedServices(getTranslatedServices());
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange); // Dọn dẹp listener
    };
  }, []);
  return translatedServices;
};
