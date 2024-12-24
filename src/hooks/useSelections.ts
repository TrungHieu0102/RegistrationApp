import { useLocation } from "react-router-dom";
import devices, { Devices } from "../Data/Devices";
import services, { Services } from "../Data/Services";
import locations,{Location} from "../Data/Location";
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
    ? devices.find((device: Devices) => device.id === parseInt(deviceId))?.name || null
    : null;

  const serviceId = getParamValue("serviceId");
  const serviceName = serviceId
    ? services.find((service: Services) => service.id === parseInt(serviceId))?.name || null
    : null;
  const locationId = getParamValue("locationId");
  const locationName = locationId ?  locations.find((location: Location) => location.id === parseInt(locationId))?.name || null : null;
  const selections: Selection[] = [
    { name: "Brand", value: getParamValue("brand") },
    { name: "Device", value: deviceName },
    { name: "Service", value: serviceName },
    { name: "Location", value: locationName },
  ].filter((selection) => selection.value);

  return selections;
};
