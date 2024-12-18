import { Box, Typography } from "@mui/material";
import { Selected } from "./Selected";
import { useSelections } from "../hooks/useSelections";
export const PreviousSelections = () => {
  const selections = useSelections();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      marginTop={"10px"}
      marginLeft={"8px"}
    >
      <Box marginBottom={"10px"}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Previous selections
        </Typography>
      </Box>

      {selections.map((selection) => (
        <Selected name={`${selection.name}`} value={selection.value || ""} />
      ))}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid black",
          marginTop: "10px",
          width: "100%",
        }}
      />
    </Box>
  );
};
