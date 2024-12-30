import { enGB, vi } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { Locale } from "date-fns"; 

export const useDateLocale = (): Locale => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  if (currentLang === "vi") return vi;
  return enGB;
};
