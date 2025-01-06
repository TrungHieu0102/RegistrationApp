import { Stack, Typography } from "@mui/material";

import { BackButton } from "../BackButton";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
export const Navigate = () => {
  const { t } = useTranslation();
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <BackButton  />
      <div>
        <Typography
          sx={{
            fontSize: {
              xs: "16px",
              sm: "18px",
              md: "20px",
              lg: "24px",
            },
          }}
          variant="h5"
          component="h1"
          fontWeight="bold"
        >
          {t("title")}
        </Typography>
      </div>
      <LanguageSwitcher />
    </Stack>
  );
};
