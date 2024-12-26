import {
  Box,
  Button,
  Link,
  Typography,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppleIcon from "@mui/icons-material/Apple"; // Thay bằng logo tùy chỉnh nếu cần
import GoogleIcon from "@mui/icons-material/Google"; // Thay bằng logo tùy chỉnh nếu cần
import CloudIcon from "@mui/icons-material/Cloud"; // Thay bằng logo của Outlook hoặc icon khác
import { CalendarCard } from "./CalendarCard";
export const TimeConfirm = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

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
            width:{
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "30%",
            }
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Upgrade Memory
          </Typography>
          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              display: "inline-flex",
              position: "relative",
              marginTop: "10px",
            }}
          >
            <Button
              startIcon={<CalendarMonthIcon />}
              variant="contained"
              sx={{
                whiteSpace: "nowrap",
                border: "1px solid rgb(201, 201, 201)",
                color: "black",
                backgroundColor: "rgb(241, 241, 241)",
                textTransform: "none",
                position: "relative",
                zIndex: 101,
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "white",
                },
              }}
            >
              Add to calendar
            </Button>
            {anchorEl && (
              <Box
                sx={{
                  position: "absolute",
                  width: "160px",
                  top: "100%",
                  left: "50%", // Đặt cạnh trái của menu ở giữa nút
                  transform: "translateX(-50%)", // Căn chỉnh menu vào giữa nút
                  backgroundColor: "white",
                  zIndex: 100,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "8px",
                }}
              >
                <MenuItem>
                  {" "}
                  <ListItemIcon>
                    <AppleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Apple" />
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <GoogleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Google" />
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <CloudIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Outlook.com" />
                </MenuItem>
              </Box>
            )}
          </Box>

          {anchorEl && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(1.5px)",
                zIndex: 5,
              }}
            />
          )}
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
