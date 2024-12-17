import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface LocationAccordionProps {
  index: number;
  expandedIndex: number | false;
  handleChange: (index: number) => void;
  name: string;
  coordinates: [number, number];
  onOpen: (lat: number, lng: number) => void;
}

const LocationAccordion: React.FC<LocationAccordionProps> = ({
  index,
  expandedIndex,
  handleChange,
  name,
  coordinates,
  onOpen,
}) => {
  const handleAccordionChange = (_: React.SyntheticEvent, expanded: boolean) => {
    if (expanded) {
      onOpen(coordinates[0], coordinates[1]); 
    }
    handleChange(index); 
  };

  return (
    <Accordion
      expanded={expandedIndex === index}
      onChange={handleAccordionChange} 
      disableGutters
      elevation={0}
      square
      sx={{
        border: "none",
        "&::before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          borderBottom: "none",
        }}
      >
        <Box>
          <Typography fontWeight="bold" fontSize="16px" variant="h6">
            {name}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          maxHeight: "200px",
          overflowY: "auto",
          padding: "8px",
          border: "none",
        }}
      >
        <Box marginLeft="10px">
          <Typography variant="body2">OPEN</Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default LocationAccordion;
