export interface Location {
  id: number;
  name: string;
  coordinates: [number, number];
  isActive: boolean;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Thế Giới Di Động - Hà Nội",
    coordinates: [21.0285, 105.8542],
    isActive: true,
  },
  {
    id: 2,
    name: "Thế Giới Di Động - Sài Gòn",
    coordinates: [10.8231, 106.6297],
    isActive: false,
  },
  {
    id: 3,
    name: "Thế Giới Di Động - Đà Nẵng",
    coordinates: [16.0471, 108.2069],
    isActive: true,
  },
  {
    id: 4,
    name: "Thế Giới Di Động - Hải Phòng",
    coordinates: [20.8444, 106.6889],
    isActive: false,
  },
  {
    id: 5,
    name: "Thế Giới Di Động - Cần Thơ",
    coordinates: [10.0211, 105.7469],
    isActive: true,
  },
  {
    id: 6,
    name: "Thế Giới Di Động - Hà Nội",
    coordinates: [21.0285, 105.8542],
    isActive: true,
  },
  {
    id: 7,
    name: "Thế Giới Di Động - Sài Gòn",
    coordinates: [10.8231, 106.6297],
    isActive: false,
  },
];

export default locations;
