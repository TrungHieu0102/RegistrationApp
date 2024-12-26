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
import {  t } from "i18next";
import {enGB, vi } from "date-fns/locale"; 
import i18n from "../i18n/i18n";

interface StoreStatusProps {
  OpeningHours: {
    [key: string]: { start: string; end: string };
  };
}

export const StoreStatus = ({ props }: { props: StoreStatusProps }) => {
  const now = new Date();
  const currentDay = getDay(now);

  const todayOpeningHours =
    props.OpeningHours[Object.keys(props.OpeningHours)[currentDay - 1]];
  const [openTime, closeTime] = [
    todayOpeningHours.start,
    todayOpeningHours.end,
  ];

  if (!openTime || !closeTime) {
    return (
      <Typography
        color="#a9a2a2"
        fontWeight="bold"
        fontSize="16px"
        variant="h6"
      >
        Closed Today
      </Typography>
    );
  }

  const [openHour, openMinute] = openTime.split(":").map(Number);
  const [closeHour, closeMinute] = closeTime.split(":").map(Number);

  const todayOpen = setSeconds(
    setMinutes(setHours(now, openHour), openMinute),
    0
  );
  const todayClose = setSeconds(
    setMinutes(setHours(now, closeHour), closeMinute),
    0
  );

  const isClosedToday = currentDay === 0 || currentDay === 6;

  if (!isClosedToday && isAfter(now, todayOpen) && isBefore(now, todayClose)) {
    return (
      <Typography
        color="#519B55"
        fontWeight="bold"
        fontSize="16px"
        variant="h6"
      >
        {t("Available now")}
      </Typography>
    );
  }

  let nextOpen = todayOpen;
  let daysToAdd = 0;

  while ([0, 6].includes(getDay(nextOpen)) || isAfter(now, nextOpen)) {
    nextOpen = addDays(todayOpen, ++daysToAdd);
  }

  let formattedTime;
  const locale = i18n.language === "vi" ? vi : enGB;
  if (locale === vi) {
    formattedTime = format(nextOpen, "EEEE 'lúc' hh:mm a", { locale });
  } else {
    formattedTime = format(nextOpen, "EEEE 'at' hh:mm a", { locale });
  }

  return (
    <Typography color="#519B55" fontWeight="bold" fontSize="16px" variant="h6">
      {t("Available at", { time: formattedTime })}
    </Typography>
  );
};
