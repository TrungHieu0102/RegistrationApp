import { ButtonBrand } from "./ButtonBrand";
import "../assets/css/ChooseBrand.css";
import images from "../assets/images";
import { LanguageSwitcher } from "./LanguageSwitcher";
const brandList = [
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
const brandButton = brandList.map((brand) => (
  <ButtonBrand
    key={brand.id}
    props={{
      name: brand.name,
      image: brand.image,
    }}
  />
));

export const ChooseBrand = () => {
  return (
    <div className="container">
      <div className="chose-brand-title">
        <div>
          <h1>Appointment booking</h1>
          <h4 style={{ marginTop: "20px" }}>Choose a brand</h4>
        </div>
        <div className="change-language-button">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="choose-brand-button">{brandButton}</div>
      
    </div>
  );
};
