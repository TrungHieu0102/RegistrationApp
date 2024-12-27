import { t } from "i18next";
import { Button } from "@mui/material";

export const ButtonSubmitInfo = () => {
  return (
    <Button
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
