import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface LocationAccordionProps {
  name: string;
  address: string;
  openTime: string;
  closeTime: string;
  coordinates: [number, number];
  onOpen: (lat: number, lng: number) => void;
}

const LocationAccordion: React.FC<LocationAccordionProps> = ({
  name,
  address,
  openTime,
  closeTime,
  coordinates,
  onOpen,
}) => {
  const handleAccordionChange = (
    _: React.SyntheticEvent,
    expanded: boolean
  ) => {
    if (expanded) {
      onOpen(coordinates[0], coordinates[1]); // Chỉ gọi khi accordion mở
    }
  };

  return (
    <Accordion
      onChange={handleAccordionChange}
      disableGutters // Tắt khoảng trống mặc định
      elevation={0} // Tắt bóng (box shadow)
      square // Loại bỏ bo tròn
      sx={{
        border: "none", // Xóa toàn bộ border
        "&::before": { display: "none" }, // Xóa line trước Accordion
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          borderBottom: "none", // Loại bỏ border-bottom của Summary
        }}
      >
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{address}</Typography>
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
        <Typography variant="body2">Open: {openTime}</Typography>
        <Typography variant="body2">Close: {closeTime}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default LocationAccordion;
