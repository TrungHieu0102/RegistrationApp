import { Box, Typography } from "@mui/material";
import { FormDataAppointment } from "../../hooks/useSessionData";

interface BookingDetailProps {
  form: FormDataAppointment | null;
  orderId: string | null;
}

export const BookingDetail = ({ form, orderId }: BookingDetailProps) => {
  if (!form) {
    return <Typography>No booking details available.</Typography>; 
  }

  return (
    <Box sx={{ paddingX: "20px", paddingY: "5px" }}>
      <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "18px" }}>
        Booking details
      </Typography>
      <Box sx={{ margin: "20px" }}>
        {orderId && (
          <Box
          sx={{
            display: "flex",
            gap: {
              xs: "10%",
              sm: "20%",
              md: "10%",
              lg: "10%",
            },
            marginTop: "20px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "20px",
                position: "relative",
                width:{
                  xs: "45%",
                  sm: "40%",
                  md: "30%",
                  lg: "21%",
              }
              }}
            >
              Order ID:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(112, 112, 112)",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
              }}
            >
              {orderId}
            </Typography>
          </Box>
        )}

        {form.name && (
          <Box
          sx={{
            display: "flex",
            gap: {
              xs: "10%",
              sm: "20%",
              md: "10%",
              lg: "10%",
            },
            marginTop: "5px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "20px",
                position: "relative",
                width:{
                  xs: "45%",
                  sm: "40%",
                  md: "30%",
                  lg: "21%",
              }
              }}
            >
              Name:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(112, 112, 112)",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
              }}
            >
              {form.name}
            </Typography>
          </Box>
        )}

        {form.phone && (
          <Box
          sx={{
            display: "flex",
            gap: {
              xs: "10%",
              sm: "20%",
              md: "10%",
              lg: "10%",
            },
            marginTop: "5px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "20px",
                position: "relative",
                width:{
                  xs: "45%",
                  sm: "40%",
                  md: "30%",
                  lg: "21%",
              }
              }}
            >
              Phone Number:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(112, 112, 112)",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
              }}
            >
              {form.phone}
            </Typography>
          </Box>
        )}

        {form.email && (
          <Box
          sx={{
            display: "flex",
            gap: {
              xs: "10%",
              sm: "20%",
              md: "10%",
              lg: "10%",
            },
            marginTop: "5px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "20px",
                position: "relative",
                width:{
                  xs: "45%",
                  sm: "40%",
                  md: "30%",
                  lg: "21%",
              }
              }}
            >
              Email Address:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgb(112, 112, 112)",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
              }}
            >
              {form.email}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
