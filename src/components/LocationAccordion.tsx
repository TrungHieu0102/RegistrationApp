import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StoreStatus } from "./StoreStatus";
import { ButtonLocation } from "./Button/ButtonLocation";

interface LocationAccordionProps {
  index: number;
  expandedIndex: number | false;
  handleChange: (index: number) => void;
  name: string;
  id: number;
  coordinates: [number, number];
  onOpen: (lat: number, lng: number) => void;
  isActive: boolean;
  onClose :()=>void
}

export const LocationAccordion = ({
  props,
}: {
  props: LocationAccordionProps;
}) => {
  const handleAccordionChange = (
    _: React.SyntheticEvent,
    expanded: boolean
  ) => {
    if (expanded && props.isActive) {
      props.onOpen(props.coordinates[0], props.coordinates[1]);
    }
    if (!expanded) {
      props.onClose(); 
    }
    if (props.isActive) {
      props.handleChange(props.index);
    }
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
      expanded={props.expandedIndex === props.index}
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
            {props.name}
          </Typography>
          {props.isActive ? (
            <StoreStatus props={{ openHour: 9, closeHour: 22 }} />
          ) : (
            <Typography
              color="#a9a2a2"
              fontWeight="bold"
              fontSize="16px"
              variant="h6"
            >
              Not available
            </Typography>
          )}
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
          <Typography variant="body2" fontSize="16px" fontWeight="bold">
            Opening Hours
          </Typography>
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
              <Typography variant="body2">{day}:</Typography>
              <Typography variant="body2">{hours}</Typography>
            </Box>
          ))}
          <ButtonLocation props={{ locationId: props.id }} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
