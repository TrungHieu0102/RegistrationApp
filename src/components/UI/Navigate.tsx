import { Stack, Typography } from "@mui/material";

import { BackButton } from "../BackButton";
import { LanguageSwitcher } from "../LanguageSwitcher";

type BackButtonProps = {
  route?: string;
};

export const Navigate = ({ route }: BackButtonProps) => {
 
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
          Appointment booking
        </Typography>
      </div>
      <LanguageSwitcher />
    </Stack>
  );
};
