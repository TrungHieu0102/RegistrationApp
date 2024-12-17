import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ButtonDevice } from "../components/ButtonDevice";
import brands from "../Data/Brand";
import devices from "../Data/Devices";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import CommonContainer from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import { PreviousSelections } from "../components/PreviousSelections";
import { Devices } from "../types/data";

export const ChooseDevice = () => {
  const location = useLocation();
  const [filteredDevices, setFilteredDevices] = useState<Devices[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const brandName = params.get("brand");

    if (brandName) {
      const brand = brands.find((b) => b.name === brandName);
      if (brand) {
        setFilteredDevices(
          devices.filter((device) => device.brandId === brand.id)
        );
      }
    }
  }, [location]);

  return (
    <CommonContainer>
      <Navigate />
      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Choose a device type
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          marginTop={"20px"}
        >
          {filteredDevices.map((device) => (
            <ButtonDevice
              key={device.id}
              props={{ name: device.name, image: device.image, id: device.id }}
            />
          ))}
        </Grid>
      </Box>
    </CommonContainer>
  );
};
