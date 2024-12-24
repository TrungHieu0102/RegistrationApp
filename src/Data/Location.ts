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
    name: "Clickbuy - Tan Binh District",
    coordinates: [10.7996685, 106.6605822],
    address:
      "CLICKBUY Tan Binh District, 379 Hoang Van Thu Street, Ward 2, Tan Binh, Ho Chi Minh City",
    isActive: true,
  },
  {
    id: 2,
    name: "Clickbuy - District 1",
    address:
      "Clickbuy District 1, 42 Tran Quang Khai Street, Tan Dinh Ward, District 1, Ho Chi Minh City.",
    coordinates: [10.7926697, 106.6947428],
    isActive: true,
  },
  {
    id: 3,
    name: "Clickbuy - District 7",
    coordinates: [10.7390684, 106.7082243],
    address:
      "CLICKBUY District 7, 499 Nguyen Thi Thap Street, Tan Phong Ward, District 7, Ho Chi Minh City.",
    isActive: true,
  },
  {
    id: 4,
    name: "Clickbuy - District 10",
    coordinates: [10.770372, 106.6724456],
    address:
      "Clickbuy - 255 3/2 Street, Ward 10, District 10, 255 3 Tháng 2 Street, Ward 12, District 10, Ho Chi Minh City.",
    isActive: true,
  },
  {
    id: 5,
    name: "Clickbuy - Binh Thanh District",
    coordinates: [10.8023917, 106.7115358],
    address:
      "Clickbuy Binh Thanh District, 290A Xo Viet Nghe Tinh Street, Ward 25, Binh Thanh, Ho Chi Minh City ",
    isActive: true,
  },
  {
    id: 6,
    name: "Clickbuy - Thu Duc City",
    address: "CLICKBUY Thu Duc District, 98 Vo Van Gan Street, Thu Duc ",
    coordinates: [10.8504588, 106.7600938],
    isActive: true,
  },
  {
    id: 7,
    name: "Clickbuy - Go Vap District",
    coordinates: [10.8339263, 106.6656701],
    address:
      "Clickbuy Go Vap, 466 Quang Trung Street, Ward 10, Go Vap, Ho Chi Minh City.",
    isActive: true,
  },
  {
    id: 8,
    name: "Clickbuy - Le Hong Phong",
    address:
      "Clickbuy Le Hong Phong, 535 Le Hong Phong Street, Ward 10, District 10, Ho Chi Minh City",
    coordinates: [10.7681203, 106.6740178],
    isActive: false,
  },
];

export default locations;
