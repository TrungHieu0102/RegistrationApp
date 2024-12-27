import { Box, Typography } from "@mui/material";
import { CommonContainer } from "../components/UI/CommonContainer";
import { UserForm } from "../components/SubmitInfo/UserForm";
import { useTranslation } from "react-i18next";
export const SubmitInfo = () => {
  const { t } = useTranslation();
  return (
    <CommonContainer>
      
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontSize={"20px"} fontWeight={"bold"}>
          {t("Contact information")}
        </Typography>
      </Box>
      <Box>
        <UserForm />
      </Box>
    </CommonContainer>
  );
};
