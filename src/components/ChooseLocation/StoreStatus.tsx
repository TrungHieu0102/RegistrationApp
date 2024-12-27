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
import { enGB, vi } from "date-fns/locale";
import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";

interface StoreStatusProps {
  OpeningHours: {
    [key: string]: { start: string; end: string };
  };
}

export const StoreStatus = ({ props }: { props: StoreStatusProps }) => {
  const now = new Date();
  const currentDay = getDay(now);
  const { t } = useTranslation();

  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayOpeningHours = props.OpeningHours[weekDays[currentDay]];

  if (!todayOpeningHours || !todayOpeningHours.start || !todayOpeningHours.end) {
    return (
      <Typography
        color="#a9a2a2"
        fontWeight="bold"
        fontSize="16px"
        variant="h6"
      >
          {t("Closed Today")}
          </Typography>
    );
  }

  const [openHour, openMinute] = todayOpeningHours.start.split(":").map(Number);
  const [closeHour, closeMinute] = todayOpeningHours.end.split(":").map(Number);

  const todayOpen = setSeconds(setMinutes(setHours(now, openHour), openMinute), 0);
  const todayClose = setSeconds(setMinutes(setHours(now, closeHour), closeMinute), 0);

  if (isAfter(now, todayOpen) && isBefore(now, todayClose)) {
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

  while (!props.OpeningHours[weekDays[getDay(nextOpen)]] || isAfter(now, nextOpen)) {
    daysToAdd++;
    nextOpen = addDays(now, daysToAdd);
  }

  const nextOpeningDay = weekDays[getDay(nextOpen)];
  const nextOpeningHours = props.OpeningHours[nextOpeningDay];

  if (nextOpeningHours) {
    const [nextOpenHour, nextOpenMinute] = nextOpeningHours.start.split(":").map(Number);
    nextOpen = setSeconds(
      setMinutes(setHours(nextOpen, nextOpenHour), nextOpenMinute),
      0
    );
  }

  const locale = i18n.language === "vi" ? vi : enGB;
  const formattedTime = format(nextOpen, "EEEE 'at' hh:mm a", { locale });

  return (
    <Typography color="#519B55" fontWeight="bold" fontSize="16px" variant="h6">
      {t("Available at", { time: formattedTime })}
    </Typography>
  );
};
