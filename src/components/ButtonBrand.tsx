import "../assets/css/ButtonBrand.css"
interface ButtonProps{
    image : string,
    name : string
}
export const ButtonBrand = ({props}:{props: ButtonProps}) => {
  return (
    <button className="button-brand">
      <div className="button-item">
      <img src={props.image} alt="apple"className="button-image" />
      <p className="brand-name">{props.name}</p>
      </div>
    </button>
  );
};
