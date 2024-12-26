import React from "react";
import { Box, Typography } from "@mui/material";

interface CalendarCardProps {
  month: string; // Ví dụ: "Dec"
  date: string; // Ví dụ: "27"
  time: string; // Ví dụ: "09:30"
  duration: string; // Ví dụ: "4 Hours 30 Minutes"
}

export const CalendarCard: React.FC<CalendarCardProps> = ({
  month,
  date,
  time,
  duration,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        backgroundColor: {
          xs: "rgb(244, 244, 244)",
          sm: "rgb(244, 244, 244)",
          md: "rgb(255, 255, 255)",
          lg: "rgb(255, 255, 255)",
        },
        width: {
          xs: "100%",
          sm: "100%",
        },
        borderRadius:"24px",
        paddingY: {
            xs: "12px",
            sm: "10px",      
        },
        paddingX: {
            xs: "10px",
            sm: "10px",
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 54,
          height: 54,
          border: "2px solid black",
          borderRadius: "14px",
          backgroundColor: "#ffffff",
          overflow: "hidden", // Đảm bảo không có khoảng trống thừa
        }}
      >
        {/* Month */}
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
            padding: "4px",
            backgroundColor: "#E21111",
            width: "100%",
            height: "40%",
            textAlign: "center",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
          }}
        >
          {month.toUpperCase()}
        </Typography>
        {/* Date */}
        <Typography
          variant="h5"
          sx={{
            fontSize: "30px",
            color: "black",
            height: "200%",
            fontWeight: "300",
          }}
        >
          {date}
        </Typography>
      </Box>
      {/* Time and Duration */}
      <Box ml={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {time}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "13px", fontWeight: "400" }}
        >
          Duration
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", fontSize: "15px" }}
        >
          {duration}
        </Typography>
      </Box>
    </Box>
  );
};
