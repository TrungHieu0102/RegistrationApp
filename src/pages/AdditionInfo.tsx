import { Box, Typography } from "@mui/material";
import { PreviousSelections } from "../components/PreviousSelections";
import { CommonContainer } from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import { useTranslation } from "react-i18next";
import { AccessoriesCheck } from "../components/AdditionInfo/AccessoriesCheck";

export const AdditionInfo = () => {
  const { t } = useTranslation();

  return (
    <CommonContainer>
      <Navigate />
      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontSize={"20px"} fontWeight={"bold"}>
          {t("Additional details")}
        </Typography>
      </Box>
      <Box>
        <AccessoriesCheck/>
      </Box>
    </CommonContainer>
  );
};
