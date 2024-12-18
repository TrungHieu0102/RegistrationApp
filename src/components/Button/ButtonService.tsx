import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useQueryParams from "../../hooks/useQueryParams";

interface ButtonProps {
  name: string;
  duration: string;
  id: number;
}
export const ButtonService = ({ props }: { props: ButtonProps }) => {
  const { brand, deviceId } = useQueryParams();
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
