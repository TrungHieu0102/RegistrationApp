import { Stack, Typography } from "@mui/material";

import { BackButton } from "../Button/BackButton";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

type BackButtonProps = {
  route?: string;
};

export const Navigate = ({ route }: BackButtonProps) => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <BackButton route={route} />
      <div>
        <Typography variant="h5" component="h1" fontWeight="bold">
          {t("title")}
        </Typography>
      </div>
      <LanguageSwitcher />
    </Stack>
  );
};
