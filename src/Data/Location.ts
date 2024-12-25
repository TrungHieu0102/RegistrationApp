import i18n from "i18next";

export interface Location {
  id: number;
  name?: string;
  address?: string;
  coordinates: [number, number];
  isActive: boolean;
}

const rawLocations: Location[] = [
  {
    id: 1,
    coordinates: [10.7996685, 106.6605822],
    isActive: true,
  },
  {
    id: 2,
    coordinates: [10.7926697, 106.6947428],
    isActive: true,
  },
  {
    id: 3,
    coordinates: [10.7390684, 106.7082243],
    isActive: true,
  },
  {
    id: 4,
    coordinates: [10.770372, 106.6724456],
    isActive: true,
  },
  {
    id: 5,
    coordinates: [10.8023917, 106.7115358],
    isActive: true,
  },
  {
    id: 6,
    coordinates: [10.8504588, 106.7600938],
    isActive: true,
  },
  {
    id: 7,
    coordinates: [10.8339263, 106.6656701],
    isActive: true,
  },
  {
    id: 8,
    coordinates: [10.7681203, 106.6740178],
    isActive: false,
  },
];

export const getTranslatedLocations = (): Location[] => {
  if (!i18n.isInitialized) {
    return rawLocations;
  }

  return rawLocations.map(location => ({
    ...location,
    name: i18n.t(`locations.clickbuy${location.id}.name`, { defaultValue: `Location ${location.id}` }),
    address: i18n.t(`locations.clickbuy${location.id}.address`, { defaultValue: `Unknown Address` }),
  }));
};

export default {
  rawLocations,
  getTranslatedLocations,
};
