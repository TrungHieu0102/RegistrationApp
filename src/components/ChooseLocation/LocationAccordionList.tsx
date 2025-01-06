import React from "react";
import { LocationAccordion } from "./LocationAccordion";
import { Location } from "../../Data/Location";
import { SearchBarLocation } from "./SearchBarLocation";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface LocationAccordionListProps {
  expandedIndex: number | false;
  handleAccordionChange: (index: number) => void;
  onOpen: (id: number, lat: number, lng: number, isActive: boolean) => void;
  onClose: () => void;
  locations: Location[];
  setQuery: (query: string) => void;
  query: string;
}
export const LocationAccordionList = ({
  expandedIndex, ...props
}:  LocationAccordionListProps) => {
  const { locations, setQuery, query } = props;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div style={{ paddingRight: "5px" }}>
      <SearchBarLocation query={query} onSearchChange={handleSearchChange} />

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
        {locations.map((location: Location, index: number) => (
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
              index={location.id}
              expandedIndex={expandedIndex}
              handleChange={props.handleAccordionChange}
              id={location.id}
              name={location.name}
              address={location.address}
              coordinates={location.coordinates}
              onOpen={props.onOpen}
              isActive={location.isActive}
              onClose={props.onClose}
            />
          </motion.div>
        ))}
      </Box>
    </div>
  );
};
