import { Icon } from "leaflet";
import { Grid2 as Grid } from "@mui/material";
import images from "../assets/images";
import { LocationAccordionList } from "./LocationAccordionList";
import useLocationMap from "../hooks/useLocationMap";
import { LocationMap } from "./LocationMap";
import { useState } from "react";

export const LocationMapContainer = () => {
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
          display: "flex",
          flexDirection: "column",
          paddingBottom: "20px",
        }}
      >
         
        <LocationAccordionList
          props={{
            expandedIndex: expandedIndex,
            handleAccordionChange: handleAccordionChange,
            onOpen: changeCenter,
          }}
        />
      </Grid>

      <Grid size={{ md: 8, lg: 8 }}>
      
          <LocationMap
            props={{
              center: center,
              icon: icon,
            }}
          />
      </Grid>
    </Grid>
  );
};
