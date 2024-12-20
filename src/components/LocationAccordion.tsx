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
  address?: string;
  id: number;
  coordinates: [number, number];
  onOpen: (id: number, lat: number, lng: number, isActive: boolean) => void;
  isActive: boolean;
  onClose: () => void;
}

export const LocationAccordion = ({
  props,
}: {
  props: LocationAccordionProps;
}) => {
  const handleAccordionChange = (
    event: React.SyntheticEvent,
    expanded: boolean
  ) => {
    const element = event.currentTarget;
  
    if (expanded) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      props.onOpen(
        props.index,
        props.coordinates[0],
        props.coordinates[1],
        props.isActive
      );
    } else {
      props.onClose();
    }
  
    if (props.isActive) {
      props.handleChange(props.index);
    }
  };

  const openingHours = {
    Monday: "09:00 - 17:00",
    Tuesday: "09:00 - 17:00",
    Wednesday: "09:00 - 17:00",
    Thursday: "09:00 - 17:00",
    Friday: "09:00 - 17:00",
  };

  return (
    <Accordion
      id={`accordion-${props.id}`} 
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
          <Typography  fontSize="14px" variant="h6">
            {props.address}
          </Typography>
          {props.isActive ? (
            <StoreStatus props={{ openingHours }} />
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
