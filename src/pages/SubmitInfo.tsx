import { Box, Typography } from "@mui/material";
import { PreviousSelections } from "../components/PreviousSelections";
import CommonContainer from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import { UserForm } from "../components/UserForm";
export const SubmitInfo = () => {
  return (
    <CommonContainer>
      <Navigate />
      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Contact information
        </Typography>
      </Box>
      <Box marginTop={"20px"}>
        <UserForm />
      </Box>
    </CommonContainer>
  );
};
