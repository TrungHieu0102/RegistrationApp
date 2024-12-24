import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useQueryParams from "../../hooks/useQueryParams";

interface TimeSlotButtonProps {
  timeSlot: string;
  selectedTimeSlot: string | null;
  handleTimeSlotSelect: (timeSlot: string) => void;
  time?: string;
  date?: string;
}

export const TimeSlotButton = ({
  timeSlot,
  selectedTimeSlot,
  handleTimeSlotSelect,
  time,
  date
}: TimeSlotButtonProps) => {
  const { brand, deviceId, serviceId, locationId } = useQueryParams();
  
  // Chuyển thời gian thành định dạng HH%3AMM
  const formattedTime = time ? time.replace(":", "%3A") : "";
  
  // Đảm bảo rằng ngày được định dạng dưới dạng yyyy-MM-dd
  const formattedDate = date || "";

  // Tạo URL với tham số time đã mã hóa
  const url = `/?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${locationId}&time=${formattedTime}&date=${formattedDate}`;

  return (
    <Link to={url} style={{ textDecoration: "none" }}>
      <Button
        onClick={() => handleTimeSlotSelect(timeSlot)}
        variant={selectedTimeSlot === timeSlot ? "contained" : "outlined"}
        sx={{
          borderRadius: "24px",
          border: "none",
          textTransform: "none",
          fontSize: "14px",
          padding: "12px 20px",
          flex: "1 0 150px",
          minWidth: "150px",
          backgroundColor: "#f4f4f4",
          color: "black",
        }}
      >
        {timeSlot}
      </Button>
    </Link>
  );
};
