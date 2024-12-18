import React, { useState } from "react";
import { LocationAccordion } from "./LocationAccordion";
import locations, { Location } from "../Data/Location";
import { SearchBarLocation } from "./SearchBarLocation";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface LocationAccordionListProps {
  expandedIndex: number | false;
  handleAccordionChange: (index: number) => void;
  onOpen: (lat: number, lng: number) => void;
}

export const LocationAccordionList = ({
  props,
}: {
  props: LocationAccordionListProps;
}) => {
  const [query, setQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredLocations = locations.filter((location: Location) =>
    location.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        paddingRight: "5px",
      }}
    >
      <SearchBarLocation
        props={{ query: query, onSearchChange: handleSearchChange }}
      />

      <Box
        sx={{
          paddingRight: "5px",
          marginTop: "8px",
          overflowY: "auto",
          overflowX: "hidden",
          maxHeight: "500px",
          scrollbarColor: "rgb(180, 175, 175)",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgb(200, 200, 200)",
            borderRadius: "20px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(136, 185, 220)",
            borderRadius: "20px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#8c8c8c",
          },
          "&::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#555555",
          },
        }}
      >
        {filteredLocations.map((location: Location, index: number) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <LocationAccordion
              key={location.id}
              props={{
                index: location.id,
                expandedIndex: props.expandedIndex,
                handleChange: props.handleAccordionChange,
                id: location.id,
                name: location.name,
                coordinates: location.coordinates,
                onOpen: props.onOpen,
                isActive: location.isActive,
              }}
            />
          </motion.div>
        ))}
      </Box>
    </div>
  );
};
