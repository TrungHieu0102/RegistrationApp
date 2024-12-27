import { CommonContainer } from "../components/UI/CommonContainer";
import { TimeConfirm } from "../components/TimeConfirm";
import { Box, Typography } from "@mui/material";
import { BookingDetail } from "../components/BookingDetail";
import { useSessionData } from "../hooks/useSessionData";
import { LocationConfirm } from "../components/LocationConfirm";

export const Confirm = () => {
    const { formDataAppointment, serviceDataAppointment } = useSessionData(); 

  return (
    <CommonContainer>
      <Box
        sx={{
            marginX:{
                xs:"0px",
                sm:"0px",
                md:"0px",
                lg:"50px",
            }
        }}
      >
        <TimeConfirm />
        {formDataAppointment && serviceDataAppointment ? (
          <BookingDetail form={formDataAppointment} orderId={serviceDataAppointment.orderId} />
        ) : (
          <Typography>No booking details available.</Typography>
        )}
        <LocationConfirm/>
      </Box>
    </CommonContainer>
  );
};
