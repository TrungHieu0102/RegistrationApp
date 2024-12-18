import React from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
  query: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBarLocation = ({ props }: { props: SearchBarProps }) => {
  return (
    <TextField
      label="Search"
      fullWidth
      variant="outlined"
      value={props.query}
      onChange={props.onSearchChange}
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
