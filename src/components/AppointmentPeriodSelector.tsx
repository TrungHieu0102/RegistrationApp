import { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';

interface AppointmentPeriodSelectorProps {
  selectedPeriod: 'morning' | 'afternoon';
  setSelectedPeriod: (period: 'morning' | 'afternoon') => void;
  mockCurrentTime: Date;
  selectedDate: Date | null;
}

export const AppointmentPeriodSelector = ({
  selectedPeriod,
  setSelectedPeriod,
  mockCurrentTime,
  selectedDate,
} : AppointmentPeriodSelectorProps) => {
  const [isAfternoonOnly, setIsAfternoonOnly] = useState(false);

  useEffect(() => {
    if (!selectedDate) return;

    const isToday = selectedDate.toDateString() === mockCurrentTime.toDateString();
    if (isToday) {
      const currentHour = mockCurrentTime.getHours();

      if (currentHour >= 12) {
        setIsAfternoonOnly(true);
        setSelectedPeriod('afternoon');
      } else {
        setIsAfternoonOnly(false);
      }
    } else {
      setIsAfternoonOnly(false);
    }
  }, [mockCurrentTime, selectedDate, setSelectedPeriod]);

  return (
    <Box mb={3} display="flex" justifyContent="center">
      <Box
        sx={{
          width: {
            xs: '80%',
            sm: '70%',
            md: '50%',
            lg: '30%',
          },
          height: '48px',
          display: 'flex',
          borderRadius: '34px',
          border: '0.25px solid rgba(149, 147, 147, 0.5)',
          backgroundColor: '#fff',
          padding: '2px',
          gap: '15px',
        }}
      >
        {!isAfternoonOnly && (
          <Button
            onClick={() => setSelectedPeriod('morning')}
            sx={{
              flex: 1,
              textTransform: 'none',
              borderRadius: '32px',
              padding: '4px 4px',
              backgroundColor: selectedPeriod === 'morning' ? '#2196f3' : '#fff',
              color: selectedPeriod === 'morning' ? '#fff' : 'rgb(48,48,48)',
             
            }}
          >
            Morning
          </Button>
        )}
        <Button
          onClick={() => setSelectedPeriod('afternoon')}
          sx={{
            flex: 1,
            textTransform: 'none',
            borderRadius: '30px',
            padding: '4px 4px',
            backgroundColor: selectedPeriod === 'afternoon' ? '#2196f3' : '#fff',
            color: selectedPeriod === 'afternoon' ? '#fff' : 'rgb(48,48,48)',
           
          }}
        >
          Afternoon
        </Button>
      </Box>
    </Box>
  );
};
