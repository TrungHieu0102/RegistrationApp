import devices, { Devices } from "../Data/Devices";
import { useServices } from "../hooks/useServices";
import { useLocations } from "../hooks/useLocations";
import { useCallback } from "react";

export const useStoreData = (queryParams: URLSearchParams) => {
  const services = useServices();
  const locations = useLocations();

  const generateOrderId = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const storeData = useCallback(() => {
    const brand = queryParams.get("brand");
    const deviceId = queryParams.get("deviceId");
    const serviceId = queryParams.get("serviceId");
    const locationId = queryParams.get("locationId");
    const time = queryParams.get("time");
    const date = queryParams.get("date");
    const device =
      devices.find(
        (device: Devices) => device.id === parseInt(deviceId || "")
      ) || null;

    const service =
      services.find((service) => service.id === parseInt(serviceId || "")) ||
      null;

    const location =
      locations.find(
        (location) => location.id === parseInt(locationId || "")
      ) || null;

    const dataToStore = {
      orderId: generateOrderId(),
      brand,
      device: device
        ? { id: device.id, name: device.name, image: device.image }
        : null,
      service: service
        ? {
            name: service.name,
            duration: service.duration,
          }
        : null,
      location: location
        ? {
            coordinates: location.coordinates,
            name: location.name,
            address: location.address,
          }
        : null,
      time,
      date,
    };

    sessionStorage.setItem(
      "serviceDataAppointment",
      JSON.stringify(dataToStore)
    );
  }, [locations, queryParams, services]);

  return storeData;
};
