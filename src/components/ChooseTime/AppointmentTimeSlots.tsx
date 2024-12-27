import { Box, Stack } from "@mui/material";
import { format } from "date-fns";
import { TimeSlotButton } from "./TimeSlotButton";

interface AppointmentTimeSlotsProps {
  timeSlots: string[];
  selectedTimeSlot: string | null;
  handleTimeSlotSelect: (timeSlot: string) => void;
  selectedDate: Date | null; 
}

export const AppointmentTimeSlots = ({
  timeSlots,
  selectedTimeSlot,
  handleTimeSlotSelect,
  selectedDate,
}: AppointmentTimeSlotsProps) => {
  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""; 

  return (
    <Box marginTop={5}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {timeSlots.map((timeSlot, index) => (
          <TimeSlotButton
            key={index}
            timeSlot={timeSlot}
            selectedTimeSlot={selectedTimeSlot}
            handleTimeSlotSelect={handleTimeSlotSelect}
            time={timeSlot}
            date={formattedDate} 
          />
        ))}
      </Stack>
    </Box>
  );
};
