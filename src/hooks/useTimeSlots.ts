export const useTimeSlots = (start: string, end: string, selectedDate: Date, currentTime: Date): string[] => {
  const generateTimeSlots = (start: string, end: string, selectedDate: Date, currentTime: Date): string[] => {
    const startTime = new Date(selectedDate);
    const endTime = new Date(selectedDate);
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    startTime.setHours(startHour, startMinute, 0, 0);
    endTime.setHours(endHour, endMinute, 0, 0);

    const timeSlots: string[] = [];
    const isToday = selectedDate.toDateString() === currentTime.toDateString();
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday

    // Kiểm tra nếu là thứ 7 hoặc chủ nhật
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    while (startTime < endTime) {
      const hours = startTime.getHours();
      const minutes = startTime.getMinutes();
      const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

      if (!isWeekend && (!isToday || startTime > currentTime)) {
        timeSlots.push(formattedTime);
      }

      startTime.setMinutes(startTime.getMinutes() + 30); 
    }

    return timeSlots;
  };

  return generateTimeSlots(start, end, selectedDate, currentTime);
};
