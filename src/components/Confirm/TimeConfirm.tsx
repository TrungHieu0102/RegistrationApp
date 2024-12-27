import { Box, Link, Typography } from "@mui/material";
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
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "30%",
            },
          }}
        >
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
          ></AddToCalendarButton>
        </Box>
        <CalendarCard
          month="Dec"
          date="27"
          time="09:30"
          duration="4 Hours 30 Minutes"
        />
      </Box>
    </Box>
  );
};
