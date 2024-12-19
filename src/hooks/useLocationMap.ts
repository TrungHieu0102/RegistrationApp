import { useState } from "react";

const useLocationMap = () => {
  const [center, setCenter] = useState<[number, number]>([10.8231, 106.6297]);
  const [zoom, setZoom] = useState<number>();

  const changeCenter = (lat: number, lng: number) => {
    setCenter([lat, lng]);
    setZoom(15);
  };
  const defaultZoom =()=>{
    setZoom(11)
  }
  return { center, changeCenter, zoom,defaultZoom };
};

export default useLocationMap;
