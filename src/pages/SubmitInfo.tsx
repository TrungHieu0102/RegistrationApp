import { Box, Typography } from "@mui/material";
import { PreviousSelections } from "../components/PreviousSelections";
import CommonContainer from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import Appointments from "../components/DatePicker";
import { OpeningHours } from "../Data/OpeningHours";
export const SubmitInfo = () => {
  return (
    <CommonContainer>
      <Navigate />
      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Contact information
        </Typography>
        <Appointments OpeningHours={OpeningHours} />
      </Box>
    </CommonContainer>
  );
};
