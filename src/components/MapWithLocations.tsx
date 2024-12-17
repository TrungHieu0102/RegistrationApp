import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import  locations from "../Data/Location";
import { Location } from "../types/data";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export const MapWithLocations: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    const location= locations.find((loc: Location) => loc.id === selectedId) || null;
    setSelectedLocation(location);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Chọn địa điểm:
          <select onChange={handleLocationChange} defaultValue="">
            <option value="" disabled>
              -- Chọn địa điểm --
            </option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <MapContainer
        center={[16.0471, 108.2062]}
        zoom={6}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedLocation && (
          <Marker position={selectedLocation.coordinates}>
            <Popup>{selectedLocation.name}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};
