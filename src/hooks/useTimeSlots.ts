export const useTimeSlots = (start: string, end: string, currentTime: Date): string[] => {
    const generateTimeSlots = (start: string, end: string, currentTime: Date): string[] => {
      const startTime = new Date();
      const endTime = new Date();
      const [startHour, startMinute] = start.split(":").map(Number);
      const [endHour, endMinute] = end.split(":").map(Number);
  
      startTime.setHours(startHour, startMinute, 0, 0);
      endTime.setHours(endHour, endMinute, 0, 0);
  
      const timeSlots: string[] = [];
  
      while (startTime < endTime) {
        if (startTime.getHours() > currentTime.getHours()) {
          const hours = startTime.getHours();
          const minutes = startTime.getMinutes();
          const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
            minutes < 10 ? "0" : ""
          }${minutes}`;
          timeSlots.push(formattedTime);
        }
        startTime.setMinutes(startTime.getMinutes() + 30);
      }
  
      return timeSlots;
    };
  
    return generateTimeSlots(start, end, currentTime);
  };
  