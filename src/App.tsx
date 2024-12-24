import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { ChooseBrand } from "./pages/ChooseBrand";
import { ChooseDevice } from "./pages/ChooseDevice";
import { ChooseService } from "./pages/ChooseService";
import ErrorBoundary from "./components/ErrorBoundary";
import useQueryParams from "./hooks/useQueryParams";
import { ChooseLocation } from "./pages/ChooseLocation";
import { ChooseTime } from "./pages/ChooseTime";

function App() {
  const { brand, deviceId, serviceId, locationId, paramCount } =
    useQueryParams();

  let content;
  if (locationId && paramCount === 4) {
    content = <ChooseTime />;
  } else if (serviceId && paramCount === 3) {
    content = <ChooseLocation />;
  } else if (deviceId && paramCount === 2) {
    content = <ChooseService />;
  } else if (brand && paramCount === 1) {
    content = <ChooseDevice />;
  } else {
    content = <ChooseBrand />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
