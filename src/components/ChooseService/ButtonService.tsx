import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useQueryParams from "../../hooks/useQueryParams";
import { motion } from "framer-motion";

interface ButtonProps {
  name: string;
  duration: string;
  id: number;
}
export const ButtonService = ({ props }: { props: ButtonProps }) => {
  const { brand, deviceId } = useQueryParams();
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
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
    >
      <Link
        to={`?brand=${brand}&deviceId=${deviceId}&serviceId=${props.id}`}
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#f4f4f4",
            borderRadius: "22px",
            boxSizing: "border-box",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px",
            cursor: "pointer",
            width: "250px",
            height: "70px",
            border: "none",
          }}
        >
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
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "rgb(77, 77, 77)",
              fontWeight: 500,
              textAlign: "center",
              textTransform: "none",
            }}
          >
            {props.duration}
          </Typography>
        </Button>
      </Link>
    </motion.div>
  );
};
