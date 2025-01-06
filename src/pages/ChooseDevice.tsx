import { useEffect, useState } from "react";
import { ButtonDevice } from "../components/ChooseDevice/ButtonDevice";
import brands from "../Data/Brand";
import devices, { Devices } from "../Data/Devices";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { CommonContainer } from "../components/UI/CommonContainer";
import useQueryParams from "../hooks/useQueryParams";
import { useTranslation } from "react-i18next";

export const ChooseDevice = () => {
  const [filteredDevices, setFilteredDevices] = useState<Devices[]>([]);
  const { brand } = useQueryParams();
  const { t } = useTranslation();

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
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontSize={"20px"} fontWeight={"bold"}>
          {t("Choose a device type")}
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
              id={device.id}
              name={device.name}
              image={device.image}
            />
          ))}
        </Grid>
      </Box>
    </CommonContainer>
  );
};
