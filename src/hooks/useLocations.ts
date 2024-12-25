import { useEffect, useState } from "react";
import i18n from "i18next";
import { getTranslatedLocations, Location } from "../Data/Location";

export const useLocations = (): Location[] => {
  const [translatedLocations, setTranslatedLocations] = useState<Location[]>(getTranslatedLocations());

  useEffect(() => {
    const handleLanguageChange = () => {
      setTranslatedLocations(getTranslatedLocations());
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange); // Dọn dẹp listener
    };
  }, []);

  return translatedLocations;
};
