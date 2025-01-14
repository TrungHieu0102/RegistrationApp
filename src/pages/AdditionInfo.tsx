import { Box, Typography } from "@mui/material";
import { CommonContainer } from "../components/UI/CommonContainer";
import { useTranslation } from "react-i18next";
import { AccessoriesCheck } from "../components/AdditionInfo/AccessoriesCheck";

export const AdditionInfo = () => {
  const { t } = useTranslation();

  return (
    <CommonContainer>    
      <Box marginLeft={"10px"} marginTop={"20px"}>
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
