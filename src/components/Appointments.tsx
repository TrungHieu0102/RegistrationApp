import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { format, addDays } from "date-fns";
import {AppointmentDateSelector} from "./AppointmentDateSelector";
import {AppointmentPeriodSelector} from "./AppointmentPeriodSelector";
import {AppointmentTimeSlots} from "./AppointmentTimeSlots";
import { useDateValidation } from "../hooks/useDateValidation";
import { useTimeSlots } from "../hooks/useTimeSlots";
import useAppointmentDateAndPeriod from "../hooks/useAppointmentDateAndPeriod";
import useWeekNavigation from "../hooks/useWeekNavigation";
import { useTranslation } from "react-i18next";

interface AppointmentsProps {
  OpeningHours: { [key: string]: { start: string; end: string } };
}

export const Appointments= ({ OpeningHours } : AppointmentsProps) => {
  const TIME = new Date("2024-12-26T19:00:00");  //new Date("2024-12-26T14:00:00") - new Date() - DEFAULT TIME TEST
  const { t } = useTranslation();

  const { selectedDate, selectedPeriod, setSelectedDate, setSelectedPeriod } = useAppointmentDateAndPeriod(TIME, OpeningHours);
  const [currentStartDate, setCurrentStartDate] = useState<Date>(TIME);
  const { handlePreviousWeek, handleNextWeek } = useWeekNavigation(currentStartDate, setCurrentStartDate);

  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const { isWeekend, isPastDate, isTodayAndEvening } = useDateValidation(OpeningHours, selectedDate || TIME, TIME);
  const timeSlots = useTimeSlots(
    selectedPeriod === "morning" ? "09:00" : "13:00",
    selectedPeriod === "morning" ? "12:00" : "17:15",
    selectedDate || TIME,
    TIME
  );

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <Box sx={{ width: "95%", margin: "0 auto", textAlign: "left", marginTop: 3 }}>
      <Typography variant="h6" fontSize="14px" mb={3} fontWeight="bold">
      {t('Date')} 
      </Typography>
      <AppointmentDateSelector
        currentStartDate={currentStartDate}
        weekDays={Array.from({ length: 7 }, (_, i) => addDays(currentStartDate, i))}
        selectedDate={selectedDate}
        handleDateSelect={handleDateSelect}
        handlePreviousWeek={handlePreviousWeek}
        handleNextWeek={handleNextWeek}
        isPastDate={isPastDate}
        isWeekend={isWeekend}
        isTodayAndEvening={isTodayAndEvening}
      />
      <Typography marginTop="20px" variant="h6" fontSize="14px" mb={2} fontWeight="bold">
      {t('Time Slot')} 
      </Typography>
      <AppointmentPeriodSelector
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        mockCurrentTime={TIME}
        selectedDate={selectedDate}
      />
      <AppointmentTimeSlots
        timeSlots={timeSlots}
        selectedTimeSlot={selectedTimeSlot}
        handleTimeSlotSelect={handleTimeSlotSelect}
        selectedDate={selectedDate} 

      />
      {selectedDate && selectedTimeSlot && (
        console.log(selectedDate, selectedTimeSlot),
        <Box mt={3}>
          <Typography>
            You selected: <strong>{format(selectedDate, "MMMM d, yyyy")}</strong> at <strong>{selectedTimeSlot}</strong>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

