import { Icon } from "leaflet";
import { Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import images from "../../assets/images";
import useLocationMap from "../../hooks/useLocationMap";
import { LocationAccordionList } from "./LocationAccordionList";
import { LocationMap } from "./LocationMap";

export const LocationMapContainer = () => {
  const { center, changeCenter, zoom, defaultZoom } = useLocationMap();

  const icon = new Icon({
    iconUrl: images.iconmap,
    iconSize: [30, 30],
  });

  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleAccordionChange = (index: number) => {
    setExpandedIndex(expandedIndex === index ? false : index);
  };

  const handleMarkerClick = (id: number, lat: number, lng: number, isActive:boolean) => {
    if(isActive){
      setExpandedIndex(id); 
    }
    changeCenter(lat, lng); 
    const element = document.getElementById(`accordion-${id}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center", 
      });
    }
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
            onOpen: handleMarkerClick,
            onClose: defaultZoom,
          }}
        />
      </Grid>

      <Grid size={{ md: 8, lg: 8 }}>
        <LocationMap center={center} icon={icon} zoom={zoom} onMarkerClick={handleMarkerClick} />
      </Grid>
    </Grid>
  );
};
