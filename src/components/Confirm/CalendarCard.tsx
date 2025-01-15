import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
interface CalendarCardProps {
  month: string;
  date: string;
  time: string; 
  duration: string; 
}

export const CalendarCard= ({
  month,
  date,
  time,
  duration,
}:CalendarCardProps ) => {
  const { t } = useTranslation();
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
            xs: "5px",
            sm: "5px",
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
          overflow: "hidden", 
        }}
      >
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
      <Box ml={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {time}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "13px", fontWeight: "400" }}
        >
          {t("confirm.duration")}
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
