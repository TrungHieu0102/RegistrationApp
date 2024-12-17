import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
interface ButtonProps {
  name: string;
  duration: string;
  id: number;
}
export const ButtonService = ({ props }: { props: ButtonProps }) => {
  const params = new URLSearchParams(window.location.search);
  const brand = params.get("brand");
  const deviceId = params.get("deviceId");
  return (
    <Link
      to={`/?brand=${brand}&deviceId=${deviceId}&serviceId=${props.id}`}
      style={{ textDecoration: "none" }}
    >
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "#f4f4f4",
          borderRadius: "22px",
          boxSizing: "border-box",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px",
          cursor: "pointer",
          width: "250px",
          height: "70px",
          border: "none",
          transition: "transform 0.2s ease",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            color: "#000",
            fontWeight: 500,
            textAlign: "center",
            textTransform: "none",
          }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            color: "rgb(77, 77, 77)",
            fontWeight: 500,
            textAlign: "center",
            textTransform: "none",
          }}
        >
          {props.duration}
        </Typography>
      </Button>
    </Link>
  );
};
