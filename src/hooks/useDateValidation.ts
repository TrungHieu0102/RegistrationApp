import { isBefore, isSameDay, format } from "date-fns";

export const useDateValidation = (OpeningHours: { [key: string]: { start: string; end: string } }, selectedDate: Date, today: Date) => {
  const hoursNow = today.getHours();

  const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
  const isPastDate = (date: Date) => isBefore(date, today);

  const isTodayAndEvening = (date: Date) => {
    const selectedDayOfWeek = selectedDate ? format(selectedDate, "EEEE") : null;

    if (!selectedDayOfWeek) return false;

    const closingHour = OpeningHours[selectedDayOfWeek]?.end;
    if (!closingHour) return false;

    const closingTime = new Date(`1970-01-01T${closingHour}:00`);
    return isSameDay(date, today) && hoursNow >= closingTime.getHours();
  };

  return { isWeekend, isPastDate, isTodayAndEvening };
};
