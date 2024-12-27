import { useState, useEffect } from "react";

export interface FormDataAppointment {
  serialNumber: string;
  description: string;
  name: string;
  address: string;
  city: string;
  zip: string;
  state: string;
  email: string;
  phone: string;
}

export interface ServiceDataAppointment {
  orderId: string;
  brand: string | null;
  device: {
    id: number;
    name: string;
    image: string;
  } | null;
  service: {
    name: string;
    duration: string;
  } | null;
  location: {
    coordinates: [number, number];
    name: string;
  } | null;
  time: string | null;
  date: string | null;
}

export type AccessoriesAppointment = string;

export const useSessionData = () => {
  const [formDataAppointment, setFormDataAppointment] = useState<FormDataAppointment | null>(null);
  const [serviceDataAppointment, setServiceDataAppointment] = useState<ServiceDataAppointment | null>(null);
  const [accessoriesAppointment, setAccessoriesAppointment] = useState<AccessoriesAppointment | null>(null);

  useEffect(() => {
    const formData = sessionStorage.getItem("formDataAppointment");
    const serviceData = sessionStorage.getItem("serviceDataAppointment");
    const accessoriesData = sessionStorage.getItem("accessoriesAppointment");
    setFormDataAppointment(formData ? JSON.parse(formData) : null);
    setServiceDataAppointment(serviceData ? JSON.parse(serviceData) : null);
    setAccessoriesAppointment(accessoriesData || null);
  }, []);

  return {
    formDataAppointment,
    serviceDataAppointment,
    accessoriesAppointment,
  };
};
