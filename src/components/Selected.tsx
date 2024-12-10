import { Stack, Typography } from "@mui/material";
interface SelectedProps {
  name: string;
  value: string;
}
export const Selected = ({ name, value }: SelectedProps) => {
  return (
    <Stack
      direction={"row"}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "20px",
        marginTop: "20px",
        gap: "80px",
        paddingBottom: "15px",
      }}
    >
      <Typography fontWeight={"bold"} variant="body1">
        {name}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
};
