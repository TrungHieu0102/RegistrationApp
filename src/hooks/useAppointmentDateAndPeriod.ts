import { useState, useEffect } from "react";
import { format, addDays } from "date-fns";

const useAppointmentDateAndPeriod = (
  mockCurrentTime: Date,
  OpeningHours: { [key: string]: { start: string; end: string } }
) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<"morning" | "afternoon">("morning");

  const hoursNow = mockCurrentTime.getHours();
  const selectedDayOfWeek = format(mockCurrentTime, "EEEE");

  useEffect(() => {
    let defaultSelectedDate = mockCurrentTime;
    let defaultSelectedPeriod: "morning" | "afternoon" = "morning";

    const closingHour = OpeningHours[selectedDayOfWeek]?.end;
    if (closingHour) {
      const closingTime = new Date(`1970-01-01T${closingHour}:00`);
      if (hoursNow >= closingTime.getHours()) {
        defaultSelectedDate = addDays(mockCurrentTime, 1);
        defaultSelectedPeriod = "morning";
      }
    } else if (hoursNow >= 12 && hoursNow < 18) {
      defaultSelectedPeriod = "afternoon";
    }

    if (!selectedDate) setSelectedDate(defaultSelectedDate);
    if (!selectedPeriod) setSelectedPeriod(defaultSelectedPeriod);
  }, [mockCurrentTime, selectedDayOfWeek, OpeningHours, selectedDate, hoursNow, selectedPeriod]);

  return { selectedDate, selectedPeriod, setSelectedDate, setSelectedPeriod };
};

export default useAppointmentDateAndPeriod;
