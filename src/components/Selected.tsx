import { Box, Stack, Typography } from "@mui/material";
interface SelectedProps {
  name: string;
  value: string;
}
export const Selected = ({ name, value }: SelectedProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "20px",
      }}
    >
      <Box sx={{ width: "100px" }}>
        <Typography
          fontSize={"15px"}
          fontWeight={"bold"}
          variant="body1"
          marginTop={"8px"}
        >
          {name}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body1" marginTop={"8px"}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
};
