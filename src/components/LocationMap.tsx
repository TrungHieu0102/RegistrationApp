import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import locations from "../Data/Location";
import { useEffect } from "react";

const UpdateMapCenter = ({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 10);
    map.flyTo(center, zoom, { animate: true, duration: 1 });
  }, [center, map, zoom]);

  return null;
};

interface LocationMapContainerProps {
  center: [number, number];
  icon: Icon;
  zoom?: number;
  onMarkerClick: (
    id: number,
    lat: number,
    lng: number,
    isActive: boolean
  ) => void;
}

export const LocationMap = ({
  center,
  icon,
  zoom = 11,
  onMarkerClick,
}: LocationMapContainerProps) => {
  const zoomLevel = zoom;
  return (
    <MapContainer
      center={center}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates}
          icon={icon}
          eventHandlers={{
            click: () =>
              onMarkerClick(
                location.id,
                location.coordinates[0],
                location.coordinates[1],
                location.isActive
              ),
          }}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
      <UpdateMapCenter center={center} zoom={zoomLevel} />
    </MapContainer>
  );
};
