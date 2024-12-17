import React from "react";
import LocationAccordion from "./LocationAccordion";
import locations, { Location } from "../Data/Location";

interface LocationAccordionListProps {
  expandedIndex: number | false;
  handleAccordionChange: (index: number) => void;
  onOpen: (lat: number, lng: number) => void;
}

const LocationAccordionList: React.FC<LocationAccordionListProps> = ({
  expandedIndex,
  handleAccordionChange,
  onOpen,
}) => {
  return (
    <div>
      {locations.map((location: Location, index: number) => (
        <LocationAccordion
          key={location.id}
          index={index}
          expandedIndex={expandedIndex}
          handleChange={handleAccordionChange}
          name={location.name}
          coordinates={location.coordinates}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
};

export default LocationAccordionList;
