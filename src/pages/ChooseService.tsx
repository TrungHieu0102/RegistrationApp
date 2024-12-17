import { useLocation } from "react-router-dom";
import { PreviousSelections } from "../components/PreviousSelections";
import CommonContainer from "../components/UI/CommonContainer";
import { Navigate } from "../components/UI/Navigate";
import { useEffect, useState } from "react";
import services, { Services } from "../Data/Services";
import deviceServices from "../Data/DeviceService";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { ButtonService } from "../components/ButtonService";

export const ChooseService = () => {
  const location = useLocation();
  const [filteredServices, setFilteredServices] = useState<Services[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const deviceId = params.get("deviceId");
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
  }, [location]);

  return (
    <CommonContainer>
      <Navigate
        
      />

      <PreviousSelections />
      <Box marginTop={"20px"}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Choose a service type
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
