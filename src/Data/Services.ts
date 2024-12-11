export interface Services {
  id: number;
  name: string;
  price: number;
  duration: string;
  isActive: boolean;
}
const services: Services[] = [
  {
    id: 1,
    name: "Thay màn hình",
    price: 1200000,
    duration: "2 giờ",
    isActive: true,
  },
  { 
    id: 2, 
    name: "Thay pin", 
    price: 800000, 
    duration: "1 giờ", 
    isActive: true },
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
export default services;
