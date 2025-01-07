import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { t } from "i18next";
import MapIcon from "@mui/icons-material/Map";
interface SearchBarProps {
  query: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLocationClick: () => void; 

}

export const SearchBarLocation = ({
  query,
  onSearchChange,
  onLocationClick,
}: SearchBarProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        label={t("Search")}
        fullWidth
        variant="outlined"
        value={query}
        onChange={onSearchChange}
        sx={{
          marginTop: "6px",
          "& .MuiFormControl-root": {
            marginRight: "16px",
            marginBottom: "16px",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
          },
        }}
      />
      <IconButton
        aria-label="map"
        onClick={onLocationClick}
        sx={{
          border: "none",
          display: { xs: "flex", sm: "flex", md: "none" },
          marginLeft: "8px",
        }}
      >
        <MapIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};
