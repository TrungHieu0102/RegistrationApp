import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
export const GoodToKnow = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ paddingX: "20px", paddingY: "5px" }}>
      <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "18px" }}>
        {t("confirm.good-to-know")}
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
            {t("confirm.find-my")}
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            nisi sit voluptates rerum quidem molestiae blanditiis minus nesciunt
            suscipit explicabo, debitis expedita eius sunt excepturi ab
            perspiciatis aliquid porro eaque?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
