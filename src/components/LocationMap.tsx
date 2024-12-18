import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import locations from "../Data/Location";

const UpdateMapCenter = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 2); // Start at zoom level 2 (distant view)
    map.flyTo(center, zoom, { animate: true, duration: 2 }); // Animate zoom to level 13
  }, [center, map, zoom]);

  return null;
};

interface LocationMapContainerProps {
  center: [number, number];
  icon: Icon;
}

export const LocationMap: React.FC<LocationMapContainerProps> = ({ center, icon }) => {
  const zoomLevel = 15; 

  return (
    <MapContainer
      center={center}
      zoom={5} 
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker key={location.id} position={location.coordinates} icon={icon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
      <UpdateMapCenter center={center} zoom={zoomLevel} />
    </MapContainer>
  );
};
