import { Typography } from "@mui/material";
import {
  format,
  isAfter,
  isBefore,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  getDay,
} from "date-fns";

interface StoreStatusProps {
  openHour: number;
  closeHour: number;
}

const StoreStatus: React.FC<StoreStatusProps> = ({ openHour, closeHour }) => {
  const now = new Date();
  const todayOpen = setSeconds(setMinutes(setHours(now, openHour), 0), 0);
  const todayClose = setSeconds(setMinutes(setHours(now, closeHour), 0), 0);

  const isClosedToday = [0, 6].includes(getDay(now));

  if (!isClosedToday && isAfter(now, todayOpen) && isBefore(now, todayClose)) {
    return (
      <Typography
        color="#519B55"
        fontWeight="bold"
        fontSize="16px"
        variant="h6"
      >
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
    <Typography color="#a9a2a2" fontWeight="bold" fontSize="16px" variant="h6">
      Available at {formattedTime}
    </Typography>
  );
};

export default StoreStatus;
