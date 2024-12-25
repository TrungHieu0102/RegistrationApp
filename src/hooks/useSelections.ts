import { useLocation } from "react-router-dom";
import devices, { Devices } from "../Data/Devices";
import services, { Services } from "../Data/Services";
import locations, { Location } from "../Data/Location";
import { format, parse } from "date-fns";
import { useDateLocale } from "../hooks/getDateLocale"; 
import { useTranslation } from "react-i18next";

export interface Selection {
  id: number;
  name: string;
  value: string | null;
}

export const useSelections = (): Selection[] => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const locale = useDateLocale(); 
  const { t } = useTranslation();  

  const getParamValue = (key: string): string | null => params.get(key);

  const deviceId = getParamValue("deviceId");
  const deviceName = deviceId
    ? devices.find((device: Devices) => device.id === parseInt(deviceId))
        ?.name || null
    : null;

  const serviceId = getParamValue("serviceId");
  const serviceName = serviceId
    ? services.find((service: Services) => service.id === parseInt(serviceId))
        ?.name || null
    : null;

  const locationId = getParamValue("locationId");
  const locationName = locationId
    ? locations.find(
        (location: Location) => location.id === parseInt(locationId)
      )?.name || null
    : null;

  const generateFormattedTime = () => {
    const time = getParamValue("time");
    const date = getParamValue("date");
    if (!date || !time) {
      return null;
    }
    const parsedDate = parse(date, "yyyy-MM-dd", new Date());
    const [hours, minutes] = time.split(":").map(Number);
    const parsedTime = new Date(parsedDate.setHours(hours, minutes));
    const formattedDate = format(parsedTime, `eeee dd '${t('of')}' MMMM '${t('at')}' HH:mm`, { locale });
    return formattedDate;
  };

  const selections: Selection[] = [
    { id: 1, name: t('fields.brand'), value: getParamValue("brand") },
    { id: 2, name:  t("fields.device"), value: deviceName },
    { id: 3, name: t("fields.service"),  value: serviceName ? t(`services.${serviceName}`) : null},
    { id: 4, name: t("fields.location"), value: locationName },
    { id: 5, name:  t("fields.appointment"), value: generateFormattedTime() },
  ].filter((selection) => selection.value);

  return selections;
};
