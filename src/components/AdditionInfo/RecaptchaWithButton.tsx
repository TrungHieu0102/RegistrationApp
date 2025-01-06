import { Button, Box } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaWithButtonProps {
  siteKey: string;
  handleRecaptchaChange: (token: string | null) => void;
  isButtonDisabled: boolean;
  handleSubmit: () => void;
}

const RecaptchaWithButton  = ({
  siteKey,
  handleRecaptchaChange,
  isButtonDisabled,
  handleSubmit,
}:RecaptchaWithButtonProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: "20px" }}
    >
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleRecaptchaChange}
        size="normal"
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={isButtonDisabled}
        sx={{
          marginTop: "30px",
          padding: "8px 80px",
          fontSize: "14px",
          textTransform: "none",
          borderRadius: "30px",
          color: isButtonDisabled ? "#fff" : "#fff",
          "&:hover": {
            backgroundColor: isButtonDisabled ? "#b0bec5" : "#388e3c",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default RecaptchaWithButton;
