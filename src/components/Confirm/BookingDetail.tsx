import { Box, Typography, Grid2 as Grid } from "@mui/material";
import { FormDataAppointment } from "../../hooks/useSessionData";
import { useTranslation } from "react-i18next";
interface BookingDetailProps {
  form: FormDataAppointment | null;
  orderId: string | null;
}

export const BookingDetail = ({ form, orderId }: BookingDetailProps) => {
  const {t} = useTranslation()
  if (!form) {
    return <Typography>No booking details available.</Typography>;
  }
  const details = [
    { label: `${t("confirm.booking-id")}`, value: orderId },
    { label: `${t("confirm.name")}`, value: form.name },
    { label: `${t("confirm.phone-number")}`, value: form.phone },
    { label: `${t("confirm.email")}`, value: form.email },
  ];

  return (
    <Box sx={{ paddingX: "20px", paddingY: "5px" }}>
      <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "18px" }}>
        {t("confirm.booking-details")}
      </Typography>
      <Box sx={{ flexGrow: 1, marginY: "15px", marginX: "10px" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 3, md: 4, lg: 4 }}>
          <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3 }}>
            {details.map(
              (detail) =>
                detail.value && (
                  <Typography
                    key={detail.label}
                    variant="body1"
                    sx={{ fontWeight: "700", lineHeight: "25px" }}
                  >
                    {detail.label}
                  </Typography>
                )
            )}
          </Grid>

          <Grid size={{ xs: 6, sm: 6, md: 9, lg: 9 }}>
            {details.map(
              (detail) =>
                detail.value && (
                  <Typography
                    key={detail.label}
                    variant="body1"
                    sx={{
                      color: "rgb(112, 112, 112)",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "25px",
                    }}
                  >
                    {detail.value}
                  </Typography>
                )
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
