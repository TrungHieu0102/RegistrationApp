import { Icon } from "leaflet";
import { Grid2 as Grid } from "@mui/material";
import { useState, useEffect } from "react";
import images from "../../assets/images";
import useLocationMap from "../../hooks/useLocationMap";
import { LocationAccordionList } from "./LocationAccordionList";
import { LocationMap } from "./LocationMap";
import { useLocations } from "../../hooks/useLocations";

export const LocationMapContainer = () => {
  const { center, changeCenter, zoom, defaultZoom } = useLocationMap();
  const locations = useLocations();

  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    let timeout: number;
    if (query) {
      timeout = setTimeout(() => {
        setDebouncedQuery(query);
      }, 300);
    } else {
      setDebouncedQuery(query);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  const filteredLocations = locations.filter((location) =>
    location.name?.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleAccordionChange = (index: number) => {
    setExpandedIndex(expandedIndex === index ? false : index);
  };

  const handleMarkerClick = (
    id: number,
    lat: number,
    lng: number,
    isActive: boolean
  ) => {
    if (isActive) {
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

  const icon = new Icon({
    iconUrl: images.iconmap,
    iconSize: [30, 30],
  });

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
            locations: filteredLocations,
            setQuery,
            query,
          }}
        />
      </Grid>

      <Grid size={{ md: 8, lg: 8 }}>
        <LocationMap
          center={center}
          icon={icon}
          zoom={zoom}
          filteredLocations={filteredLocations}
          onMarkerClick={handleMarkerClick}
        />
      </Grid>
    </Grid>
  );
};
