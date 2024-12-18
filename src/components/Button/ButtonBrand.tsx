import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {
  image: string;
  name: string;
}

export const ButtonBrand = ({ props }: { props: ButtonProps }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }} 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3,type: "spring",  stiffness: 100 }} 
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >  <Link to={`/?brand=${props.name}`} style={{ textDecoration: "none" }}>
    <Button
      variant="outlined"
      sx={{
        backgroundColor: "#f4f4f4",
        borderRadius: "22px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        width: "90px",
        height: "110px",
        border: "none",
        fontFamily: " 'Roboto', sans-serif",
        transition: "transform 0.2s ease",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Box
        component="img"
        src={props.image}
        alt={props.name}
        sx={{
          width: "40px",
          height: "40px",
          objectFit: "contain",
          marginBottom: "8px",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
          color: "#000",
          fontWeight: 500,
          textAlign: "center",
          textTransform: "none",
        }}
      >
        {props.name}
      </Typography>
    </Button>
  </Link></motion.div>
  );
};
