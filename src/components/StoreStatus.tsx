import { Typography } from "@mui/material";
import { format, isAfter, isBefore, addDays, setHours, setMinutes, setSeconds, getDay } from "date-fns";

interface StoreStatusProps {
  OpeningHours: {
    [key: string]: { start: string; end: string };
  }; 
}

export const StoreStatus = ({ props }: { props: StoreStatusProps }) => {
  const now = new Date();
  const currentDay = getDay(now);  

  const todayOpeningHours = props.OpeningHours[Object.keys(props.OpeningHours)[currentDay - 1]]; 
  const [openTime, closeTime] = [todayOpeningHours.start, todayOpeningHours.end];

  if (!openTime || !closeTime) {
    return (
      <Typography color="#a9a2a2" fontWeight="bold" fontSize="16px" variant="h6">
        Closed Today
      </Typography>
    );
  }

  const [openHour, openMinute] = openTime.split(":").map(Number);
  const [closeHour, closeMinute] = closeTime.split(":").map(Number);

  const todayOpen = setSeconds(setMinutes(setHours(now, openHour), openMinute), 0);
  const todayClose = setSeconds(setMinutes(setHours(now, closeHour), closeMinute), 0);

  const isClosedToday = currentDay === 0 || currentDay === 6; 

  if (!isClosedToday && isAfter(now, todayOpen) && isBefore(now, todayClose)) {
    return (
      <Typography color="#519B55" fontWeight="bold" fontSize="16px" variant="h6">
        Available now
      </Typography>
    );
  }

  let nextOpen = todayOpen;
  let daysToAdd = 0;

  while ([0, 6].includes(getDay(nextOpen)) || isAfter(now, nextOpen)) {
    nextOpen = addDays(todayOpen, ++daysToAdd);
  }

  const formattedTime = format(nextOpen, "EEEE 'at' hh:mm a");

  return (
    <Typography color="#519B55" fontWeight="bold" fontSize="16px" variant="h6">
      Available at {formattedTime}
    </Typography>
  );
};
