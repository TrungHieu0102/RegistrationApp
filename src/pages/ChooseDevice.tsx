import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "../components/UI/Navigate";
import CommonContainer from "../components/UI/CommonContainer";
import { PreviousSelections } from "../components/PreviousSelections";
import { ButtonDevice } from "../components/ButtonDevice";
import brands from "../Data/Brand";
import devices, { Devices } from "../Data/Devices";

import { Box, Grid2 as Grid, Typography } from "@mui/material";

export const ChooseDevice = () => {
  const location = useLocation();
  const [selections, setSelections] = useState<
    { name: string; value: string; count: number }[]
  >([]);
  const [filteredDevices, setFilteredDevices] = useState<Devices[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const brandName = params.get("brand");

    if (brandName) {
      const brand = brands.find((b) => b.name === brandName);
      if (brand) {
        setSelections((prevSelections) => {
          const existingSelection = prevSelections.find(
            (sel) => sel.name === "Brand" && sel.value === brandName
          );
          if (existingSelection) {
            return prevSelections.map((sel) =>
              sel === existingSelection ? { ...sel, count: sel.count + 1 } : sel
            );
          } else {
            return [
              ...prevSelections,
              { name: "Brand", value: brandName, count: 1 },
            ];
          }
        });

        setFilteredDevices(
          devices.filter((device) => device.brandId === brand.id)
        );
      }
    }
  }, [location]);

  const deviceButtons = filteredDevices.map((device) => (
    <ButtonDevice
      key={device.id}
      props={{
        name: device.name,
        image: device.image,
      }}
    />
  ));

  return (
    <CommonContainer>
      <Box>
        <Navigate route="/" />
        <PreviousSelections selections={selections} />
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
            {deviceButtons}
          </Grid>
        </Box>
      </Box>
    </CommonContainer>
  );
};
