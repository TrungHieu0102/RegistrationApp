import { Button } from "@mui/material";
import React from "react";

interface LocationButtonProps {
  name: string;
  lat: number;
  lng: number;
  onClick: (lat: number, lng: number) => void;
}

const LocationButton: React.FC<LocationButtonProps> = ({ name, lat, lng, onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => onClick(lat, lng)} 
      style={{ marginBottom: "10px" }}
    >
      {name}
    </Button>
  );
};

export default LocationButton;
