import { Box, Link, Typography } from "@mui/material";

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
        textAlign: "center",
        padding: "16px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "96px",
          fontWeight: "bold",
          color: "#1976d2",
          marginBottom: "16px",
        }}
      >
        404
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: "16px" }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "24px" }}>
        The page you are looking for does not exist.
      </Typography>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "18px",
          }}
        >
          Back to home page
        </Typography>
      </Link>
    </Box>
  );
};
