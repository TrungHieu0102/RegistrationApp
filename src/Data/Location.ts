export interface Location {
  id: number;
  name: string;
  address?: string;
  coordinates: [number, number];
  isActive: boolean;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Clickbuy - Tân Bình",
    coordinates: [10.7996685, 106.6605822],
    address:
      "CLICKBUY Q.Tân Bình, 379 Đ. Hoàng Văn Thụ, Phường 2, Tân Bình, Hồ Chí Minh 76000, Việt Nam",
    isActive: true,
  },
  {
    id: 2,
    name: "Clickbuy - Quận 1",
    address:
      "Clickbuy Quận 1, 42 Đ. Trần Quang Khải, Phường Tân Định, Quận 1, Hồ Chí Minh",
    coordinates: [10.7926697, 106.6947428],
    isActive: true,
  },
  {
    id: 3,
    name: "Clickbuy - Quận 7",
    coordinates: [10.7390684, 106.7082243],
    address:
      "CLICKBUY Q7, 499 Nguyễn Thị Thập, Tân Phong, Quận 7, Hồ Chí Minh ",
    isActive: true,
  },
  {
    id: 4,
    name: "Clickbuy - Quận 10",
    coordinates: [10.770372, 106.6724456],
    address:
      "Clickbuy - 255 Đường 3/2, P.10, Quận 10, 255 Đ. 3 Tháng 2, Phường 12, Quận 10, Hồ Chí Minh ",
    isActive: true,
  },
  {
    id: 5,
    name: "Clickbuy - Quận Bình Thạnh",
    coordinates: [10.8023917, 106.7115358],
    address:
      "Clickbuy Q. Bình Thạnh, 290A Xô Viết Nghệ Tĩnh, Phường 25, Bình Thạnh, Hồ Chí Minh 70000, Việt Nam",
    isActive: true,
  },
  {
    id: 6,
    name: "Clickbuy - Thủ Đức",
    address: "CLICKBUY Q.Thủ Đức, 98 Đ. Võ Văn Ngân, P, Thủ Đức, Hồ Chí Minh ",
    coordinates: [10.8504588, 106.7600938],
    isActive: true,
  },
  {
    id: 7,
    name: "Clickbuy - Gò Vấp",
    coordinates: [10.8339263, 106.6656701],
    address:
      "Clickbuy Gò Vấp, 466 Đ. Quang Trung, Phường 10, Gò Vấp, Hồ Chí Minh 76000, Việt Nam",
    isActive: true,
  },
  {
    id: 8,
    name: "Clickbuy - Lê Hồng Phong",
    address:
      "Clickbuy Lê Hồng Phong, 535 Đ. Lê Hồng Phong, Phường 10, Quận 10, TP. Hồ Chí Minh ",
    coordinates: [10.7681203, 106.6740178],
    isActive: false,
  },
];

export default locations;
