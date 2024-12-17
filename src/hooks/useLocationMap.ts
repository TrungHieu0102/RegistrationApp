import { useState } from "react";

const useLocationMap = () => {
  const [center, setCenter] = useState<[number, number]>([10.8231, 106.6297]);

  const changeCenter = (lat: number, lng: number) => {
    setCenter([lat, lng]);
  };

  return { center, changeCenter };
};

export default useLocationMap;
