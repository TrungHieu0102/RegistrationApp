import { useEffect } from "react";
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
import { StoreStatus } from "./StoreStatus";
import { OpeningHours } from "../../Data/OpeningHours";
import { useTranslation } from "react-i18next";
import { ButtonLocation } from "./ButtonLocation";

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
    isActive: boolean,
    address: string | undefined
  ) => void;
  isFullWidth: boolean;
  setIsFullWidth: (value: boolean) => void;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  idLocation: number;
  setIdLocation: (value: number) => void;
  selectedLocation: string | undefined;
  setSelectedLocation: (value: string | undefined) => void;
  mapHeight: string;
  setMapHeight: (value: string) => void;
}

export const LocationMap = ({
  center,
  icon,
  zoom,
  filteredLocations,
  onMarkerClick,
  isFullWidth,
  setIsFullWidth,
  selectedLocation,
  setSelectedLocation,
  isActive,
  setIsActive,
  idLocation,
  setIdLocation,
  mapHeight = "100vh",
  setMapHeight,
}: LocationMapContainerProps) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    setIsFullWidth(!isMdUp);
  }, [isMdUp, setIsFullWidth]);
  const { t } = useTranslation();
  const translatedOpeningHours = Object.keys(OpeningHours).map((day) => {
    const key = day as keyof typeof OpeningHours;
    return {
      day: t(`days.${day}`),
      start: OpeningHours[key].start,
      end: OpeningHours[key].end,
    };
  });

  const handleMarkerClick = (
    id: number,
    lat: number,
    lng: number,
    isActive: boolean,
    address: string | undefined
  ) => {
    onMarkerClick(id, lat, lng, isActive, address);
    setIsActive(isActive);
    setIdLocation(id);
    setMapHeight(isActive ? "70vh" : "100vh");
  };
  console.log("mapheight", mapHeight);
  console.log("LocationMap", isActive);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {isFullWidth && (
        <AppBar
          position="fixed"
          sx={{ zIndex: 1201, backgroundColor: "white", boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIosNewIcon />}
              onClick={() => {
                setIsFullWidth(false);
                setSelectedLocation(undefined);
                setMapHeight("100vh");
              }}
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
              {t("Back")}
            </Button>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {t("title")}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <MapContainer
        key={`${isFullWidth}-${mapHeight}`}
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{
          height: isFullWidth ? mapHeight : "600px",
          width: isFullWidth ? "100vw" : "100%",
          position: isFullWidth ? "fixed" : "relative",
          top: isFullWidth ? "60px" : "auto",
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
                  location.address
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
      {isFullWidth && selectedLocation && isActive && (
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
            {selectedLocation}
          </Typography>
          {isActive ? (
            <StoreStatus OpeningHours={OpeningHours} />
          ) : (
            <Typography
              color="#a9a2a2"
              fontWeight="bold"
              fontSize="16px"
              variant="h6"
            >
              {t("Not available")}
            </Typography>
          )}
          {translatedOpeningHours.map(({ day, start, end }) => (
            <Box
              key={day}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="4px"
              paddingLeft="10px"
              paddingRight="10px"
            >
              <Typography variant="body2">{t(`${day}`)}:</Typography>
              <Typography variant="body2">
                {start} - {end}
              </Typography>
            </Box>
          ))}
          <ButtonLocation locationId={idLocation} />
        </Box>
      )}
    </Box>
  );
};
