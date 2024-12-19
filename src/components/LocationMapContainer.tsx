import { Icon } from "leaflet";
import { Grid2 as Grid } from "@mui/material";
import images from "../assets/images";
import { LocationAccordionList } from "./LocationAccordionList";
import useLocationMap from "../hooks/useLocationMap";
import { LocationMap } from "./LocationMap";
import { useState } from "react";

export const LocationMapContainer = () => {
  const { center, changeCenter, zoom, defaultZoom } = useLocationMap();

  const icon = new Icon({
    iconUrl: images.iconmap,
    iconSize: [38, 38],
  });

  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  // Thay đổi trạng thái expandedIndex khi một accordion được mở
  const handleAccordionChange = (index: number) => {
    setExpandedIndex(expandedIndex === index ? false : index);
  };

  // Cập nhật khi click vào marker, mở accordion và di chuyển bản đồ
  const handleMarkerClick = (id: number,lat: number, lng: number) => {
    setExpandedIndex(id); // Mở accordion tương ứng
    changeCenter(lat,lng); // Di chuyển bản đồ đến vị trí của marker
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
