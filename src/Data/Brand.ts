import images from "../assets/images";
export interface Brand {
  id: number;
  name: string;
  image: string;
}
const brands: Brand[] = [
  {
    id: 1,
    name: "Apple",
    image: images.apple,
  },
  {
    id: 2,
    name: "Samsung",
    image: images.samsung,
  },
  {
    id: 3,
    name: "Xiaomi",
    image: images.xiaomi,
  },
];
export default brands;

const services = [
  {
    id: 1,
    name: "Thay màn hình",
    price: 1200000,
    duration: "2 giờ",
    isActive: true,
  },
  { id: 2, name: "Thay pin", price: 800000, duration: "1 giờ", isActive: true },
  {
    id: 3,
    name: "Sửa lỗi cảm ứng",
    price: 1500000,
    duration: "3 giờ",
    isActive: true,
  },
  {
    id: 4,
    name: "Vệ sinh thiết bị",
    price: 500000,
    duration: "1 giờ",
    isActive: true,
  },
  {
    id: 5,
    name: "Nâng cấp phần cứng",
    price: 3000000,
    duration: "5 giờ",
    isActive: true,
  },
  {
    id: 6,
    name: "Sửa lỗi phần mềm",
    price: 700000,
    duration: "1.5 giờ",
    isActive: true,
  },
  {
    id: 7,
    name: "Thay loa / mic",
    price: 900000,
    duration: "2 giờ",
    isActive: true,
  },
  {
    id: 8,
    name: "Thay camera",
    price: 1100000,
    duration: "2.5 giờ",
    isActive: true,
  },
  {
    id: 9,
    name: "Thay kính bảo vệ",
    price: 600000,
    duration: "1.5 giờ",
    isActive: true,
  },
];

// Danh sách các dịch vụ theo thiết bị
const deviceServices = [
  { deviceId: 3, serviceIds: [1, 2, 3, 6] }, // iPhone
  { deviceId: 4, serviceIds: [1, 2, 4, 6] }, // MacBook Pro
  { deviceId: 5, serviceIds: [1, 2, 9] }, // Galaxy S23
  { deviceId: 8, serviceIds: [4, 5, 7] }, // Mi Band
  { deviceId: 9, serviceIds: [4, 5, 7] }, // Redmi Note
  { deviceId: 10, serviceIds: [1, 3, 6, 9] }, // Mi Pad
];
