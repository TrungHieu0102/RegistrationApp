import { Box, Typography } from "@mui/material";
import { Selected } from "./Selected";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import devices from "../Data/Devices";

export const PreviousSelections = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const deviceId = params.get("deviceId");
  const deviceName = deviceId
    ? devices.find((device) => device.id === parseInt(deviceId))?.name
    : null;
  const selections = [
    { name: "Brand", value: params.get("brand") },
    { name: "Device", value: deviceName },
    { name: "Service", value: params.get("serviceId") },
    { name: "Location", value: params.get("locationName") },
  ].filter((selection) => selection.value);

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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {selections.map((selection, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Selected
              name={`${selection.name}`}
              value={selection.value || ""}
            />
          </motion.div>
        ))}
        <motion.hr
          style={{
            border: "none",
            borderTop: "1px solid black",
            marginTop: "10px",
            width: "100%",
          }}
          variants={{
            hidden: { scaleY: 0, originY: 0 },
            visible: {
              scaleY: 1,
              originY: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        />
      </motion.div>
    </Box>
  );
};
