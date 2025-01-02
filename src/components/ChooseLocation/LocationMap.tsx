import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
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
}

export const LocationMap = ({
  center,
  icon,
  zoom,
  filteredLocations,
  onMarkerClick,
}: LocationMapContainerProps) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%" }}
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
              onMarkerClick(
                location.id,
                location.coordinates[0],
                location.coordinates[1],
                location.isActive
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
  );
};
