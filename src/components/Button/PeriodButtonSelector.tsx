import React from "react";
import { Box, Button } from "@mui/material";

interface PeriodSelectorProps {
  selectedPeriod: "morning" | "afternoon";
  setSelectedPeriod: (period: "morning" | "afternoon") => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ selectedPeriod, setSelectedPeriod }) => {
  return (
    <Box mb={3} display="flex" justifyContent="center">
      <Box
        sx={{
          width: "70%",
          height: "48px",
          display: "flex",
          borderRadius: "30px",
          border: "0.25px solid rgba(0, 0, 0, 0.5)",
          backgroundColor: "#fff",
          padding: "2px",
          gap: "15px",
        }}
      >
        <Button
          onClick={() => setSelectedPeriod("morning")}
          sx={{
            flex: 1,
            textTransform: "none",
            padding: "10px",
            borderRadius: "30px",
            backgroundColor: selectedPeriod === "morning" ? "#2196f3" : "#fff",
            color: selectedPeriod === "morning" ? "#fff" : "rgb(48,48,48)",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: selectedPeriod === "morning" ? "#1976d2" : "#f0f0f0",
            },
          }}
        >
          Morning
        </Button>
        <Button
          onClick={() => setSelectedPeriod("afternoon")}
          sx={{
            flex: 1,
            textTransform: "none",
            padding: "10px",
            borderRadius: "30px",
            backgroundColor: selectedPeriod === "afternoon" ? "#2196f3" : "#fff",
            color: selectedPeriod === "afternoon" ? "#fff" : "rgb(48,48,48)",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: selectedPeriod === "afternoon" ? "#1976d2" : "#f0f0f0",
            },
          }}
        >
          Afternoon
        </Button>
      </Box>
    </Box>
  );
};

export default PeriodSelector;
