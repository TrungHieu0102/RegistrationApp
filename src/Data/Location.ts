import i18n from "i18next";

export interface Location {
  id: number;
  name?: string;
  address?: string;
  coordinates: [number, number];
  isActive: boolean;
  phoneNumber?: string;
  email?: string;
  website?: string;
}

const rawLocations: Location[] = [
  {
    id: 1,
    coordinates: [10.7996685, 106.6605822],
    isActive: true,
    phoneNumber: "123-456-7890",
    email: "location1@example.com",
    website: "http://location1.com",
  },
  {
    id: 2,
    coordinates: [10.7926697, 106.6947428],
    isActive: true,
    phoneNumber: "123-456-7891",
    email: "location2@example.com",
    website: "http://location2.com",
  },
  {
    id: 3,
    coordinates: [10.7390684, 106.7082243],
    isActive: true,
    phoneNumber: "123-456-7892",
    email: "location3@example.com",
    website: "http://location3.com",
  },
  {
    id: 4,
    coordinates: [10.770372, 106.6724456],
    isActive: true,
    phoneNumber: "123-456-7893",
    email: "location4@example.com",
    website: "http://location4.com",
  },
  {
    id: 5,
    coordinates: [10.8023917, 106.7115358],
    isActive: true,
    phoneNumber: "123-456-7894",
    email: "location5@example.com",
    website: "http://location5.com",
  },
  {
    id: 6,
    coordinates: [10.8504588, 106.7600938],
    isActive: true,
    phoneNumber: "123-456-7895",
    email: "location6@example.com",
    website: "http://location6.com",
  },
  {
    id: 7,
    coordinates: [10.8339263, 106.6656701],
    isActive: true,
    phoneNumber: "123-456-7896",
    email: "location7@example.com",
    website: "http://location7.com",
  },
  {
    id: 8,
    coordinates: [10.7681203, 106.6740178],
    isActive: false,
    phoneNumber: "123-456-7897",
    email: "location8@example.com",
    website: "http://location8.com",
  },
];

export const getTranslatedLocations = (): Location[] => {
  if (!i18n.isInitialized) {
    return rawLocations;
  }

  return rawLocations.map((location) => ({
    ...location,
    name: i18n.t(`locations.clickbuy${location.id}.name`, {
      defaultValue: `Location ${location.id}`,
    }),
    address: i18n.t(`locations.clickbuy${location.id}.address`, {
      defaultValue: `Unknown Address`,
    }),
  }));
};

export default {
  rawLocations,
  getTranslatedLocations,
};
