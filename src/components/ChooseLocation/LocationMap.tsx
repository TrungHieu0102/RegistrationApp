import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Location } from "../../Data/Location";

const UpdateMapCenter = ({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.flyTo(center, 11, { animate: true, duration: 1.5 });
      setTimeout(() => {
        map.flyTo(center, zoom, {
          animate: true,
          duration: 1,
          easeLinearity: 0.25,
        });
      }, 100);
    }
  }, [center, zoom, map]);

  return null;
};

interface LocationMapContainerProps {
  center: [number, number];
  zoom: number;
  icon: Icon;
  filteredLocations: Location[];
  onMarkerClick: (
    id: number,
    lat: number,
    lng: number,
    isActive: boolean
  ) => void;
  isFullWidth: boolean;
  setIsFullWidth: (value: boolean) => void;
}

export const LocationMap = ({
  center,
  icon,
  zoom,
  filteredLocations,
  onMarkerClick,
  isFullWidth,
  setIsFullWidth,
}: LocationMapContainerProps) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setIsFullWidth(!isMdUp);
  }, [isMdUp, setIsFullWidth]);


  const handleMarkerClick = (
    id: number,
    lat: number,
    lng: number,
    isActive: boolean,
    location: Location
  ) => {
    setSelectedLocation(location); 
    onMarkerClick(id, lat, lng, isActive);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {isFullWidth && (
        <AppBar
          position="fixed"
          sx={{ zIndex: 1201, backgroundColor: "white", boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIosNewIcon />}
              onClick={() => setIsFullWidth(false)}
              sx={{
                position: "absolute",
                left: 0,
                color: "primary.main",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(0, 122, 255, 0.1)",
                },
              }}
            >
              Back
            </Button>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Appointment booking
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <MapContainer
        key={isFullWidth ? "full-width" : "default"}
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{
          height: isFullWidth ? "100vh" : "600px",
          width: isFullWidth ? "100vw" : "100%",
          position: isFullWidth ? "fixed" : "relative",
          top: isFullWidth ? "40px" : "auto",
          left: isFullWidth ? 0 : "auto",
          zIndex: isFullWidth ? 1000 : "auto",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={icon}
            eventHandlers={{
              click: () =>
                handleMarkerClick(
                  location.id,
                  location.coordinates[0],
                  location.coordinates[1],
                  location.isActive,
                  location
                ),
            }}
          >
            <Popup>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="subtitle1"
                  fontSize="8"
                  fontWeight="600"
                  textAlign="center"
                >
                  {location.name}
                </Typography>
                <Button
                  sx={{
                    paddingX: "8px",
                    paddingY: "4px",
                    backgroundColor: "primary.main",
                    borderRadius: "50px",
                    cursor: "pointer",
                    color: "white",
                    marginTop: "5px",
                  }}
                  onClick={() => {
                    const googleMapsUrl = `https://www.google.com/maps?q=${location.coordinates[0]},${location.coordinates[1]}`;
                    window.open(googleMapsUrl, "_blank");
                  }}
                >
                  Open google map
                </Button>
              </Box>
            </Popup>
          </Marker>
        ))}
        <UpdateMapCenter center={center} zoom={zoom} />
      </MapContainer>

      {isFullWidth && selectedLocation && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100vw",
            backgroundColor: "white",
            padding: "16px",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1200,
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Address: {selectedLocation.address}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            abx
          </Typography>
        </Box>
      )}
    </Box>
  );
};
