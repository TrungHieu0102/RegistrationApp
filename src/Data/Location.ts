export interface Location {
  id: number;
  name: string;
  coordinates: [number, number];
  isActive: boolean;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Clickbuy - Tân Bình 1",
    coordinates: [10.8015, 106.6358], // Quận Tân Bình
    isActive: true,
  },
  {
    id: 2,
    name: "Clickbuy - Quận 1",
    coordinates: [10.7769, 106.7009], // Quận 1
    isActive: true,
  },
  {
    id: 3,
    name: "Clickbuy - Quận 3",
    coordinates: [10.7760, 106.6924], // Quận 3
    isActive: false,
  },
  {
    id: 4,
    name: "Clickbuy - Quận 2",
    coordinates: [10.7849, 106.6935], // Quận 2 (nay là Thành phố Thủ Đức)
    isActive: true,
  },
  {
    id: 5,
    name: "Clickbuy - Tân Bình 2",
    coordinates: [10.8019, 106.6235], // Quận Tân Bình
    isActive: false,
  },
  {
    id: 6,
    name: "Clickbuy - Quận 1",
    coordinates: [10.7765, 106.6942], // Quận 1
    isActive: true,
  },
  {
    id: 7,
    name: "Clickbuy - Quận 3",
    coordinates: [10.7762, 106.6903], // Quận 3
    isActive: true,
  },
  {
    id: 8,
    name: "Clickbuy - Quận 2",
    coordinates: [10.7768, 106.6950], // Quận 2
    isActive: false,
  },
  {
    id: 9,
    name: "Clickbuy - Quận 1",
    coordinates: [10.7731, 106.6956], // Quận 1
    isActive: true,
  },
  {
    id: 10,
    name: "Clickbuy - Quận 3",
    coordinates: [10.7804, 106.6961], // Quận 3
    isActive: false,
  },
  {
    id: 11,
    name: "Clickbuy - Quận 4",
    coordinates: [10.7615, 106.6927], // Quận 4
    isActive: true,
  },
  {
    id: 12,
    name: "Clickbuy - Quận 5",
    coordinates: [10.7622, 106.6762], // Quận 5
    isActive: true,
  },
  {
    id: 13,
    name: "Clickbuy - Quận 7",
    coordinates: [10.7465, 106.7033], // Quận 7
    isActive: true,
  },
  {
    id: 14,
    name: "Clickbuy - Quận 10",
    coordinates: [10.7625, 106.6818], // Quận 10
    isActive: false,
  },
  {
    id: 15,
    name: "Clickbuy - Quận Bình Thạnh",
    coordinates: [10.7861, 106.7051], // Quận Bình Thạnh
    isActive: true,
  },
  {
    id: 16,
    name: "Clickbuy - Quận 11",
    coordinates: [10.7567, 106.6153], // Quận 11
    isActive: true,
  },
  {
    id: 17,
    name: "Clickbuy - Quận 12",
    coordinates: [10.8524, 106.6287], // Quận 12
    isActive: false,
  },
  {
    id: 18,
    name: "Clickbuy - Tân Phú",
    coordinates: [10.7795, 106.6090], // Quận Tân Phú
    isActive: true,
  },
  {
    id: 19,
    name: "Clickbuy - Thủ Đức",
    coordinates: [10.8320, 106.7935], // Thành phố Thủ Đức
    isActive: false,
  },
  {
    id: 20,
    name: "Clickbuy - Gò Vấp",
    coordinates: [10.8230, 106.6903], // Quận Gò Vấp
    isActive: true,
  },
];

export default locations;
