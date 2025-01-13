import { Box, Typography } from "@mui/material";
export const AdditionalDetail = () => {
  return (
    <Box sx={{ paddingX: "20px", paddingY: "5px" }}>
      <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "18px" }}>
        Additional Details
      </Typography>
      <Box sx={{ flexGrow: 1, margin: "20px" }}>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            What accessories are included?
          </Typography>
          <Typography variant="body1">Something</Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Do you need a screen protector?
          </Typography>
          <Typography variant="body1">Yes</Typography>
        </Box>
      </Box>
    </Box>
  );
};
