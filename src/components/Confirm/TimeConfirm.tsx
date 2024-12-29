import { Box, Link, Typography, Grid2 as Grid } from "@mui/material";
import { CalendarCard } from "./CalendarCard";
import { AddToCalendarButton } from "add-to-calendar-button-react";
export const TimeConfirm = () => {
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
              Upgrade Memory
            </Typography>

            <AddToCalendarButton
              name="Title"
              options={["Apple", "Google", "Outlook.com"]}
              location="World Wide Web"
              startDate="2024-12-31"
              endDate="2024-12-31"
              startTime="10:15"
              endTime="23:30"
              timeZone="America/Los_Angeles"
              size="6|6|3|1"
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 9, lg: 9 }}>
            <CalendarCard
              month="Dec"
              date="27"
              time="09:30"
              duration="4 Hours 30 Minutes"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
