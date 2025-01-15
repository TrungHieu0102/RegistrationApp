import { useLocations } from "./useLocations";
import devices, { Devices } from "../Data/Devices";
import { Services } from "../Data/Services";
import { Location } from "../Data/Location";
import { format, parse } from "date-fns";
import { useDateLocale } from "./useDateLocale";
import { useTranslation } from "react-i18next";
import { useServices } from "./useServices";

export interface Selection {
  id: number;
  name: string;
  value: string | null;
  link: string;
}

export const useSelections = (): Selection[] => {
  const locations = useLocations();
  const params = new URLSearchParams(location.search);
  const locale = useDateLocale();
  const { t } = useTranslation();
  const services = useServices();
  const getParamValue = (key: string): string | null => params.get(key);
  const brand = getParamValue("brand");
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
  const time = getParamValue("time");
  const timeParam = time ? `${encodeURIComponent(time)}` : "";
  const date = getParamValue("date");
  const generateFormattedTime = () => {
    if (!date || !time) {
      return null;
    }
    const parsedDate = parse(date, "yyyy-MM-dd", new Date());
    const [hours, minutes] = time.split(":").map(Number);
    const parsedTime = new Date(parsedDate.setHours(hours, minutes));
    const formattedDate = format(
      parsedTime,
      `eeee dd '${t("of")}' MMMM '${t("at")}' HH:mm`,
      { locale }
    );
    return formattedDate;
  };
  const formDataAppointment = sessionStorage.getItem("formDataAppointment");
  const formData = formDataAppointment ? JSON.parse(formDataAppointment) : {};
  const serialNumber = formData.serialNumber || null;
  const name = formData.name || null;
  const phone = formData.phone || null;
  const email = formData.email || null;

  let id = 1;
  const selections: Selection[] = [];

  if (brand) {
    selections.push({
      id: id++,
      name: t("fields.brand"),
      value: getParamValue("brand"),
      link: "",
    });
  }

  if (deviceName) {
    selections.push({
      id: id++,
      name: t("fields.device"),
      value: deviceName,
      link: `/?brand=${brand}`,
    });
  }

  if (serviceName) {
    selections.push({
      id: id++,
      name: t("fields.service"),
      value: serviceName,
      link: `/?brand=${brand}&deviceId=${deviceId}`,
    });
  }

  if (locationName) {
    selections.push({
      id: id++,
      name: t("fields.location"),
      value: locationName,
      link: `/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}`,
    });
  }

  const appointment = generateFormattedTime();
  if (appointment) {
    selections.push({
      id: id++,
      name: t("fields.appointment"),
      value: appointment,
      link: `/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${locationId}`,
    });

    if (serialNumber) {
      selections.push({
        id: id++,
        name: t("fields.serialNumber"),
        value: serialNumber,
        link: `/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${locationId}&time=${timeParam}&date=${date}`,
      });
    }
    if (name) {
      selections.push({
        id: id++,
        name: t("fields.name"),
        value: name,
        link: `/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${locationId}&time=${timeParam}&date=${date}`,
      });
    }
    if (phone) {
      selections.push({
        id: id++,
        name: t("fields.phone"),
        value: phone,
        link: `/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${locationId}&time=${timeParam}&date=${date}`,
      });
    }
    if (email) {
      selections.push({
        id: id++,
        name: t("fields.email"),
        value: email,
        link:`/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${locationId}&time=${timeParam}&date=${date}`,
      });
    }
  }

  return selections;
};
