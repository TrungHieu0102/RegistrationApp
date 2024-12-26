import useQueryParams from "../../hooks/useQueryParams";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
interface ButtonProps {
  email: string;
  phone: string;
  onClick: () => void;
}
export const ButtonSubmitInfo = ({ props }: { props: ButtonProps }) => {
  const navigate = useNavigate();

  const { brand, deviceId, serviceId, locationId, time, date } =
    useQueryParams();
  const formattedTime = time ? time.replace(":", "%3A") : "";
  const formattedDate = date || "";
  const formatEmail = props.email ? props.email.replace("@", "%40") : "";
  const url = `/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${locationId}&time=${formattedTime}&date=${formattedDate}&email=${formatEmail}&phone=${props.phone}`;
  const handleClick = () => {
    props.onClick();
    navigate(url);
  };
  return (
    <Button
      onClick={handleClick}
      type="submit"
      variant="contained"
      sx={{
        padding: "8px 80px",
        fontSize: "14px",
        textTransform: "none",
        color: "white",
        borderRadius: "30px",
        backgroundColor: "rgb(12, 140, 233)",
      }}
    >
      {t("Continue")}
    </Button>
  );
};
