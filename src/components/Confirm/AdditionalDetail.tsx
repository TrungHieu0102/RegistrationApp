import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
export const AdditionalDetail = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ paddingX: "20px", paddingY: "5px" }}>
      <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "18px" }}>
        {t("confirm.additional-details")}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          marginY: "15px",
          marginX: "10px",
          paddingRight: "20px",
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {t("confirm.accessories-included")}
          </Typography>
          <Typography variant="body1">
            {t("confirm.something")}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {t("confirm.screen-protector")}
          </Typography>
          <Typography variant="body1"> {t("confirm.yes")}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
