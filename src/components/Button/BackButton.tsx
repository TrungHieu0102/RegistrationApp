import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

type BackButtonProps = {
  label?: string;
  onClick?: () => void;
  route?: string; 
};

export const BackButton = ({ label = "Back", route }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    } else {
      navigate(-1); 
    }
  };

  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIosNewIcon />}
      onClick={handleClick}
      sx={{
        color: "#0C8CE9",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "rgba(0, 122, 255, 0.1)",
        },
      }}
    >
      {label}
    </Button>
  );
};
