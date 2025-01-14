import { Box, Link, Typography, Grid2 as Grid } from "@mui/material";
import { CalendarCard } from "./CalendarCard";
import { AddToCalendarButton } from "add-to-calendar-button-react";

export const TimeConfirm = () => {
  const serviceDataAppointment = JSON.parse(
    sessionStorage.getItem("serviceDataAppointment") || "{}"
  );

  const parseDuration = (duration: string): number => {
    const match = duration.match(/([\d.]+)\s*hour/); 
    return match ? parseFloat(match[1]) * 60 : 60; 
  };

  const durationInMinutes = parseDuration(
    serviceDataAppointment?.service?.duration || "1 hour"
  );

  const calculateEndTime = (startTime: string, duration: number): string => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const totalMinutes = startHour * 60 + startMinute + duration;
    const endHour = Math.floor(totalMinutes / 60) % 24;
    const endMinute = totalMinutes % 60;
    return `${endHour.toString().padStart(2, "0")}:${endMinute
      .toString()
      .padStart(2, "0")}`;
  };
  const startTime = serviceDataAppointment?.time || "09:30";
  const startDate = serviceDataAppointment?.date || "2025-01-03";
  const endTime = calculateEndTime(startTime, durationInMinutes);
  return (
    <Box
      sx={{
        paddingX: "20px",
        paddingY: "5px",
      }}
    >
      <Box
        display={"flex"}
        sx={{
          justifyContent: {
            xs: "flex-start",
            sm: "flex-start",
            md: "space-between",
            lg: "space-between",
          },
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            lineHeight: "41px",
            fontSize: {
              xs: "26px",
              sm: "26px",
              md: "26px",
              lg: "32px",
            },
          }}
        >
          Your booking is confirmed!
        </Typography>
        <Link href="/" underline="none">
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "18px",
            }}
          >
            Back to home page
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 3, md: 4, lg: 4 }}>
          <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {serviceDataAppointment.service.name}
            </Typography>

           <Box sx={{marginX: "7px"}}>
           <AddToCalendarButton
              name={`${serviceDataAppointment.service.name} at ${serviceDataAppointment.location.name}`}
              options={["Apple", "Google", "Outlook.com"]}
              location={serviceDataAppointment.location.address || "World Wide Web"}
              startDate={startDate}
              endDate={startDate} 
              startTime={startTime}
              endTime={endTime}
              timeZone="Asia/Ho_Chi_Minh"
              size="6|6|3|1"
              
            />
           </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 9, lg: 9 }}>
            <CalendarCard
              month={new Date(startDate).toLocaleString("en-US", {
                month: "short",
              })}
              date={new Date(startDate).getDate().toString()}
              time={startTime}
              duration={serviceDataAppointment?.service?.duration || "1 hour"}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
