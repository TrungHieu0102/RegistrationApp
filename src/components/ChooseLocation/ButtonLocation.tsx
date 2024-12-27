import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useQueryParams from "../../hooks/useQueryParams";
import { t } from "i18next";
interface ButtonProps {
  locationId: number;
}
export const ButtonLocation = ({ props }: { props: ButtonProps }) => {
  const { brand, deviceId, serviceId } = useQueryParams();
  return (
    <Link
      to={`/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${props.locationId}`}
      style={{ textDecoration: "none" }}
    >
      <Button
        variant="outlined"
        fullWidth
        sx={{
          backgroundColor: "primary.main",
          borderRadius: "22px",
          boxSizing: "border-box",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px",
          cursor: "pointer",
          width: "100%",
          height: "40px",
          border: "none",
          transition: "transform 0.2s ease",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            color: "#ffffff",
            fontWeight: 600,
            textAlign: "center",
            textTransform: "none",
          }}
        >
          {t('Select')} 
        </Typography>
      </Button>
    </Link>
  );
};
