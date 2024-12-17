import { Box, Typography } from "@mui/material";
import { PreviousSelections } from "../components/PreviousSelections";
import CommonContainer from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import { LocationMap } from "../components/LocationMap";

export const ChooseLocation = () => {
  return (
    <CommonContainer>
      <Navigate />
      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Choose a service location
        </Typography>
      </Box>
      <Box marginTop={"20px"}>
        <LocationMap />
      </Box>
    </CommonContainer>
  );
};
