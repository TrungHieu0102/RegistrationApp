import { Box, Typography } from "@mui/material";
import { Selected } from "./Selected";
import { useSelections } from "../hooks/useSelections";
import { motion } from "framer-motion";

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
        <Typography variant="subtitle1" fontSize={"20px"} fontWeight={"bold"}>
          Previous selections
        </Typography>
      </Box>

      {selections.map((selection, index) => (
        <Selected
        id={selection.id}
          key={selection.name}
          name={selection.name}
          value={selection.value || ""}
          isLast={index === selections.length - 1}
        />
      ))}

      <motion.div
        initial={{ opacity: 0.5, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut", 
          duration: 0.5,    
        }} 
      >
        <hr
          style={{
            border: "none",
            borderTop: "1px solid black",
            marginTop: "10px",
            width: "100%",
          }}
        />
      </motion.div>
    </Box>
  );
};
