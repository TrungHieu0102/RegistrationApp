import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StoreStatus from "./StoreStatus";

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
  const handleAccordionChange = (
    _: React.SyntheticEvent,
    expanded: boolean
  ) => {
    if (expanded) {
      onOpen(coordinates[0], coordinates[1]);
    }
    handleChange(index);
  };
  const openingHours = {
    Monday: "12:00 - 14:00",
    Tuesday: "09:00 - 17:00",
    Wednesday: "09:00 - 17:00",
    Thursday: "09:00 - 17:00",
    Friday: "09:00 - 17:00",
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
          <Typography fontWeight="bold" fontSize="18px" variant="h6">
            {name}
          </Typography>
          <StoreStatus openHour={9} closeHour={17} />
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
        <Typography variant="body2" fontSize="16px" fontWeight="bold"> Opening Hours</Typography>
          {Object.entries(openingHours).map(([day, hours]) => (
            <Box
              key={day}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="4px"
              paddingLeft="10px"
              paddingRight="10px"
            >
             
              <Typography variant="body2" >
                {day}:
              </Typography>
              <Typography variant="body2">{hours}</Typography>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default LocationAccordion;
