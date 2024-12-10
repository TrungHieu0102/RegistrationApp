import { Box, Typography } from "@mui/material";
import { Selected } from "./Selected";
import { motion } from "framer-motion";

export const PreviousSelections = ({
  selections,
}: {
  selections: { name: string; value: string; count: number }[];
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hrVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      originY: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      marginTop={"10px"}
      marginLeft={"8px"}
    >
      <Typography variant="subtitle1" fontWeight={"bold"}>
        Previous selections
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {selections.map((selection, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Selected name={`${selection.name}`} value={selection.value} />
          </motion.div>
        ))}
        <motion.hr
          style={{
            border: "none",
            borderTop: "1px solid black",
            marginTop: "10px",
            width: "100%",
          }}
          variants={hrVariants}
        />
      </motion.div>
    </Box>
  );
};
