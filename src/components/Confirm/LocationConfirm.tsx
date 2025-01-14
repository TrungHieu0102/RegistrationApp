import {
  Box,
  Button,
  IconButton,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import { OpeningHours } from "../../Data/OpeningHours";
import images from "../../assets/images";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import useLocationMap from "../../hooks/useLocationMap";
import { Icon } from "leaflet";
import { useEffect, useMemo } from "react";
import { useSessionData } from "../../hooks/useSessionData";

interface LocationConfirmProps {
  storeName?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
}
const UpdateMapCenter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);

  return null;
};
export const LocationConfirm = ({
  storeName,
  phoneNumber,
  email,
  website,
}: LocationConfirmProps) => {
  const { t } = useTranslation();
  const { zoom } = useLocationMap();
  const sesion = useSessionData();
  const center = useMemo<[number, number]>(() => {
    if (sesion.serviceDataAppointment?.location?.coordinates) {
      return sesion.serviceDataAppointment.location.coordinates;
    }
    return [0, 0];
  }, [sesion.serviceDataAppointment?.location?.coordinates]);
  const icon = new Icon({
    iconUrl: images.iconmap,
    iconSize: [30, 30],
  });

  const translatedOpeningHours = Object.keys(OpeningHours).map((day) => {
    const key = day as keyof typeof OpeningHours;
    return {
      day: t(`days.${day}`),
      start: OpeningHours[key].start,
      end: OpeningHours[key].end,
    };
  });
  return (
    <Box sx={{ paddingX: "20px", paddingY: "5px" }}>
      <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "18px" }}>
        Selected location
      </Typography>
      <Box sx={{ flexGrow: 1, marginY: "15px", marginX: "10px", paddingRight: "20px" }}>
        <Grid
          container
          spacing={{ xs: 1, sm: 3, md: 4, lg: 4 }}
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
            <Box>
              <Grid
                container
                direction={{ xs: "row", sm: "row", md: "column", lg: "column" }}
                rowSpacing={{ xs: 1, sm: 3, md: 4, lg: 4 }}
              >
                <Grid size={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                  <Box
                    display="flex"
                    gap="10px"
                    flexDirection="column"
                    justifyContent="flex-start"
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      {storeName}
                    </Typography>
                    <Typography
                      component="a"
                      href={`tel:${phoneNumber}`}
                      sx={{
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "rgb(12, 140, 233)",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {phoneNumber}
                    </Typography>
                    <Box display="flex" gap={1}>
                      <IconButton
                        aria-label="web"
                        sx={{ border: "1px solid black" }}
                        onClick={() => window.open(website, "_blank")}
                      >
                        <LanguageIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="map"
                        sx={{ border: "1px solid black" }}
                        onClick={() => {
                          if (center) {
                            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center[0]},${center[1]}`;
                            window.open(googleMapsUrl, "_blank");
                          }
                        }}
                      >
                        <DirectionsCarIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="mail"
                        sx={{ border: "1px solid black" }}
                        onClick={() =>
                          (window.location.href = `mailto:${email}`)
                        }
                      >
                        <EmailIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                  <Box
                    sx={{
                      marginTop: {
                        xs: "0px",
                        sm: "0px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="20px"
                    >
                      {t("Opening Hours")}
                    </Typography>
                    <Box sx={{ marginTop: "1px", marginLeft: "5px" }}>
                      {translatedOpeningHours.map(({ day, start, end }) => (
                        <Box
                          key={day}
                          display="flex"
                          justifyContent="flex-start"
                          alignItems="center"
                          paddingRight="10px"
                          gap={4}
                          sx={{
                            width: "100%",
                            overflow: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "darkgrey",
                              fontSize: "15px",
                              fontWeight: "400",
                              minWidth: "80px",
                            }}
                          >
                            {t(`${day}`)}:
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "darkgrey",
                              fontSize: "15px",
                              fontWeight: "400",
                              flexGrow: 1,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {start} - {end}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
            <Box>
              <MapContainer
                style={{ height: "100%", minHeight: "300px", width: "100%" }}
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {center && (
                  <Marker key={1} position={center} icon={icon}>
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
                          {storeName}
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
                            const googleMapsUrl = `https://www.google.com/maps?q=${center[0]},${center[1]}`;
                            window.open(googleMapsUrl, "_blank");
                          }}
                        >
                          Open google map
                        </Button>
                      </Box>
                    </Popup>
                  </Marker>
                )}
                <UpdateMapCenter center={center} />
              </MapContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
