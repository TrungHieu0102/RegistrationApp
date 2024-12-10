import { Stack, Typography } from "@mui/material";
import { BackButton } from "../BackButton";
import { LanguageSwitcher } from "../LanguageSwitcher";
const handleBack = () => {
  console.log("Back button clicked!");
};
export const Navigate = () => {
  return (
    <Stack direction={"row"} display={"flex"} justifyContent={"space-between"}>
      <BackButton onClick={handleBack}></BackButton>
      <div>
        <Typography variant="h4" component="h1" fontWeight="bold">Appointment booking</Typography>
      </div>
      <LanguageSwitcher />
    </Stack>
  );
};
