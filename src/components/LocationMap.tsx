import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import locations from "../Data/Location";
import images from "../assets/images";
import { useState } from "react";
import LocationAccordion from "./LocationAccordion";
import {  Grid } from "@mui/material";

const UpdateMapCenter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.flyTo(center, 13, { animate: true, duration: 1.5 });
  return null;
};
export const LocationMap = () => {
  const icon = new Icon({
    iconUrl: images.iconmap,
    iconSize: [38, 38],
  });

  const [center, setCenter] = useState<[number, number]>([10.8231, 106.6297]);

  const changeCenter = (lat: number, lng: number) => {
    setCenter([lat, lng]);
  };

  return (
    <Grid container spacing={2}>
      {/* Accordion List of Locations */}
      <Grid item xs={4}>
        {locations.map((location) => (
          <LocationAccordion
            key={location.id}
            name={location.name}
            address={`Địa chỉ của ${location.name}`}
            openTime="8:00 AM"
            closeTime="9:00 PM"
            coordinates={location.coordinates}
            onOpen={changeCenter}
          />
        ))}
      </Grid>
      <Grid item xs={8}>
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "700px", width: "100%" }}
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
            >
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
          <UpdateMapCenter center={center} />
        </MapContainer>
      </Grid>
    </Grid>
  );
};
