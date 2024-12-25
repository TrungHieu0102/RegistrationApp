import { Box, Stack, Typography, IconButton } from '@mui/material';
import { format } from 'date-fns';
import { useDateLocale } from '../hooks/getDateLocale';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface AppointmentDateSelectorProps {
  currentStartDate: Date;
  weekDays: Date[];
  selectedDate: Date | null;
  handleDateSelect: (date: Date) => void;
  handlePreviousWeek: () => void;
  handleNextWeek: () => void;
  isPastDate: (date: Date) => boolean;
  isWeekend: (date: Date) => boolean;
  isTodayAndEvening: (date: Date) => boolean;
}

export const AppointmentDateSelector = ({
  weekDays,
  selectedDate,
  handleDateSelect,
  handlePreviousWeek,
  handleNextWeek,
  isWeekend,
  isTodayAndEvening,
}: AppointmentDateSelectorProps) => {
  const locale = useDateLocale(); 
  return (
    <Box
      mb={3}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: {
          xs: '100%',
          sm: '80%',
          md: '70%',
        },
        margin: '0 auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        gap: '10px',
        height: '100%',
      }}
    >
      <IconButton onClick={handlePreviousWeek} sx={{ flexShrink: 0, width: '30px', height: '30px' }}>
        <ArrowBackIosIcon />
      </IconButton>

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {weekDays.map((date, index) => (
          <Box
            key={index}
            onClick={() =>
              !isWeekend(date) && !isTodayAndEvening(date) && handleDateSelect(date)
            }
            sx={{
              textAlign: 'center',
              paddingY: '18px',
              cursor:
                isWeekend(date) || isTodayAndEvening(date)
                  ? 'not-allowed'
                  : 'pointer',
              borderRadius: '24px',
              backgroundColor:
                selectedDate && format(date, 'yyyy-MM-dd', { locale }) === format(selectedDate, 'yyyy-MM-dd', { locale })
                  ? '#2196f3'
                  : '#f0f0f0',
              color:
                selectedDate && format(date, 'yyyy-MM-dd', { locale }) === format(selectedDate, 'yyyy-MM-dd', { locale })
                  ? '#fff'
                  : '#000',
              opacity: isWeekend(date) || isTodayAndEvening(date) ? 0.5 : 1,
              transition: '0.3s',
              flex: 1,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
            }}
          >
            <Typography
              noWrap
              sx={{
                fontSize: {
                  xs: '12px',
                  sm: '14px',
                  md: '14px',
                  lg: '16px',
                },
              }}
            >
              {format(date, 'EEE', { locale })}
            </Typography>
            <Typography
              fontWeight="bold"
              noWrap
              sx={{
                fontSize: {
                  xs: '14px',
                  sm: '18px',
                  md: '20px',
                  lg: '24px',
                },
              }}
            >
              {format(date, 'd', { locale })}
            </Typography>
          </Box>
        ))}
      </Stack>

      <IconButton onClick={handleNextWeek} sx={{ flexShrink: 0, width: '30px', height: '30px' }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
