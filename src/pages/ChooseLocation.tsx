import { Box, Typography } from "@mui/material";
import { PreviousSelections } from "../components/PreviousSelections";
import {CommonContainer} from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import { useTranslation } from "react-i18next";
import { LocationMapContainer } from "../components/ChooseLocation/LocationMapContainer";

export const ChooseLocation = () => {
  const { t } = useTranslation();
  return (
    <CommonContainer>
      <Navigate />
      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1"  fontSize={"20px"} fontWeight={"bold"}>
        {t('Choose a service location')}
        </Typography>
      </Box>
      <Box marginTop={"20px"}>
        <LocationMapContainer />
      </Box>
    </CommonContainer>
  );
};
