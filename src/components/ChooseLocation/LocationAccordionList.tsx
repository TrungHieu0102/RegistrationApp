import React, { useState, useEffect, useRef } from "react";
import { LocationAccordion } from "./LocationAccordion";
import { Location } from "../../Data/Location";
import { SearchBarLocation } from "./SearchBarLocation";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useLocations } from "../../hooks/useLocations";

interface LocationAccordionListProps {
  expandedIndex: number | false;
  handleAccordionChange: (index: number) => void;
  onOpen: (id: number, lat: number, lng: number, isActive: boolean) => void;
  onClose: () => void;
}

export const LocationAccordionList = ({
  props,
}: {
  props: LocationAccordionListProps;
}) => {
  const [query, setQuery] = useState<string>(""); 
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const debounceTimeout = useRef<number | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setDebouncedQuery(query); 
    }, 300); 

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [query]);

  const locations = useLocations();

  const filteredLocations = locations.filter((location: Location) =>
    location.name?.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div style={{ paddingRight: "5px" }}>
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
            backgroundColor: " #8c8c8c",
            borderRadius: "20px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#8c8c8c",
          },
          "&::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#555555",
          },
          "@media (max-width: 899px)": {
            overflowY: "visible",
            maxHeight: "none",
          },
        }}
      >
        {filteredLocations.map((location: Location, index: number) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              stiffness: 90,
            }}
            layout
          >
            <LocationAccordion
              key={location.id}
              props={{
                index: location.id,
                expandedIndex: props.expandedIndex,
                handleChange: props.handleAccordionChange,
                id: location.id,
                name: location.name,
                address: location.address,
                coordinates: location.coordinates,
                onOpen: props.onOpen,
                isActive: location.isActive,
                onClose: props.onClose,
              }}
            />
          </motion.div>
        ))}
      </Box>
    </div>
  );
};
