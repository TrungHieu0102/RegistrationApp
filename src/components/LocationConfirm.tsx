import { Box, Button, IconButton, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import { OpeningHours } from "../Data/OpeningHours";
import images from "../assets/images";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useLocationMap from "../hooks/useLocationMap";
import { Icon } from "leaflet";
export const LocationConfirm = () => {
  const { t } = useTranslation();
  const { center, changeCenter, zoom } = useLocationMap();
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
  const handleMarkerClick = (id: number, lat: number, lng: number) => {
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
    <Box sx={{ paddingX: "20px", paddingY: "5px" ,width:"100%"}}>
      <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "18px" }}>
        Selected location
      </Typography>
      <Box
        display="flex"
        flexDirection={{
          xs: "column",
          md: "row", 
        }}
        justifyContent="space-between" 
       
      >
      
          <Box
            sx={{
              margin: "20px",
              display: "flex",
              flexDirection: {
                xs: "row",
                sm: "row",
                md: "column",
                lg: "column",
              },
              gap:{
                xs:"50%",
                sm:"40%",
                md:"0px",
              }
            }}
          >
            <Box display="flex" gap={"5px"} flexDirection="column" justifyContent={"flex-start"}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "700", fontSize: "15px" }}
              >
                Demo repair shop
              </Typography>
              <Typography
                component="a"
                href="tel:+1234567890"
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
                +1234567890
              </Typography>
              <Box display="flex" gap={1}>
                <IconButton
                  aria-label="web"
                  sx={{
                    border: "1px solid black",
                  }}
                >
                  <LanguageIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="map"
                  sx={{
                    border: "1px solid black",
                  }}
                >
                  <DirectionsCarIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="mail"
                  sx={{
                    border: "1px solid black",
                  }}
                >
                  <EmailIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{
              marginTop:{
                xs:"0px",
                sm:"0px",
                md:"30px",
                lg:"30px",
              }
            }}>
              <Typography
                variant="body2"
                fontSize="15px"
                fontWeight="bold"
                lineHeight="20px"
              >
                {t("Opening Hours")}
              </Typography>
              <Box
                sx={{
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                {translatedOpeningHours.map(({ day, start, end }) => (
                  <Box
                    key={day}
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    paddingRight="10px"
                    gap={4}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        width: "25%", 
                        color: "darkgrey",
                        fontSize: "15px",
                        fontWeight: "400",
                        
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

                      }}
                    >
                      {start} - {end}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
       

        <Box
          sx={{
            width: {
              xs: "100%", 
              md: "70%", 
            },
            height: "400px",
          }}
        >
          <MapContainer style={{ height: "100%", width: "100%",}} center={center} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              key={1}
              position={center}
              icon={icon}
              eventHandlers={{
                click: () => handleMarkerClick,
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
                    abc
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
                      const googleMapsUrl = `https://www.google.com/maps?q=${123},${123}`;
                      window.open(googleMapsUrl, "_blank");
                    }}
                  >
                    Open google map
                  </Button>
                </Box>
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>
    </Box>
  );
};
