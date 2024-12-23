import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5", 
    },
    secondary: {
      main: "#dc004e", 
    },
    background: {
      default: "#ffffff", 
      paper: "#ffffff",
    },
    text: {
      primary: "#333", 
      secondary: "#555", 
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto,  Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#666",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
        },
      },
    },
  },
  
});

export default theme;
