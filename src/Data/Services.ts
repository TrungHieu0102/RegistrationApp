import i18n from "i18next";

export interface Services {
  id: number;
  name: string;
  price: number;
  duration: string;
  isActive: boolean;
}

const rawServices: Services[] = [
  { id: 1, name: "replaceScreen", price: 1200000, duration: "2 hour", isActive: true },
  { id: 2, name: "replaceBattery", price: 800000, duration: "1 hour", isActive: true },
  { id: 3, name: "fixTouchIssue", price: 1500000, duration: "3 hour", isActive: true },
  { id: 4, name: "equipmentCleaning", price: 500000, duration: "1 hour", isActive: true },
  { id: 5, name: "hardwareUpgrade", price: 3000000, duration: "5 hour", isActive: true },
  { id: 6, name: "fixSoftwareErrors", price: 700000, duration: "1.5 hour", isActive: true },
  { id: 7, name: "replaceSpeakerMic", price: 900000, duration: "2 hour", isActive: true },
  { id: 8, name: "replaceCamera", price: 1100000, duration: "2.5 hour", isActive: true },
  { id: 9, name: "replaceProtectiveGlass", price: 600000, duration: "1.5 hour", isActive: true },
];

export const getTranslatedServices = (): Services[] => {
  return rawServices.map((service) => ({
    ...service,
    name: i18n.t(`services.${service.name}`), 
    duration: service.duration.replace(
      /hour/,
      i18n.language === "vi" ? "tiếng" : "hour" 
    ),
  }));
};
export default {
  rawServices,
  getTranslatedServices,
};
