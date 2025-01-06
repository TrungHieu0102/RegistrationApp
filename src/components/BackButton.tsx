import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";


export const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => { 
      navigate(-1); 
  };

  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIosNewIcon />}
      onClick={handleClick}
      sx={{
        color: "primary.main",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "rgba(0, 122, 255, 0.1)",
        },
      }}
    >
      {t("Back")}
    </Button>
  );
};
