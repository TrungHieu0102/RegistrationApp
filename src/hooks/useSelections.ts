import { useLocation } from "react-router-dom";
import devices, { Devices } from "../Data/Devices";
import services, { Services } from "../Data/Services";
import locations, { Location } from "../Data/Location";
import { format, parse } from "date-fns";
export interface Selection {
  name: string;
  value: string | null;
}
export const useSelections = (): Selection[] => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

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
    const formattedDate = format(parsedTime, "eeee dd 'of' MMMM 'at' HH:mm");
    return formattedDate;
  };
  console.log(generateFormattedTime());

  const selections: Selection[] = [
    { name: "Brand", value: getParamValue("brand") },
    { name: "Device", value: deviceName },
    { name: "Service", value: serviceName },
    { name: "Location", value: locationName },
    { name: "Appointment", value: generateFormattedTime() },
  ].filter((selection) => selection.value);

  return selections;
};
