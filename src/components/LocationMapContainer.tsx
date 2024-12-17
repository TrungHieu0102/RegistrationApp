// LocationMap.tsx
import React, { useState } from "react";
import { Icon } from "leaflet";
import { Grid2 as Grid } from "@mui/material";
import images from "../assets/images";
import LocationAccordionList from "./LocationAccordionList";
import useLocationMap from "../hooks/useLocationMap";
import { LocationMap } from "./LocationMap"; // Import component bản đồ

export const LocationMapContainer: React.FC = () => {
  const { center, changeCenter } = useLocationMap();
  const icon = new Icon({
    iconUrl: images.iconmap,
    iconSize: [38, 38],
  });
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleAccordionChange = (index: number) => {
    setExpandedIndex(expandedIndex === index ? false : index);
  };

  return (
    <Grid container spacing={2}>
      <Grid
        size={{ xs: 12, md: 4, lg: 4 }}
        sx={{
          maxHeight: "600px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "20px",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#E8E8E8",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        }}
      >
        <LocationAccordionList
          expandedIndex={expandedIndex}
          handleAccordionChange={handleAccordionChange}
          onOpen={changeCenter}
        />
      </Grid>

      <Grid size={{ md: 8, lg: 8 }}>
        <LocationMap center={center} icon={icon} />
      </Grid>
    </Grid>
  );
};
