import { useState, useEffect } from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useServices } from "../hooks/useServices";
import deviceServices from "../Data/DeviceService";
import { PreviousSelections } from "../components/PreviousSelections";
import { CommonContainer } from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import { ButtonService } from "../components/Button/ButtonService";
import useQueryParams from "../hooks/useQueryParams";
import { useTranslation } from "react-i18next";
import { Services } from "../Data/Services";

export const ChooseService = () => {
  const [filteredServices, setFilteredServices] = useState<Services[]>([]); 
  const services = useServices();
  const { deviceId } = useQueryParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (deviceId) {
      const deviceService = deviceServices.find(
        (ds) => ds.deviceId === parseInt(deviceId)
      );
      if (deviceService) {
        setFilteredServices(
          services.filter((service) =>
            deviceService.serviceIds.includes(service.id)
          )
        );
      } else {
        setFilteredServices([]);
      }
    }
  }, [deviceId, services]);

  return (
    <CommonContainer>
      <Navigate />
      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontSize={"20px"} fontWeight={"bold"}>
          {t("Choose a service type")}
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          marginTop={"20px"}
        >
          {filteredServices.map((service) => (
            <ButtonService
              key={service.id}
              props={{
                name: service.name, 
                duration: service.duration,
                id: service.id,
              }}
            />
          ))}
        </Grid>
      </Box>
    </CommonContainer>
  );
};
