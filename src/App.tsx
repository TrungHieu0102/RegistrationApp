import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme"; // Import theme
import { ChooseBrand } from "./pages/ChooseBrand";
import { ChooseDevice } from "./pages/ChooseDevice";
import { ChooseService } from "./pages/ChooseService";
import { ChooseLocation } from "./pages/ChooseLocation";
import ErrorBoundary from "./components/ErrorBoundary";
import useQueryParams from "./hooks/useQueryParams";

function App() {
  const { brand, deviceId, serviceId } = useQueryParams();

  let content;

  if (serviceId) {
    content = (
      <ErrorBoundary>
        <ChooseLocation />
      </ErrorBoundary>
    );
  } else if (deviceId) {
    content = (
      <ErrorBoundary>
        <ChooseService />
      </ErrorBoundary>
    );
  } else if (brand) {
    content = (
      <ErrorBoundary>
        <ChooseDevice />
      </ErrorBoundary>
    );
  } else {
    content = (
      <ErrorBoundary>
        <ChooseBrand />
      </ErrorBoundary>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
}

export default App;
