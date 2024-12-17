// LocationMapContainer.tsx
import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import locations from "../Data/Location";

const UpdateMapCenter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.flyTo(center, 13, { animate: true, duration: 1.5 });
  return null;
};

interface LocationMapContainerProps {
  center: [number, number];
  icon: Icon;
}

export const LocationMap: React.FC<LocationMapContainerProps> = ({ center, icon }) => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker key={location.id} position={location.coordinates} icon={icon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
      <UpdateMapCenter center={center} /> 
    </MapContainer>
  );
};
