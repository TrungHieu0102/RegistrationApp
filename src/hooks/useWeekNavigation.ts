import { subDays, addDays, startOfWeek, isBefore } from "date-fns";

const useWeekNavigation = (
  currentStartDate: Date,
  setCurrentStartDate: React.Dispatch<React.SetStateAction<Date>>
) => {
  const initialStartOfWeek = startOfWeek(new Date(), { weekStartsOn: 0 });

  const handlePreviousWeek = () => {
    const newStartDate = subDays(currentStartDate, 7);
    if (isBefore(newStartDate, initialStartOfWeek)) return; 
    setCurrentStartDate(newStartDate);
  };

  const handleNextWeek = () => {
    setCurrentStartDate(addDays(currentStartDate, 7));
  };

  return { handlePreviousWeek, handleNextWeek };
};

export default useWeekNavigation;
