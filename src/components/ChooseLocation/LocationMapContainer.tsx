import { Icon } from "leaflet";
import { Grid2 as Grid, useMediaQuery, useTheme } from "@mui/material";
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
  const [isFullWidth, setIsFullWidth] = useState<boolean>(false);
  const [prevIsFullWidth, setPrevIsFullWidth] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [idLocation, setIdLocation] = useState<number >(0);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>("");
  const [mapHeight, setMapHeight] = useState<string>("100vh");
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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

  useEffect(() => {
    if (isMdUp) {
      setPrevIsFullWidth(isFullWidth);
      setIsFullWidth(false);
    } else {
      setIsFullWidth(prevIsFullWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMdUp]);

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
    isActive: boolean,
    address: string | undefined
  ) => {
    if (isActive) {
      setExpandedIndex(id);
    }
    if (!isMdUp) {
      setIsFullWidth(true);
      setSelectedLocation(address);
      setIsActive(isActive);
      setIdLocation(id);
      setMapHeight(isActive ? "70vh" : "100vh");
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
  console.log("LocationMapContainer", isActive);

  const handleLocationClick = () => {
    setIsFullWidth(true);
  };

  const icon = new Icon({
    iconUrl: images.iconmap,
    iconSize: [30, 30],
  });
  return (
    <Grid container spacing={2}>
      {(!isFullWidth || isMdUp) && (
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
            expandedIndex={expandedIndex}
            handleAccordionChange={handleAccordionChange}
            onOpen={handleMarkerClick}
            onClose={defaultZoom}
            locations={filteredLocations}
            setQuery={setQuery}
            query={query}
            onLocationClick={handleLocationClick}
          />
        </Grid>
      )}

      {(isFullWidth || isMdUp) && (
        <Grid
          size={{
            xs: isFullWidth ? 12 : 0,
            sm: isFullWidth ? 12 : 0,
            md: isFullWidth ? 8 : 8,
            lg: isFullWidth ? 8 : 8,
          }}
        >
          <LocationMap
            center={center}
            icon={icon}
            zoom={zoom}
            filteredLocations={filteredLocations}
            onMarkerClick={handleMarkerClick}
            isFullWidth={isFullWidth}
            setIsFullWidth={setIsFullWidth}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            setIsActive={setIsActive}
            isActive={isActive}
            idLocation={idLocation}
            setIdLocation={setIdLocation}
            mapHeight={mapHeight}
            setMapHeight={setMapHeight}
          />
        </Grid>
      )}
    </Grid>
  );
};
