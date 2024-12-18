import { useEffect, useState } from "react";
import { ButtonDevice } from "../components/Button/ButtonDevice";
import brands from "../Data/Brand";
import devices, { Devices } from "../Data/Devices";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import CommonContainer from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import { PreviousSelections } from "../components/PreviousSelections";
import useQueryParams from "../hooks/useQueryParams"; 

export const ChooseDevice = () => {
  const [filteredDevices, setFilteredDevices] = useState<Devices[]>([]);
  const { brand } = useQueryParams();
  useEffect(() => {
    const brandName = brand;
    if (brandName) {
      const brand = brands.find((b) => b.name === brandName);
      if (brand) {
        setFilteredDevices(
          devices.filter((device) => device.brandId === brand.id)
        );
      }
    }
  }, [brand]);

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
