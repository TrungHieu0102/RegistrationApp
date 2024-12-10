import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type BackButtonProps = {
  label?: string;
  onClick: () => void;
};

export const BackButton = ({ label = "Back", onClick }: BackButtonProps) => {
  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIosNewIcon />}
      onClick={onClick}
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
