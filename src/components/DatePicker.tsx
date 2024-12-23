import React, { useState, useEffect } from "react";
import {
  format,
  addDays,
  subDays,
  isSameDay,
  startOfWeek,
  isBefore,
} from "date-fns";
import { Box, Typography } from "@mui/material";
import AppointmentDateSelector from "./AppointmentDateSelector";
import AppointmentPeriodSelector from "./AppointmentPeriodSelector";
import AppointmentTimeSlots from "./AppointmentTimeSlots";
interface AppointmentsProps {
  OpeningHours: { [key: string]: { start: string; end: string } };
}
const Appointments: React.FC<AppointmentsProps> = ({ OpeningHours }) => {
  
  const mockCurrentTime = new Date("2024-12-26T13:00:00");
  
  const [currentStartDate, setCurrentStartDate] = useState<Date>(mockCurrentTime);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<"morning" | "afternoon">(
    "morning"
  );

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    addDays(currentStartDate, i)
  );
  const today = mockCurrentTime;
  const hoursNow = today.getHours();
  const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 });
  useEffect(() => {
    let defaultSelectedDate = today;
    let defaultSelectedPeriod: "morning" | "afternoon" = "morning";
    const selectedDayOfWeek = format(today, "EEEE");
    if (selectedDayOfWeek) {
      const closingHour = OpeningHours[selectedDayOfWeek]?.end;
      const closingTime = closingHour ? new Date(`1970-01-01T${closingHour}:00`) : null;

      if (closingTime && hoursNow >= closingTime.getHours()) {
        defaultSelectedDate = addDays(today, 1);
        defaultSelectedPeriod = "morning";
      }
    } else if (hoursNow >= 12 && hoursNow < 18) {
      defaultSelectedPeriod = "afternoon";
    }

    if (!selectedDate) {
      setSelectedDate(defaultSelectedDate);
    }
    if (!selectedPeriod) {
      setSelectedPeriod(defaultSelectedPeriod);
    }
  }, [today, hoursNow, OpeningHours, selectedDate, selectedPeriod]);

  const handlePreviousWeek = () => {
    const newStartDate = subDays(currentStartDate, 7);
    if (isBefore(newStartDate, startOfCurrentWeek)) return;
    setCurrentStartDate(newStartDate);
  };

  const handleNextWeek = () => {
    setCurrentStartDate(addDays(currentStartDate, 7));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); 
  };

  const handleTimeSlotSelect = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  const generateTimeSlots = (start: string, end: string, currentTime: Date): string[] => {
    const startTime = new Date();
    const endTime = new Date();
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
  
    startTime.setHours(startHour, startMinute, 0, 0);
    endTime.setHours(endHour, endMinute, 0, 0);
  
    const timeSlots: string[] = [];
    
    while (startTime < endTime) {
      const hours = startTime.getHours();
      const minutes = startTime.getMinutes();
      const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
        minutes < 10 ? "0" : ""
      }${minutes}`;
        if (startTime.getHours() > currentTime.getHours()) {
        timeSlots.push(formattedTime);
      }
      startTime.setMinutes(startTime.getMinutes() + 30); // Tăng lên mỗi 30 phút
    }
  
    return timeSlots;
  };
  
  
  
  const getPeriodTimeSlots = (period: "morning" | "afternoon") => {
    if (!openingHours) return [];
    const start = period === "morning" ? "08:00" : "13:00";
    const end = period === "morning" ? "12:00" : "18:00";
    
    const mockCurrentTime = new Date("2024-12-26T07:00:00"); 
    
    return generateTimeSlots(start, end, mockCurrentTime);
  };
  
  

  const selectedDayOfWeek = selectedDate ? format(selectedDate, "EEEE") : null;
  const openingHours = selectedDayOfWeek
    ? OpeningHours[selectedDayOfWeek]
    : null;


  const timeSlots = getPeriodTimeSlots(selectedPeriod);

  const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
  const isPastDate = (date: Date) => isBefore(date, today);

  const isTodayAndEvening = (date: Date) => {
    if (!selectedDayOfWeek) return false;

    const closingHour = OpeningHours[selectedDayOfWeek]?.end;
    if (!closingHour) return false;

    const closingTime = new Date(`1970-01-01T${closingHour}:00`);
    return isSameDay(date, today) && hoursNow >= closingTime.getHours();
  };

  return (
    <Box
      sx={{ width: "95%", margin: "0 auto", textAlign: "left", marginTop: 3 }}
    >
      <Typography variant="h6" fontSize="14px" mb={3} fontWeight="bold">
        Date
      </Typography>
      <AppointmentDateSelector
        currentStartDate={currentStartDate}
        weekDays={weekDays}
        selectedDate={selectedDate}
        handleDateSelect={handleDateSelect}
        handlePreviousWeek={handlePreviousWeek}
        handleNextWeek={handleNextWeek}
        isPastDate={isPastDate}
        isWeekend={isWeekend}
        isTodayAndEvening={isTodayAndEvening}
      />
      <Typography
        marginTop="20px"
        variant="h6"
        fontSize="14px"
        mb={2}
        fontWeight="bold"
      >
        Time Slot
      </Typography>
      <AppointmentPeriodSelector
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        mockCurrentTime={mockCurrentTime}
      />
      <AppointmentTimeSlots
        timeSlots={timeSlots}
        selectedTimeSlot={selectedTimeSlot}
        handleTimeSlotSelect={handleTimeSlotSelect}
      />
      {selectedDate && selectedTimeSlot && (
        <Box mt={3}>
          <Typography>
            You selected:
            <strong>{format(selectedDate, "MMMM d, yyyy")}</strong> at{" "}
            <strong>{selectedTimeSlot}</strong>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Appointments;