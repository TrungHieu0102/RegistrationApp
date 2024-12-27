import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import RecaptchaWithButton from "./RecaptchaWithButton";
import { useLocation, useNavigate } from "react-router-dom"; 
import { useStoreData } from "../../hooks/useStoreData";

const SITE_KEY = "6LcwUKYqAAAAAC1Q6hGdFwMcGs-xFRyMItEyRtjw";

export const AccessoriesCheck = () => {
  const { t } = useTranslation();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [accessories, setAccessories] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setIsButtonDisabled(!token);
  };
  const storeData = useStoreData(queryParams);
  const handleSubmit = () => {
    if (recaptchaToken) {
      sessionStorage.setItem("accessoriesAppointment", accessories);
      storeData();
      navigate("/confirm");
    }
  };
  return (
    <Box display={"flex"} flexDirection={"column"} sx={{ padding: "20px" }}>
      <Box>
        <Typography variant="subtitle1" fontSize="15px" fontWeight="bold">
          {t("accessories-included")}
        </Typography>
        <TextField
          label={t("Accessories")}
          fullWidth
          multiline
          rows={4}
          value={accessories}
          variant="outlined"
          onChange={(e) => setAccessories(e.target.value)}
          sx={{ marginTop: "10px" }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "20px" }}
      >
        <RecaptchaWithButton
          siteKey={SITE_KEY}
          handleRecaptchaChange={handleRecaptchaChange}
          isButtonDisabled={isButtonDisabled}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
};
