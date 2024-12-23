import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { format } from 'date-fns';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

const AppointmentDateSelector: React.FC<AppointmentDateSelectorProps> = ({
  weekDays,
  selectedDate,
  handleDateSelect,
  handlePreviousWeek,
  handleNextWeek,
  isWeekend,
  isTodayAndEvening,
}) => {
  return (
    <Box
      mb={3}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '70%',
        margin: '0 auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        gap: '10px',
        height: '100%',
      }}
    >
      <IconButton onClick={handlePreviousWeek} sx={{ flexShrink: 0, width: '30px', height: '30px' }}>
        <ArrowBackIcon />
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
              padding: '5px',
              cursor:
                 isWeekend(date) || isTodayAndEvening(date)
                  ? 'not-allowed'
                  : 'pointer',
              borderRadius: '24px',
              backgroundColor: selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? '#2196f3' : '#f0f0f0',
              color: selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? '#fff' : '#000',
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
            <Typography noWrap sx={{ fontSize: '12px' }}>
              {format(date, 'EEE')}
            </Typography>
            <Typography fontWeight="bold" noWrap sx={{ fontSize: '14px' }}>
              {format(date, 'd')}
            </Typography>
          </Box>
        ))}
      </Stack>

      <IconButton onClick={handleNextWeek} sx={{ flexShrink: 0, width: '30px', height: '30px' }}>
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default AppointmentDateSelector;
