import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "../src/i18n/i18n.ts";
import { Confirm } from "./pages/Confirm.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme.ts";
import { NotFoundPage } from "./components/NotFoundPage.tsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    ),
  },
  {
    path: "/confirm",
    element: (
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Confirm />
        </ThemeProvider>
      </ErrorBoundary>
    ),
  },
  
  {
    path: "*",
    element: (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NotFoundPage />
      </ThemeProvider>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={routes} />
);
