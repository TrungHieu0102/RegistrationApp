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
  date,
}: TimeSlotButtonProps) => {
  const { brand, deviceId, serviceId, locationId } = useQueryParams();
  const formattedTime = time ? time.replace(":", "%3A") : "";
  const formattedDate = date || "";
  const url = `?brand=${brand}&deviceId=${deviceId}&serviceId=${serviceId}&locationId=${locationId}&time=${formattedTime}&date=${formattedDate}`;

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
