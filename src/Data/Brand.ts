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
