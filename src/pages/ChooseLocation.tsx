import { Box, Typography } from "@mui/material";
import {CommonContainer} from "../components/UI/CommonContainer";
import { useTranslation } from "react-i18next";
import { LocationMapContainer } from "../components/ChooseLocation/LocationMapContainer";

export const ChooseLocation = () => {
  const { t } = useTranslation();
  return (
    <CommonContainer>   
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
