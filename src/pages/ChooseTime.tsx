import { CommonContainer } from "../components/UI/CommonContainer";
import { PreviousSelections } from "../components/PreviousSelections";
import { Navigate } from "../components/UI/Navigate";
import { Box, Typography } from "@mui/material";
import { Appointments } from "../components/Appointments";
import { OpeningHours } from "../Data/OpeningHours";
export const ChooseTime = () => {
  return (
    <CommonContainer>
      <Navigate />
      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontSize={"20px"} fontWeight={"bold"}>
          Select appointment
        </Typography>
      </Box>
      <Box marginTop={"20px"}>
        <Appointments OpeningHours={OpeningHours} />
      </Box>
    </CommonContainer>
  );
};
