import { useTranslation } from "react-i18next";
import { useDateLocale } from "./getDateLocale"; 
import { format, parse } from "date-fns";
import { vi } from "date-fns/locale";  

export const useFormattedDateTime = (date: string | null, time: string | null): string | null => {
  const { t } = useTranslation();  
  const locale = useDateLocale(); 

  if (!date || !time) {
    return null;
  }

  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  const [hours, minutes] = time.split(":").map(Number);
  const parsedTime = new Date(parsedDate.setHours(hours, minutes));

  if (locale === vi) {
    return format(parsedTime, `eeee dd 'ngày' MMMM 'tháng' yyyy 'lúc' HH:mm`, { locale: vi });
  }

  // Định dạng cho ngôn ngữ khác
  return format(parsedTime, `eeee dd '${t('of')}' MMMM '${t('at')}' HH:mm`, { locale });
};
