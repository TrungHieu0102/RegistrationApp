import React from "react";
import { TextField } from "@mui/material";
import { t } from "i18next";

interface SearchBarProps {
  query: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBarLocation = ({ query,onSearchChange }:  SearchBarProps ) => {
  return (
    <TextField
      label={t('Search')} 
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
  );
};
