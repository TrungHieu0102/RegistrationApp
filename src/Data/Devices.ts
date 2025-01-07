import images from "../assets/images";
export interface Devices {
  id: number;
  brandId: number;
  name: string;
  image: string;
  isActive: boolean;
}
const devices: Devices[] = [
  { id: 1, brandId: 1, name: "AirPods", image: images.airpods, isActive: true },
  {
    id: 2,
    brandId: 1,
    name: "Apple TV",
    image: images.appletv,
    isActive: true,
  },
  { id: 3, brandId: 1, name: "iPhone", image: images.iphone, isActive: true },
  {
    id: 4,
    brandId: 1,
    name: "MacBook Pro",
    image: images.macbook,
    isActive: true,
  },
  {
    id: 5,
    brandId: 2,
    name: "Galaxy S23",
    image: images.samsungone,
    isActive: true,
  },
  {
    id: 6,
    brandId: 2,
    name: "Galaxy Note 20",
    image: images.samsungtwo,
    isActive: true,
  },
  {
    id: 7,
    brandId: 2,
    name: "Galaxy Tab",
    image: images.tabletSamsung,
    isActive: true,
  },
  { id: 8, brandId: 3, name: "Mi Band", image: images.miband, isActive: true },
  {
    id: 9,
    brandId: 3,
    name: "Redmi Note",
    image: images.redmi,
    isActive: true,
  },
  { id: 10, brandId: 3, name: "Mi Pad", image: images.mipad, isActive: true },
];

export default devices;
