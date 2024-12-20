import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface SelectedProps {
  name: string;
  value: string;
  isLast: boolean; 
}

export const Selected = ({ name, value, isLast }: SelectedProps) => {
  return (
    <motion.div
    initial={isLast ? { opacity: 0.5, y: -20 } : { opacity: 1, y: 0 }} 
    animate={isLast ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}    
    transition={{
      ease: "easeOut", 
      duration: 0.5,    
    }}     
  >
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
    </motion.div>
  );
};
