import { useState } from "react";

const useLocationMap = () => {
  const [center, setCenter] = useState<[number, number]>([10.8231, 106.6297]);
  const [zoom, setZoom] = useState<number>(11);

  const changeCenter = (lat: number, lng: number) => {
    setCenter([lat, lng]);
    setZoom(17);
  };
  const defaultZoom =()=>{
    setZoom(11)
  }
  return { center, changeCenter, zoom,defaultZoom };
};

export default useLocationMap;
