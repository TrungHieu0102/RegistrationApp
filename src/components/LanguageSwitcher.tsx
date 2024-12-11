import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import i18n from "i18next";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState<"VN" | "EN">("EN");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleLanguage = (lang: "VN" | "EN") => {
    setLanguage(lang);
    i18n.changeLanguage(lang === "VN" ? "vi" : "en");  
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{
          backgroundColor:"#f4f4f4",
          color:"#000000",
          padding: "8px 16px",
          borderRadius: "30px",
          border:"none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textTransform: "none",
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          {language}
        </Typography>
        <span style={{ fontSize: "10px" }}>▼</span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            padding: "8px",
          },
        }}
      >
        <MenuItem
          onClick={() => toggleLanguage("VN")}
          sx={{
            padding: "8px 20px",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f4f4f4",
            },
          }}
        >
          VN
        </MenuItem>
        <MenuItem
          onClick={() => toggleLanguage("EN")}
          sx={{
            padding: "8px 20px",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f4f4f4",
            },
          }}
        >
          EN
        </MenuItem>
      </Menu>
    </div>
  );
};
