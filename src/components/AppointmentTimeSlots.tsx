import React from 'react';
import { Box, Button, Stack } from '@mui/material';

interface AppointmentTimeSlotsProps {
  timeSlots: string[];
  selectedTimeSlot: string | null;
  handleTimeSlotSelect: (timeSlot: string) => void;
}

const AppointmentTimeSlots: React.FC<AppointmentTimeSlotsProps> = ({ timeSlots, selectedTimeSlot, handleTimeSlotSelect }) => {
  return (
    <Box marginTop={5}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        {timeSlots.map((timeSlot, index) => (
          <Button
            key={index}
            onClick={() => handleTimeSlotSelect(timeSlot)}
            variant={selectedTimeSlot === timeSlot ? 'contained' : 'outlined'}
            sx={{
              borderRadius: '24px',
              border: 'none',
              textTransform: 'none',
              fontSize: '14px',
              padding: '12px 20px',
              flex: '1 0 150px',
              minWidth: '150px',
              backgroundColor: '#f4f4f4',
              color: 'black',
            }}
          >
            {timeSlot}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default AppointmentTimeSlots;
