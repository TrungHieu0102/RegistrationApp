import { CommonContainer } from "../components/UI/CommonContainer";
import { Box, Typography } from "@mui/material";
import { Appointments } from "../components/ChooseTime/Appointments";
import { OpeningHours } from "../Data/OpeningHours";
import { useTranslation } from "react-i18next";
export const ChooseTime = () => {
  const { t } = useTranslation();

  return (
    <CommonContainer>
   
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontSize={"20px"} fontWeight={"bold"}>
          {t("Select appointment")}
        </Typography>
      </Box>
      <Box marginTop={"20px"}>
        <Appointments OpeningHours={OpeningHours} />
      </Box>
    </CommonContainer>
  );
};
