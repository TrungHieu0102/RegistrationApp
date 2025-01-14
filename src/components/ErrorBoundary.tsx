import React, { ErrorInfo, ReactNode } from "react";
import { Box, Typography, Link } from "@mui/material";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

const ErrorFallback = () => {
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
      <Typography variant="h4" sx={{ marginBottom: "16px" }}>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "24px" }}>
        Please try again later or return to the home page.
      </Typography>
      <Link href="/" underline="none">
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

export default ErrorBoundary;
